import { SectionHeader } from "./section-header";

export function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          title="About Apisco Precision"
          kicker="A practice built around the handoff"
        />
        <div className="row">
          <div className="col-12 col-md-7 body-copy reveal">
            <p>
              Apisco Precision continues a sourcing and indenting practice built
              around one simple observation: the space between an overseas
              ingredient manufacturer and a Bangladeshi drug maker&apos;s
              production schedule needs a careful operator.
            </p>
            <p>
              Our role sits inside that gap: identifying the right principal for
              a given specification, carrying the paperwork a regulator will
              actually ask for, and staying accountable for a shipment after the
              purchase order is signed — not just before it.
            </p>
            <p>
              Every relationship runs on the same discipline: pharmacopoeial
              accuracy (BP / USP / EP), documentation that survives a DGDA
              review on first submission, and a supply line that doesn&apos;t
              quietly go single-source.
            </p>
          </div>

          <div className="col-12 col-md-5 reveal">
            <div className="record-card">
              <div className="record-head">
                <div>
                  <p className="eyebrow">Company record</p>
                  <div className="record-title">Apisco Precision</div>
                </div>
                <span className="stamp">INDENTING AGENT</span>
              </div>
              <div className="field-row">
                <span className="field-label">Sector</span>
                <span className="field-value">
                  API &amp; excipient indenting
                </span>
              </div>
              <div className="field-row">
                <span className="field-label">Base of operations</span>
                <span className="field-value">Dhaka, Bangladesh</span>
              </div>
              <div className="field-row">
                <span className="field-label">Represents</span>
                <span className="field-value">
                  Overseas API, excipient &amp; packaging principals
                </span>
              </div>
              <div className="field-row">
                <span className="field-label">Regulatory liaison</span>
                <span className="field-value">DGDA-facing documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
