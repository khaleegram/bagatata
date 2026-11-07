import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  return [
    "/",
    "/products",
    ...products.map(({ slug }) => `/products/${slug}`),
  ].map((path) => ({ url: `${siteConfig.url}${path}` }));
}
