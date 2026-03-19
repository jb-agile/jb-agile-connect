import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import jbLogo from "@/assets/jb-logo-white.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "How We Work", href: "/#how-we-work" },
    { label: "Who We Serve", href: "/#who-we-serve" },
    { label: "About", href: "/#about" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={jbLogo} alt="JB Agile Development" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm font-medium text-text-light/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-primary-foreground font-body text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-light"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#09090B]/95 backdrop-blur-md border-t border-white/10 px-6 pb-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block py-3 font-body text-sm text-text-light/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-accent text-primary-foreground font-body text-sm font-medium px-6 py-2.5 rounded-full text-center"
          >
            Book a Discovery Call
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
