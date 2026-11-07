import {
  allowInquiry,
  contactIsConfigured,
  deliverInquiry,
  validateInquiry,
} from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return Response.json(
      { error: "Please send your inquiry from this website." },
      { status: 403 },
    );
  if (!contactIsConfigured())
    return Response.json(
      {
        error:
          "Online inquiries are not available yet. Please try again later.",
      },
      { status: 503 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return Response.json({ error: "Invalid request format." }, { status: 415 });
  // Bound the actual stream, including requests without Content-Length.
  const reader = request.body?.getReader();
  if (!reader)
    return Response.json(
      { error: "Please complete the form." },
      { status: 400 },
    );
  let length = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > 24000) {
        await reader.cancel();
        return Response.json(
          { error: "Please shorten your inquiry." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    const input: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (
      input &&
      typeof input === "object" &&
      "website" in input &&
      input.website
    )
      return Response.json(
        { error: "We couldn’t accept this inquiry." },
        { status: 400 },
      );
    const { data, error } = validateInquiry(input);
    if (!data) return Response.json({ error }, { status: 400 });
    if (!allowInquiry(request.headers, data.email))
      return Response.json(
        { error: "Too many inquiries. Please try again in ten minutes." },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    await deliverInquiry(data);
    return Response.json({ sent: true });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof SyntaxError
            ? "Please check the form and try again."
            : "We couldn’t send your inquiry. Please try again later.",
      },
      { status: error instanceof SyntaxError ? 400 : 502 },
    );
  }
}
