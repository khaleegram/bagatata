import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/content/products";
import { ProductArt } from "@/components/products/ProductArt";
import { Arrow } from "@/components/ui/Arrow";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: siteConfig.url ? { canonical: `/products/${slug}` } : undefined,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <div className={`product-detail ${product.slug}`}>
      <div className="container">
        <Link href="/products" className="back-link">
          ← All products
        </Link>
        <div className="product-detail-heading">
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1>
              {product.name}
              <span>.</span>
            </h1>
          </div>
          <p>{product.summary}</p>
        </div>
        <div className="product-detail-visual">
          <ProductArt slug={product.slug} />
          <span className="illustration-caption">
            Illustrative interface — not a product screenshot
          </span>
        </div>
        <div className="product-detail-body">
          <div>
            <span className="eyebrow">The problem</span>
            <h2>
              Built around
              <br />
              the work.
            </h2>
            <p>{product.problem}</p>
          </div>
          <div>
            <span className="eyebrow">The approach</span>
            <p>{product.solution}</p>
            <ul className="detail-highlights">
              {product.highlights.map((highlight) => (
                <li key={highlight}>
                  <span aria-hidden="true">↗</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="product-detail-actions">
              {product.externalLinkEnabled && product.knownDomain ? (
                <>
                  <a
                    className="button button-gold"
                    href={product.knownDomain}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit product website <Arrow />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <Link href="/#contact" className="text-link">
                    Ask about {product.name} <Arrow />
                  </Link>
                </>
              ) : (
                <Link href="/#contact" className="button button-gold">
                  Ask about {product.name}
                  <Arrow />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="other-products">
          <span className="eyebrow">Keep exploring</span>
          <div>
            {products
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <Link href={`/products/${item.slug}`} key={item.slug}>
                  <span>{item.name}</span>
                  <Arrow />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
