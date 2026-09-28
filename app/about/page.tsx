import { SectionHeader } from "@/components/site/section-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Apisco Precision",
  description: "Learn more about Apisco Precision and our mission.",
};
export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          title="About Apisco Precision"
          kicker="A practice built around the handoff"
        />

        <div className="about-grid">
          {/* Left: body copy */}
          <div className="body-copy reveal">
            <p>
              Apisco Precision continues a sourcing and solutions practice built
              around one simple observation: the space between an global
              ingredient manufacturer and a Bangladeshi drug maker&apos;s
              production schedule needs a careful operator.
            </p>
            <p>
              Our role sits inside that gap: identifying the right principal for
              a given specification, carrying the paperwork a regulator will
              actually ask for, and staying accountable for a shipment after the
              order is signed — not just before it.
            </p>
            <p>
              Every relationship runs on the same discipline: pharmacopoeial
              accuracy (BP / USP / EP), documentation required for regulatory
              bodies, and a supply line that doesn&apos;t quietly go
              single-source.
            </p>
          </div>

          {/* Right: record card — pinned to the right edge */}
          <div className="about-card-col reveal">
            <div className="record-card">
              <div className="record-head">
                <div>
                  <p className="eyebrow">Company record</p>
                  <div className="record-title">Apisco Precision</div>
                </div>
                <span className="stamp">PHARMACEUTICAL INDUSTRY SOLUTIONS</span>
              </div>
              <div className="field-row">
                <span className="field-label">Sector</span>
                <span className="field-value">pharmaceutical industry</span>
              </div>
              <div className="field-row">
                <span className="field-label">Base of operations</span>
                <span className="field-value">Bangladesh</span>
              </div>
              <div className="field-row">
                <span className="field-label">Represents</span>
                <span className="field-value">
                  global API, excipient &amp; packaging principals
                </span>
              </div>
              <div className="field-row">
                <span className="field-label">Regulatory liaison</span>
                <span className="field-value">
                  Regulatory Bodies(Local, ROW, USA, Europe)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
