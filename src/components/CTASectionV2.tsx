import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Design-system-v2 preview only. Glow orb removed to match the
 * de-templated hero — flat Ink Navy with a plain top border instead.
 * Buttons match the hero's rounded-lg + underline-link treatment.
 */
const CTASectionV2 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-surface-dark py-24 lg:py-32 border-t border-white/10">
      <div className="container mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-light mb-6">
            Have a problem worth solving properly?
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto mb-10" style={{ color: "#A99C8C" }}>
            Start with a conversation. No pitch, no pressure — just an honest look at your
            problem and whether we're the right people to help you solve it.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <Link
              to="/contact"
              className="group bg-accent hover:bg-accent-hover text-white font-body font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="font-body font-medium text-text-light/70 hover:text-text-light underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
            >
              Send us a message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASectionV2;
