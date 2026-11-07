import Link from "next/link";
import { Brand } from "./Brand";
import { products } from "@/content/products";
import { company } from "@/content/company";
import { Arrow } from "@/components/ui/Arrow";
import { footerCopy, footerNavigation } from "@/content/footer";
import "@/styles/footer.css";

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-intro">
          <h2>
            {footerCopy.heading}
            <span>{footerCopy.emphasis}</span>
          </h2>
          <div className="footer-invitation">
            <p>{footerCopy.invitation}</p>
            <Link href="/#contact" className="footer-cta">
              {footerCopy.cta}
              <span>
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-company">
            <Brand />
            <p>
              {footerCopy.description}
              <span>{footerCopy.signature}</span>
            </p>
            <dl className="footer-location">
              <dt>Based in</dt>
              <dd>{company.location}</dd>
            </dl>
          </div>
          <nav
            className="footer-links"
            aria-labelledby="footer-explore-heading"
          >
            <h3 id="footer-explore-heading">Explore</h3>
            <ul>
              {footerNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            className="footer-links footer-products"
            aria-labelledby="footer-products-heading"
          >
            <h3 id="footer-products-heading">Products &amp; work</h3>
            <ul>
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`}>
                    {product.name}
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>
              © {new Date().getFullYear()} {company.name}
            </p>
            <span>{company.registration}</span>
          </div>
          <div className="footer-utilities">
            <Link href="/privacy" className="footer-privacy">
              Privacy notice
            </Link>
            <a href="#main-content" className="footer-back-top">
              Back to top <Arrow />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
