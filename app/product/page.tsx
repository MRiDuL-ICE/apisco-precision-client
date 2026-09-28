import { SectionHeader } from "@/components/site/section-header";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Apisco Precision",
  description:
    "Apisco Precision connects global API manufacturers with Bangladesh's pharmaceutical industry through precise sourcing, documentation and logistics.",
};
export default function ProductSection() {
  return (
    <section
      id="product"
      className="section section-dark"
      aria-labelledby="product-title"
    >
      <div className="container">
        <SectionHeader
          title="Product categories"
          kicker="Carried through represented partners"
          dark
        />
        <div className="category-grid">
          {PRODUCT_CATEGORIES.map(
            ({ number, mark, title, text, icon: Icon }) => (
              <article
                key={number}
                className="category-card reveal"
                data-testid={`card-product-${number}`}
              >
                <span className="category-num mono">{number}</span>
                <span className="category-mark" aria-hidden="true">
                  {mark}
                </span>
                <div style={{ marginTop: "25px", color: "var(--blue)" }}>
                  <Icon size={22} strokeWidth={1.35} />
                </div>
                <h3 className="category-title">{title}</h3>
                <p>{text}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
