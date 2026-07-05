import { Link } from "react-router-dom";
import jbLogo from "@/assets/jb-agile-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={jbLogo} alt="JB Agile Development" className="h-10 mb-3" />
            <p className="font-body text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
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
                  to={l === "Home" ? "/" : l === "Contact" ? "/contact" : `/#${l.toLowerCase().replace(/ /g, "-")}`}
                  className="block font-body text-sm hover:text-accent transition-colors"
                  style={{ color: "#A1A1AA" }}
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
                <p key={s} className="font-body text-sm" style={{ color: "#A1A1AA" }}>
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
                style={{ color: "#A1A1AA" }}
              >
                jawad@jb-agiledev.com
              </a>
              <a
                href="#"
                className="block font-body text-sm hover:text-accent transition-colors"
                style={{ color: "#A1A1AA" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-xs text-center" style={{ color: "#52525B" }}>
            © 2025 JB Agile Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
