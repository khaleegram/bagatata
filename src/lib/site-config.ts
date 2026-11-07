function publicUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (["http:", "https:"].includes(url.protocol)) return url.origin;
    return undefined;
  } catch {
    return undefined;
  }
}

/**
 * Current public deployment, used until a custom domain is purchased.
 * Set NEXT_PUBLIC_SITE_URL to override it — canonicals, the sitemap and
 * robots.txt all follow this value.
 */
const DEPLOYMENT_URL = "https://bagatata.vercel.app";

export const siteConfig = {
  url: publicUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? DEPLOYMENT_URL,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
};
