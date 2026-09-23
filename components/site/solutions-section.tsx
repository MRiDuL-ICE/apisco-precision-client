import { ArrowUpRight } from "lucide-react";
import { SOLUTION_ITEMS } from "@/lib/constants";
import { SectionHeader } from "./section-header";

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

        <div className="solutions-grid">
          {/* Left: body copy + CTA */}
          <div className="solutions-copy reveal">
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
              Share a sourcing brief
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
          </div>

          {/* Right: scenario list — replaces PlainList */}
          <ul className="solutions-list reveal" aria-label="Sourcing scenarios">
            {SOLUTION_ITEMS.map((item, i) => (
              <li className="solutions-item" key={i}>
                <span className="solutions-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="solutions-item-body">
                  {item.tag && (
                    <span className="solutions-tag">{item.tag}</span>
                  )}
                  <p className="solutions-text">{item.text ?? item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
