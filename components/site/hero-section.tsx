import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import MuxPlayer from "@mux/mux-player-react";

export function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="row hero-grid" style={{ alignItems: "center" }}>
          <div className="col-12 col-md-6 hero-copy">
            <p className="eyebrow reveal">Pharmaceutical industry solutions</p>
            <h1 id="hero-title" className="hero-title reveal">
              The bridge between <em>global manufacturers</em> and
              Bangladesh&apos;s pharmaceutical industry.
            </h1>
            <p className="hero-lede reveal">
              Apisco Precision acts as a solution provider for global
              manufacturers of Active Pharmaceutical Ingredients, excipients and
              packaging materials — carrying technical documentation, DGDA
              liaison and import logistics so a shipment moves cleanly from
              principal to formulation floor.
            </p>
            <div className="hero-actions reveal">
              <a
                className="btn btn-primary"
                href="#services"
                data-testid="link-hero-services"
              >
                View services{" "}
                <ArrowDownRight
                  style={{
                    background: "white",
                    color: "var(--navy)",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                  size={22}
                  strokeWidth={1.9}
                />
              </a>
              <span className="hero-note">
                For manufacturers &amp; global principals
              </span>
            </div>
          </div>

          {/* video section */}
          <div
            className="col-12 col-md-6 hero-visual reveal"
            style={{ minHeight: "unset" }}
          >
            <MuxPlayer
              playbackId="5j48zQjGvyA6YeyFEf9jkXtOUDiEK00z2X8cmxeubTys"
              metadata={{
                video_id: "7QWgZWK7rjf8DK02v6gWS7CBj3a3cgiNSZNTQpwWszV4",
                video_title: "apisco hero video 1",
              }}
              style={{ "--controls": "none", width: "100%", display: "block" }}
              loop={true}
              autoPlay="muted"
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
