import Link from "next/link";
import { BrandMark } from "@/components/ui/BrandMark";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="brand"
      aria-label="Bagatata Technologies Limited home"
      onClick={onClick}
    >
      <BrandMark className="brand-mark" sizes="64px" priority />
      <span className="brand-type">
        <span className="brand-name">BAGATATA</span>
        <span className="brand-subtitle">TECHNOLOGIES LIMITED</span>
      </span>
    </Link>
  );
}
