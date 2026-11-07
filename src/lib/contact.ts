import "server-only";
import { createHmac, randomUUID } from "node:crypto";
import { projectTypes } from "@/content/contact";

export function contactIsConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_FROM_EMAIL &&
    process.env.CONTACT_TO_EMAIL,
  );
}

export interface Inquiry {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
  budget: string;
}

export function validateInquiry(input: unknown): {
  data?: Inquiry;
  error?: string;
} {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { error: "Please check the form and try again." };
  const raw = input as Record<string, unknown>;
  const read = (key: string, max: number) =>
    typeof raw[key] === "string" && (raw[key] as string).length <= max
      ? (raw[key] as string).trim()
      : undefined;
  const name = read("name", 100),
    email = read("email", 254),
    company = read("company", 200) ?? "",
    projectType = read("projectType", 60) ?? "",
    message = read("message", 5000),
    budget = read("budget", 150) ?? "";
  if (
    !name ||
    name.length < 2 ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    /[\r\n]/.test(name + email) ||
    !message ||
    message.length < 20
  )
    return {
      error:
        "Enter your name, a valid email, and a project description of at least 20 characters.",
    };
  if (
    projectType &&
    !projectTypes.includes(projectType as (typeof projectTypes)[number])
  )
    return { error: "Choose a project type from the list." };
  if (
    ["company", "projectType", "budget"].some(
      (key) => raw[key] !== undefined && typeof raw[key] !== "string",
    )
  )
    return { error: "Please check the form fields." };
  if (
    (typeof raw.company === "string" && raw.company.length > 200) ||
    (typeof raw.budget === "string" && raw.budget.length > 150)
  )
    return { error: "Please shorten the company or budget field." };
  return {
    data: {
      name,
      email: email.toLowerCase(),
      company,
      projectType,
      message,
      budget,
    },
  };
}

const attempts = new Map<string, { count: number; reset: number }>();
const windowMs = 10 * 60 * 1000;
const runtimeSecret = randomUUID();

export function allowInquiry(headers: Headers, email: string) {
  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.reset <= now) attempts.delete(key);
  // Email limiting always applies. IP limiting is opt-in because proxy headers
  // must only be trusted when the deployment platform overwrites them.
  const identities = [`email:${email}`];
  const headerName = process.env.CONTACT_CLIENT_IP_HEADER;
  if (headerName && process.env.CONTACT_RATE_LIMIT_SECRET) {
    const ip = headers.get(headerName)?.split(",")[0]?.trim();
    if (ip) identities.push(`ip:${ip}`);
  }
  if (attempts.size >= 10000) return false;
  const keys = identities.map((value) =>
    createHmac("sha256", process.env.CONTACT_RATE_LIMIT_SECRET || runtimeSecret)
      .update(value)
      .digest("hex"),
  );
  if (keys.some((key) => (attempts.get(key)?.count ?? 0) >= 4)) return false;
  for (const key of keys) {
    const current = attempts.get(key);
    attempts.set(key, {
      count: (current?.count ?? 0) + 1,
      reset: current?.reset ?? now + windowMs,
    });
  }
  return true;
}

export async function deliverInquiry(data: Inquiry) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: data.email,
      subject: `Website project inquiry${data.projectType ? `: ${data.projectType}` : ""}`,
      text: [
        `Name: ${data.name}`,
        `Reply email: ${data.email}`,
        `Company: ${data.company || "Not provided"}`,
        `Project type: ${data.projectType || "Not specified"}`,
        `Budget: ${data.budget || "Not specified"}`,
        "",
        data.message,
      ].join("\n"),
    }),
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error("Delivery provider unavailable");
  const result: unknown = await response.json();
  if (
    !result ||
    typeof result !== "object" ||
    !("id" in result) ||
    typeof result.id !== "string"
  )
    throw new Error("Delivery not acknowledged");
}
