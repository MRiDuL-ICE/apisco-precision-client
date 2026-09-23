import { ArrowUpRight } from "lucide-react";
import { Building, MapPin, Phone, Globe, Link } from "lucide-react";
import { SectionHeader } from "./section-header";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section contact-band"
      aria-labelledby="contact-title"
    >
      <div className="container">
        {/* Top row: title left, summary right */}
        <div className="contact-top reveal">
          <div>
            <p className="section-kicker">Correspondence</p>
            <h2 className="section-title" id="contact-title">
              Contact
            </h2>
          </div>
          <p className="contact-summary">
            For enquiries, sourcing briefs, or an existing order — email is the
            fastest route in, with the DMF reference attached where one exists.
          </p>
        </div>

        {/* Two-column body */}
        <div className="contact-grid">
          {/* Left: email + CTA + hint */}
          <div className="contact-left reveal">
            <div className="contact-email-block">
              <p className="contact-email-label">Primary contact</p>
              <span
                className="contact-email placeholder"
                data-testid="text-contact-email"
              >
                Add email address
              </span>
            </div>

            <a className="btn btn-on-navy contact-cta" href="#contact">
              Send a sourcing brief
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>

            <div className="contact-hint">
              <p>
                <strong>When reaching out —</strong> include the molecule name,
                pharmacopoeial standard, and estimated annual volume. It saves a
                round-trip and gets you a useful first reply faster.
              </p>
            </div>
          </div>

          {/* Right: details card */}
          <div className="contact-right reveal">
            <div className="contact-details-card">
              <div className="contact-card-head">
                <span className="contact-card-dot" aria-hidden="true" />
                <span className="contact-card-label">Company details</span>
              </div>

              <div className="contact-detail">
                <span className="field-label">
                  <Building size={13} strokeWidth={1.5} aria-hidden="true" />
                  Company
                </span>
                <span className="field-value">Apisco Precision</span>
              </div>
              <div className="contact-detail">
                <span className="field-label">
                  <MapPin size={13} strokeWidth={1.5} aria-hidden="true" />
                  Office
                </span>
                <span className="field-value placeholder">
                  Add office address, Dhaka
                </span>
              </div>
              <div className="contact-detail">
                <span className="field-label">
                  <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
                  Phone
                </span>
                <span className="field-value placeholder">
                  Add phone number
                </span>
              </div>
              <div className="contact-detail">
                <span className="field-label">
                  <Globe size={13} strokeWidth={1.5} aria-hidden="true" />
                  Base
                </span>
                <span className="field-value">Dhaka, Bangladesh</span>
              </div>
              <div className="contact-detail">
                <span className="field-label">
                  <Link size={13} strokeWidth={1.5} aria-hidden="true" />
                  Web
                </span>
                <span className="field-value placeholder">
                  Add website address
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
