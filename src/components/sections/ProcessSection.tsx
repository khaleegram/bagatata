import { processCopy, processSteps } from "@/content/process";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/styles/process.css";

export function ProcessSection() {
  return (
    <section
      className="process-section"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="container">
        <SectionLabel number="03" aside="Understand / Design / Build / Improve">
          How we work
        </SectionLabel>
        <div className="process-heading">
          <h2 id="process-heading">
            {processCopy.heading}
            <span>{processCopy.emphasis}</span>
          </h2>
          <p>{processCopy.description}</p>
        </div>
        <div className="process-path">
          <ol className="process-grid" role="list">
            {processSteps.map((step, i) => (
              <li className="process-step" key={step.title}>
                <div className="process-step-top" aria-hidden="true">
                  <span className="process-index">0{i + 1}</span>
                  {i < processSteps.length - 1 && (
                    <span className="process-connector">
                      <svg viewBox="0 0 14 14" fill="none">
                        <path d="m5 3 4 4-4 4" />
                      </svg>
                    </span>
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="process-feedback">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 7v5h-5M4 17v-5h5" />
              <path d="M6.2 7a7 7 0 0 1 11.55-.85L20 9M4 15l2.25 2.85A7 7 0 0 0 17.8 17" />
            </svg>
            <p>{processCopy.feedbackNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
