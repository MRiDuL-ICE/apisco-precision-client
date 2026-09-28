import { SectionHeader } from "@/components/site/section-header";
import { SOLUTION_ITEMS } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sourcing solutions | Apisco Precision",
  description:
    "Apisco Precision connects global API manufacturers with Bangladesh's pharmaceutical industry through precise sourcing, documentation and logistics.",
};

export default function SolutionsSection() {
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
          </div>

          {/* Right: scenario list — replaces PlainList */}
          <ul className="solutions-list reveal" aria-label="Sourcing scenarios">
            {SOLUTION_ITEMS.map((item, i) => (
              <li className="solutions-item" key={i}>
                <span className="solutions-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="solutions-item-body">
                  {item?.tag && (
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
