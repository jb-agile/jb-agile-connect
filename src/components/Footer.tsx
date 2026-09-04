import { Link } from "react-router-dom";
import jbLogo from "@/assets/brand/jb-agile-lockup-transparent-warm.png";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="inline-flex mb-3">
              <img src={jbLogo} alt="JB Agile" className="h-10 w-auto" />
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "#A99C8C" }}>
              We integrate what's disconnected. We orchestrate what matters.
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
              {["System Integration", "Journey Orchestration"].map((s) => (
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-center gap-3">
          <p className="font-body text-xs text-center" style={{ color: "#96876F" }}>
            © {new Date().getFullYear()} JB Agile. All rights reserved.
          </p>
          <span className="hidden md:inline font-body text-xs" style={{ color: "#96876F" }}>
            ·
          </span>
          <Link
            to="/privacy-policy"
            className="font-body text-xs hover:text-accent transition-colors"
            style={{ color: "#96876F" }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
