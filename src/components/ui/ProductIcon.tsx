import type { ProductSlug } from "@/content/products";

export function ProductIcon({ slug }: { slug: ProductSlug }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {slug === "loomis" && (
        <>
          <path d="m3 8 9-5 9 5-9 5-9-5Z" />
          <path d="M6 10v6c3 3 9 3 12 0v-6M21 8v7" />
        </>
      )}
      {slug === "eventticketsng" && (
        <>
          <path d="M4 5h16v5a2 2 0 0 0 0 4v5H4v-5a2 2 0 0 0 0-4V5Z" />
          <path d="M15 5v2m0 3v1m0 3v1m0 3v1" />
        </>
      )}
      {slug === "chatcart" && (
        <>
          <path d="M20 11a7 7 0 0 1-7 7H8l-5 3v-8a8 8 0 0 1 8-8h2a7 7 0 0 1 7 6Z" />
          <path d="M8 10h7m-7 4h4" />
        </>
      )}
      {slug === "arewavanta" && (
        <>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 2v5m0 10v5M2 12h5m10 0h5" />
          <circle cx="12" cy="12" r="2" />
        </>
      )}
    </svg>
  );
}
