import { ArrowUpRight } from "lucide-react";
import { SOLUTION_ITEMS } from "@/lib/constants";
import { SectionHeader } from "./section-header";
import { PlainList } from "./plain-list";

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="section section-dark"
      aria-labelledby="solutions-title"
    >
      <div className="container">
        <SectionHeader
          title="Sourcing solutions"
          kicker="For when the usual line does not hold"
          dark
        />
        <div className="support-grid">
          <div className="body-copy reveal">
            <p>
              When a single source becomes a supply risk, or a molecule falls
              outside the standing catalogue, Apisco Precision builds the route
              from the brief outward.
            </p>
            <p>
              We stay close to the technical and commercial details until a
              viable source is ready for evaluation.
            </p>
            <a
              className="btn btn-on-navy"
              href="#contact"
              data-testid="link-solutions-contact"
            >
              Share a sourcing brief{" "}
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
          </div>
          <div className="reveal">
            <PlainList items={SOLUTION_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
