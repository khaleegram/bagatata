"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";
import { products } from "@/content/products";
import { Arrow } from "@/components/ui/Arrow";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { Brand } from "./Brand";
import "@/styles/navigation.css";

type Section = "home" | "products" | "services" | "about" | "contact";

function Navigation({ pathname }: { pathname: string }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [section, setSection] = useState<Section>("home");
  const header = useRef<HTMLElement>(null);
  const productToggle = useRef<HTMLButtonElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = pathname.startsWith("/products")
    ? "products"
    : pathname === "/"
      ? section
      : undefined;

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      if (pathname !== "/") return;
      const sections: Section[] = ["products", "services", "about", "contact"];
      const visible = sections.filter((id) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= 180;
      });
      setSection(visible.at(-1) ?? "home");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setProductsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        productToggle.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [productsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const resize = () => {
      if (window.innerWidth >= 1000) dialog.current?.close();
    };
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("resize", resize);
    };
  }, [mobileOpen]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  function openProducts() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  }

  function closeProducts() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(false);
  }

  function closeMobile() {
    dialog.current?.close();
  }

  return (
    <>
      <header
        ref={header}
        className={`site-header${scrolled ? " is-scrolled" : ""}${productsOpen ? " has-dropdown" : ""}`}
      >
        <div className="header-inner">
          <Brand />
          <nav className="desktop-navigation" aria-label="Primary navigation">
            <Link
              href="/"
              className="nav-link"
              aria-current={current === "home" ? "page" : undefined}
              onClick={closeProducts}
            >
              Home
            </Link>
            <div
              className="products-navigation"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") openProducts();
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse")
                  closeTimer.current = setTimeout(
                    () => setProductsOpen(false),
                    180,
                  );
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  closeProducts();
              }}
            >
              <button
                ref={productToggle}
                className={`nav-link products-trigger products-toggle${current === "products" ? " is-current" : ""}${productsOpen ? " is-open" : ""}`}
                aria-label="Explore products"
                aria-expanded={productsOpen}
                aria-controls="products-dropdown"
                onClick={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setProductsOpen((open) => !open);
                }}
              >
                Products{" "}
                <svg
                  viewBox="0 0 12 12"
                  width="12"
                  height="12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m3 4.5 3 3 3-3" />
                </svg>
              </button>
              <div
                id="products-dropdown"
                className="products-dropdown"
                hidden={!productsOpen}
              >
                <div className="dropdown-heading">
                  <span>Meet the products.</span>
                  <Link
                    href="/products"
                    className="text-link"
                    onClick={closeProducts}
                  >
                    View all products <Arrow diagonal={false} />
                  </Link>
                </div>
                <div className="dropdown-products">
                  {products.map((product) => (
                    <Link
                      href={`/products/${product.slug}`}
                      className={`dropdown-product ${product.slug}`}
                      key={product.slug}
                      onClick={closeProducts}
                    >
                      <span className="dropdown-product-icon">
                        <ProductIcon slug={product.slug} />
                      </span>
                      <span className="dropdown-product-copy">
                        <strong>{product.name}</strong>
                        <small>{product.category}</small>
                      </span>
                      <Arrow />
                    </Link>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <span>Different problems. Useful software.</span>
                  <span>
                    Built from Nigeria <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>
            </div>
            {navigation.map((item) => (
              <Link
                href={item.href}
                className="nav-link"
                aria-current={current === item.section ? "location" : undefined}
                key={item.label}
                onClick={closeProducts}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/#contact" className="header-cta" onClick={closeProducts}>
            Start a project{" "}
            <span>
              <Arrow />
            </span>
          </Link>
          <button
            ref={mobileToggle}
            className="mobile-toggle"
            aria-label="Open navigation"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              closeProducts();
              dialog.current?.showModal();
              setMobileOpen(true);
            }}
          >
            <span className="mobile-toggle-label">Menu</span>
            <span className="menu-lines">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-dialog"
        aria-label="Site navigation"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const links = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not(:disabled)",
          );
          const first = links[0],
            last = links[links.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
          if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setMobileOpen(false);
          mobileToggle.current?.focus({ preventScroll: true });
        }}
      >
        <div className="mobile-dialog-header">
          <Brand onClick={closeMobile} />
          <button
            className="mobile-close"
            aria-label="Close navigation"
            onClick={closeMobile}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        </div>
        <div className="mobile-dialog-body">
          <div className="mobile-navigation-label">
            <span>Explore Bagatata</span>
            <span>Navigation / 01</span>
          </div>
          <nav aria-label="Mobile navigation">
            <Link
              href="/"
              className="mobile-main-link"
              aria-current={current === "home" ? "page" : undefined}
              onClick={closeMobile}
            >
              <span>
                <small aria-hidden="true">01</small>Home
              </span>
              <Arrow />
            </Link>
            <Link
              href="/products"
              className="mobile-main-link"
              aria-current={current === "products" ? "page" : undefined}
              onClick={closeMobile}
            >
              <span>
                <small aria-hidden="true">02</small>Products
              </span>
              <Arrow />
            </Link>
            <div className="mobile-product-links">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className={product.slug}
                  onClick={closeMobile}
                >
                  <ProductIcon slug={product.slug} />
                  <span>{product.name}</span>
                  <Arrow />
                </Link>
              ))}
            </div>
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="mobile-main-link"
                aria-current={current === item.section ? "location" : undefined}
                onClick={closeMobile}
              >
                <span>
                  <small aria-hidden="true">0{index + 3}</small>
                  {item.label}
                </span>
                <Arrow />
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <Link
              href="/#contact"
              className="button button-gold"
              onClick={closeMobile}
            >
              Start a project <Arrow />
            </Link>
            <div className="mobile-dialog-footer">
              <span>Independent by design.</span>
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  return <Navigation key={pathname} pathname={pathname} />;
}
