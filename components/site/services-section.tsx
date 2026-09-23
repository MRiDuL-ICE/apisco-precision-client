import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "./section-header";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section section-dark"
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHeader
          title="Key services"
          kicker="How a principal reaches a Bangladeshi manufacturer"
          dark
        />

        {/* Flow diagram */}
        <div className="flow-panel reveal">
          <p className="flow-intro">
            Apisco Precision sits inside the exchange in both directions —
            technical documentation and pricing move one way, purchase orders
            and delivery requirements move back.
          </p>

          <div
            className="flow-canvas"
            role="img"
            aria-label="Flow from overseas principal through Apisco Precision to local manufacturer"
          >
            {/* Left node */}
            <div className="flow-node">
              <span className="flow-label">Overseas principal</span>
              <h3 className="flow-node-title">
                API / excipient / packaging manufacturer
              </h3>
              <p className="flow-node-sub">
                DMF, COA, CEP and commercial terms
              </p>
            </div>

            {/* Left connector */}
            <div className="flow-connector-wrap" aria-hidden="true">
              <span className="flow-meta">Documentation / samples</span>
              <div className="flow-arrows">
                <div className="flow-arrow flow-arrow--left">
                  <span className="arrow-head arrow-head--left" />
                  <span className="arrow-line" />
                </div>
                <div className="flow-arrow flow-arrow--right">
                  <span className="arrow-line" />
                  <span className="arrow-head arrow-head--right" />
                </div>
              </div>
            </div>

            {/* Center node */}
            <div className="flow-node flow-node--center">
              <span className="flow-label">Indenting agent</span>
              <h3 className="flow-node-title">Apisco Precision</h3>
              <p className="flow-node-sub">Dhaka, Bangladesh</p>
            </div>

            {/* Right connector */}
            <div className="flow-connector-wrap" aria-hidden="true">
              <span className="flow-meta">DGDA liaison / logistics</span>
              <div className="flow-arrows">
                <div className="flow-arrow flow-arrow--left">
                  <span className="arrow-head arrow-head--left" />
                  <span className="arrow-line" />
                </div>
                <div className="flow-arrow flow-arrow--right">
                  <span className="arrow-line" />
                  <span className="arrow-head arrow-head--right" />
                </div>
              </div>
            </div>

            {/* Right node */}
            <div className="flow-node">
              <span className="flow-label">Local manufacturer</span>
              <h3 className="flow-node-title">
                Bangladeshi pharmaceutical company
              </h3>
              <p className="flow-node-sub">
                Specification, PO and delivery requirements
              </p>
            </div>
          </div>

          <p className="flow-footnote">
            A clear handoff at every point. No quiet gaps between the
            specification, the file and the shipment.
          </p>
        </div>

        {/* Service cards */}
        <div className="row service-list">
          {SERVICES.map(({ number, label, title, text, icon: Icon }) => (
            <div className="col-12 col-md-6 col-lg-4 reveal" key={number}>
              <article
                className="service-card"
                data-testid={`card-service-${number}`}
              >
                <span className="service-num mono">
                  {number} / {label}
                </span>
                <div className="service-icon">
                  <Icon size={25} strokeWidth={1.25} />
                </div>
                <h3 className="service-title">{title}</h3>
                <p>{text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
