import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-surface-dark py-24 lg:py-32 overflow-hidden border-t border-white/10">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-light mb-6">
            Have a problem worth solving properly?
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto mb-10" style={{ color: "#A1A1AA" }}>
            Start with a conversation. No pitch, no pressure — just an honest look at your
            problem and whether we're the right people to help you solve it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-primary-foreground font-body font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:border-white/60 text-text-light font-body font-medium px-8 py-4 rounded-full transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
