import type { Metadata } from "next";
import { ProductExplorer } from "@/components/sections/ProductExplorer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Loomis, EventTicketsNG, ChatCart and ArewaVanta: software shaped around real workflows.",
  alternates: siteConfig.url ? { canonical: "/products" } : undefined,
};

export default function ProductsPage() {
  return (
    <>
      <div className="container page-intro">
        <span className="eyebrow">Products & work</span>
        <h1>
          Products built for
          <br />
          <span>real workflows.</span>
        </h1>
        <p>
          From school operations and live events to commerce and competitive
          communities, our portfolio reflects one approach: find a clear
          problem, then build a system that makes it easier to solve.
        </p>
      </div>
      <ProductExplorer standalone />
    </>
  );
}
