import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
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
            Where are your systems fighting each other?
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto mb-10" style={{ color: "#A99C8C" }}>
            Start with a conversation about where the fragmentation actually costs you — manual
            handoffs, duplicate data entry, the report nobody trusts. No pitch, no pressure. Just
            an honest read on whether integration, orchestration, or both is the right first move.
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

export default CTASection;
