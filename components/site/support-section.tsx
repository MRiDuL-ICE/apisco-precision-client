import { SUPPORT_ITEMS } from "@/lib/constants";
import { SectionHeader } from "./section-header";
import { PlainList } from "./plain-list";

export function SupportSection() {
  return (
    <section id="support" className="section" aria-labelledby="support-title">
      <div className="container">
        <SectionHeader
          title="Technical support"
          kicker="After the purchase order, not just before it"
        />
        <div className="support-grid">
          <div className="reveal">
            <PlainList items={SUPPORT_ITEMS} />
          </div>
          <div className="quote-panel reveal">
            <p>
              &ldquo;The useful answer is the one that arrives with the right
              document attached.&rdquo;
            </p>
            <span>Apisco Precision / Working principle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
