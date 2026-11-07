import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy notice — draft",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="container legal-page">
      <span className="eyebrow">Draft / pending legal review</span>
      <h1>Website privacy notice</h1>
      <p>
        This draft describes the website’s current implementation. It requires
        review and completion before public launch.
      </p>
      <h2>Project inquiries</h2>
      <p>
        When inquiry delivery is enabled, the form asks for your name, email and
        project description. Company, project type and budget are optional. The
        details are used to respond to your inquiry and are sent through the
        configured email provider, Resend, to Bagatata’s configured recipient.
        Please do not submit passwords, payment details or sensitive personal
        information.
      </p>
      <h2>Technical safeguards</h2>
      <p>
        The application does not keep a contact database or log message bodies.
        It temporarily keeps hashed identifiers in server memory to limit
        repeated submissions. Hosting and email providers may process technical
        request information and delivery records.
      </p>
      <h2>Analytics and cookies</h2>
      <p>
        This implementation does not add analytics tools or advertising cookies.
        Hosting-provider behavior and any future integrations must be covered in
        the reviewed notice.
      </p>
      <h2>Items awaiting review</h2>
      <p>
        The final notice must confirm the company’s public privacy contact,
        hosting arrangements, retention periods, applicable rights and request
        process, and provider arrangements. These details are not yet
        established in this draft.
      </p>
      <Link href="/#contact" className="text-link">
        Return to project inquiries →
      </Link>
    </div>
  );
}
