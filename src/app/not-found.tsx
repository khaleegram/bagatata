import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

export default function NotFound() {
  return (
    <div className="container page-intro not-found">
      <span className="eyebrow">404 / A little off course</span>
      <h1>
        Let’s get you
        <br />
        <span>back to building.</span>
      </h1>
      <p>We couldn’t find that page.</p>
      <Link href="/" className="button button-gold">
        Back to Bagatata <Arrow />
      </Link>
    </div>
  );
}
