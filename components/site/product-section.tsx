import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { SectionHeader } from "./section-header";

export function ProductSection() {
  return (
    <section
      id="product"
      className="section section-dark"
      aria-labelledby="product-title"
    >
      <div className="container">
        <SectionHeader
          title="Product categories"
          kicker="Carried through represented principals"
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
