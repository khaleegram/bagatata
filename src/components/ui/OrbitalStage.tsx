import Image from "next/image";
import { brandMark } from "@/content/brand";

type OrbitalStageProps = {
  /**
   * `sizes` for next/image. The hero and the splash pass the same value so
   * both surfaces share a single optimised image file.
   */
  sizes: string;
  priority?: boolean;
};

const longitudes = [0, 1, 2, 3, 4];
const latitudes = [1, 2, 3];

/**
 * The approved gold ribbon B inside its orbital rings.
 *
 * Shared by the hero and the first-load splash so the motion a visitor sees
 * while the site loads is literally the same animation the hero keeps running.
 */
export function OrbitalStage({ sizes, priority = false }: OrbitalStageProps) {
  return (
    <div className="orbital-stage">
      <div className="orbital-haze" />
      <div className="orbital-outer" />
      <div className="orbital-orbit orbit-primary">
        <div className="orbital-trail">
          <span />
        </div>
      </div>
      <div className="orbital-orbit orbit-secondary">
        <div className="orbital-trail">
          <span />
        </div>
      </div>
      <div className="orbital-sphere">
        <div className="sphere-rings">
          {longitudes.map((index) => (
            <div
              key={`longitude-${index}`}
              className={`longitude longitude-${index}`}
            />
          ))}
          {latitudes.map((index) => (
            <div
              key={`latitude-${index}`}
              className={`latitude latitude-${index}`}
            />
          ))}
        </div>
        <div className="orbital-core">
          <Image
            src={brandMark.src}
            alt=""
            width={brandMark.width}
            height={brandMark.height}
            priority={priority}
            sizes={sizes}
          />
        </div>
      </div>
      <span className="orbital-point point-1" />
      <span className="orbital-point point-2" />
      <span className="orbital-point point-3" />
    </div>
  );
}
