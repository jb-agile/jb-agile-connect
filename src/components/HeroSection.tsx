import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import brandMark from "@/assets/brand/jb-agile-icon-transparent-warm.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-surface-dark overflow-hidden flex items-center pt-20">
      {/* Background: the actual brand mark, not a generic glow */}
      <img
        src={brandMark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-24 top-1/2 -translate-y-1/2 w-[620px] h-auto opacity-[0.07] rotate-[8deg]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[640px]"
        >
          <p className="font-mono text-sm text-accent mb-6">
            <span className="text-text-light/30">// </span>
            Systems integration & orchestration
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6 font-extrabold text-text-light">
            It's not an integration problem.
            <br />
            It's an orchestration problem.
          </h1>

          <p className="font-body text-xl max-w-[520px] mt-6 leading-relaxed" style={{ color: "#A99C8C" }}>
            Integration gets your systems talking to each other. We go further — building the workflows, dashboards, and alerts that give you real-time visibility and control over the process those systems support.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
            <Link
              to="/contact"
              className="group bg-accent hover:bg-accent-hover text-white font-body font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#services"
              className="font-body font-medium text-text-light/70 hover:text-text-light underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
            >
              Explore our services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
