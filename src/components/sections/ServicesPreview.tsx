import Link from "next/link";
import { services, servicesCopy } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Arrow } from "@/components/ui/Arrow";
import "@/styles/services.css";

export function ServicesPreview() {
  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <SectionLabel number="02" aside="From first principle to final product">
          What we do
        </SectionLabel>
        <div className="services-heading">
          <h2 id="services-heading">
            {servicesCopy.heading}
            <span>{servicesCopy.emphasis}</span>
          </h2>
          <div className="services-heading-side">
            <p>{servicesCopy.description}</p>
            <Link href="/#contact" className="services-cta">
              Discuss your project
              <span>
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <Link
                href="/#contact"
                className="service-card-link"
                aria-label={`Discuss ${service.title}`}
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <ServiceIcon service={service.id} />
                  </span>
                  <span className="service-index mono">{service.number} /</span>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-card-footer">
                  <span className="service-tags mono">{service.tags}</span>
                  <span className="service-arrow">
                    <Arrow />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mobile-service-list">
          {services.map((service, index) => (
            <details
              className="mobile-service"
              name="mobile-services"
              key={service.id}
              open={index === 0}
            >
              <summary>
                <span className="mobile-service-number" aria-hidden="true">
                  {service.number}
                </span>
                <h3>{service.title}</h3>
                <span className="mobile-service-toggle" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M10 4v12" />
                  </svg>
                </span>
              </summary>
              <div className="mobile-service-content">
                <span className="mobile-service-icon" aria-hidden="true">
                  <ServiceIcon service={service.id} />
                </span>
                <p>{service.description}</p>
                <Link href="/#contact" aria-label={`Discuss ${service.title}`}>
                  Discuss this work <Arrow />
                </Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
