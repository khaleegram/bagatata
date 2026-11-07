import Image from "next/image";
import type { CSSProperties } from "react";
import { brandMark } from "@/content/brand";

type BrandMarkProps = {
  className?: string;
  alt?: string;
  sizes: string;
  priority?: boolean;
};

export function BrandMark({
  className = "",
  alt = "",
  sizes,
  priority = false,
}: BrandMarkProps) {
  const bounds = brandMark.visibleBounds;
  const framing = {
    "--mark-aspect": `${bounds.width} / ${bounds.height}`,
    "--mark-image-width": `${(brandMark.width / bounds.width) * 100}%`,
    "--mark-image-left": `${(-bounds.x / bounds.width) * 100}%`,
    "--mark-image-top": `${(-bounds.y / bounds.height) * 100}%`,
  } as CSSProperties;

  return (
    <span
      className={`ribbon-mark ${className}`.trim()}
      style={framing}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <Image
        src={brandMark.src}
        alt=""
        width={brandMark.width}
        height={brandMark.height}
        sizes={sizes}
        priority={priority}
      />
    </span>
  );
}
