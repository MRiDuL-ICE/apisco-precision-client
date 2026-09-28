import { PlainList } from "@/components/site/plain-list";
import { SectionHeader } from "@/components/site/section-header";
import { SUPPORT_ITEMS } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Apisco Precision",
  description: "Get in touch with Apisco Precision.",
};

export default function SupportSection() {
  return (
    <section id="support" className="section" aria-labelledby="support-title">
      <div className="container">
        <SectionHeader
          title="Technical support"
          kicker="From query to documented answer, without the wait."
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
