import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ProcessDiagram from "./ProcessDiagram";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-surface-dark overflow-hidden flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center border border-white/20 bg-white/5 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="font-body text-sm font-medium text-text-light/70">
                Custom AI Solutions · Real Business Problems
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-extrabold text-text-light">Your problem.</span>
              <br />
              <span className="font-extrabold text-text-light">Built to solve it.</span>
              <br />
              <span className="font-light text-text-light/60">Powered by AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-xl text-text-muted-dark max-w-[520px] mt-6 leading-relaxed"
              style={{ color: "#A1A1AA" }}
            >
              We build custom AI-powered solutions to real business problems — going deep to
              understand your specific challenge, then designing and delivering technology
              built precisely for it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-primary-foreground font-body font-medium px-8 py-4 rounded-full transition-colors"
              >
                Book a Discovery Call
              </Link>
              <a
                href="#services"
                className="border border-white/30 hover:border-white/60 text-text-light font-body font-medium px-8 py-4 rounded-full transition-colors"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <ProcessDiagram />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-text-light/40 animate-bounce-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
