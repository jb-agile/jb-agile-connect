import { Link } from "react-router-dom";
import jbLogo from "@/assets/brand/jb-agile-lockup-transparent-warm.png";

/**
 * Design-system-v2 preview only. Same structure as Footer.tsx, updated
 * to the pinwheel mark lockup and the warm Espresso palette (#2B1D16)
 * from branding/design-system. Logo is a transparent-background crop
 * (chroma-keyed from the design system's solid-fill lockup) so it sits
 * cleanly on the footer's dark field.
 */
const FooterV2 = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={jbLogo} alt="JB Agile" className="h-10 w-auto mb-3" />
            <p className="font-body text-sm leading-relaxed" style={{ color: "#A99C8C" }}>
              Your problem. Built to solve it. Powered by AI.
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-text-light/50 mb-4">
              Navigation
            </p>
            <div className="space-y-2">
              {["Home", "Track Record", "Services", "How We Work", "Team", "Who We Serve", "About", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/preview-v2" : l === "Contact" ? "/contact" : `/preview-v2#${l.toLowerCase().replace(/ /g, "-")}`}
                  className="block font-body text-sm hover:text-accent transition-colors"
                  style={{ color: "#A99C8C" }}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-text-light/50 mb-4">
              Services
            </p>
            <div className="space-y-2">
              {["Problem Discovery & Analysis", "Custom AI Solution Development", "Integration & Automation", "Deployment & Enablement"].map((s) => (
                <p key={s} className="font-body text-sm" style={{ color: "#A99C8C" }}>
                  {s}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-text-light/50 mb-4">
              Get in Touch
            </p>
            <div className="space-y-2">
              <a
                href="mailto:jawad@jb-agiledev.com"
                className="block font-body text-sm hover:text-accent transition-colors"
                style={{ color: "#A99C8C" }}
              >
                jawad@jb-agiledev.com
              </a>
              <a
                href="#"
                className="block font-body text-sm hover:text-accent transition-colors"
                style={{ color: "#A99C8C" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-xs text-center" style={{ color: "#96876F" }}>
            © 2025 JB Agile. All rights reserved. · Design system v2 preview
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
