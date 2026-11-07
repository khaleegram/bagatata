import { company, aboutCopy } from "@/content/company";
import { BrandMark } from "@/components/ui/BrandMark";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/styles/about.css";

const facts = [
  { label: "Our base", value: company.location },
  { label: "Incorporated", value: company.incorporated },
  { label: "Registration", value: company.registration },
] as const;

export function AboutTeaser() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <SectionLabel number="04" aside="Rooted here. Thinking beyond.">
          The company
        </SectionLabel>
        <div className="about-layout">
          <div className="about-copy">
            <h2 id="about-heading">
              {aboutCopy.heading}
              <span>{aboutCopy.emphasis}</span>
            </h2>
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="about-brand-visual">
            <span className="about-visual-origin mono">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2" />
              </svg>
              {company.location}
            </span>
            <BrandMark
              alt="Bagatata’s gold ribbon B"
              sizes="(max-width: 700px) 72px, (max-width: 850px) 224px, (max-width: 1100px) 215px, 244px"
            />
            <figcaption>
              <span className="about-brand-name">{company.name}</span>
              <span className="about-brand-note">{aboutCopy.signature}</span>
            </figcaption>
          </figure>
        </div>
        <dl className="about-facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="mono">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
