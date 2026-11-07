import Link from "next/link";
import { products } from "@/content/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { productExplorerCopy } from "@/content/home";
import "@/styles/product-explorer.css";

export function ProductExplorer({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section
      className={`products-section${standalone ? " standalone" : ""}`}
      id="products"
      aria-labelledby="products-heading"
    >
      <div className="container">
        <SectionLabel
          number="01"
          aside="Independent thinking. Tangible products."
        >
          Selected products
        </SectionLabel>
        <div className="products-heading">
          <h2 id="products-heading">
            {productExplorerCopy.heading}
            <span>{productExplorerCopy.emphasis}</span>
          </h2>
          <div className="products-heading-side">
            <p>{productExplorerCopy.description}</p>
            {!standalone && (
              <Link className="products-all-link" href="/products">
                View all products
                <span>
                  <Arrow diagonal={false} />
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
        <div className="portfolio-footnote">
          <span className="mono">
            Four perspectives. One engineering mindset.
          </span>
          <p>Interface visuals are illustrative concepts.</p>
        </div>
      </div>
    </section>
  );
}
