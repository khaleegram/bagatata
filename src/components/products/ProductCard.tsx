import Link from "next/link";
import type { Product } from "@/content/products";
import { ProductArt } from "./ProductArt";
import { Arrow } from "@/components/ui/Arrow";
import { ProductIcon } from "@/components/ui/ProductIcon";

export function ProductCard({ product }: { product: Product }) {
  const wide = product.slug === "loomis" || product.slug === "eventticketsng";
  const liveUrl = product.externalLinkEnabled ? product.knownDomain : null;

  const content = (
    <>
      <div className="product-card-top">
        <span className="product-category">
          <ProductIcon slug={product.slug} />
          {product.category}
        </span>
        <span className="product-card-index">{product.number} / 04</span>
      </div>
      <div className="product-art-stage">
        <ProductArt slug={product.slug} />
        <span className="illustration-caption">Illustrative interface</span>
      </div>
      <div className="product-card-info">
        <div className="product-card-title">
          <h3>
            {product.name}
            <span>.</span>
          </h3>
        </div>
        <p>{product.summary}</p>
        <div className="product-card-bottom">
          <div className="product-chips">
            {product.highlights.slice(0, 3).map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
          <span className="product-card-cta">
            <span>Explore {product.name}</span>
            <span className="product-card-cta-icon">
              <Arrow />
            </span>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <article
      className={`product-card${wide ? " product-card-wide" : ""} ${product.slug}`}
    >
      {liveUrl ? (
        <a
          className="product-card-link"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Explore ${product.name} (opens in a new tab)`}
        >
          {content}
        </a>
      ) : (
        <Link
          className="product-card-link"
          href={`/products/${product.slug}`}
          aria-label={`Explore ${product.name}`}
        >
          {content}
        </Link>
      )}
    </article>
  );
}
