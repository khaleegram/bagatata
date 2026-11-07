function publicUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol)) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export const siteConfig = {
  url: publicUrl(process.env.NEXT_PUBLIC_SITE_URL),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
};
