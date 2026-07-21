import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coherenceWheel from "@/assets/hero/coherence-engineering-wheel.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-surface-dark overflow-hidden flex items-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)] gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-20 lg:-mr-16 xl:-mr-24"
          >
            <p className="font-mono text-sm text-accent mb-6">
              <span className="text-text-light/30">// </span>
              Systems integration & orchestration
            </p>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6 font-extrabold text-text-light">
              From connected systems
              <br />
              to intelligent orchestration —
              <br />
              <span className="text-accent">powered by AI.</span>
            </h1>

            <p className="font-body text-xl max-w-[560px] mt-6 leading-relaxed" style={{ color: "#A99C8C" }}>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="hidden lg:flex items-center justify-center relative -mr-20 xl:-mr-32"
          >
            <img
              src={coherenceWheel}
              alt="Diagram of the JB Agile coherence engineering framework: domain, structure, flow, and automation arranged around a central hub"
              className="w-full max-w-[1200px] h-auto"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse closest-side at 50% 50%, black 45%, transparent 100%)",
                maskImage: "radial-gradient(ellipse closest-side at 50% 50%, black 45%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
