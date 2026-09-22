import { SectionHeader } from "./section-header";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section contact-band"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <SectionHeader title="Contact" kicker="Correspondence" dark />
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <p>
              For principal representation enquiries, sourcing briefs, or an
              existing order that needs a documentation trail — the fastest
              route in is email, with the specification or DMF reference
              attached where one exists.
            </p>
            <span
              className="contact-email placeholder"
              data-testid="text-contact-email"
            >
              Add email address
            </span>
          </div>

          <div className="contact-details reveal">
            <div className="contact-detail">
              <span className="field-label">Company</span>
              <span className="field-value">Apisco Precision</span>
            </div>
            <div className="contact-detail">
              <span className="field-label">Office</span>
              <span className="field-value placeholder">
                Add office address, Dhaka
              </span>
            </div>
            <div className="contact-detail">
              <span className="field-label">Phone</span>
              <span className="field-value placeholder">Add phone number</span>
            </div>
            <div className="contact-detail">
              <span className="field-label">Base</span>
              <span className="field-value">Dhaka, Bangladesh</span>
            </div>
            <div className="contact-detail">
              <span className="field-label">Web</span>
              <span className="field-value placeholder">
                Add website address
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
