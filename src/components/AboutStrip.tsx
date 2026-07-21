import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-surface-dark py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="border-t border-white/10 pt-16 pb-16 border-b border-white/10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 items-start">
            
            <p className="font-heading text-3xl lg:text-4xl italic text-accent font-bold leading-snug">
              "Most vendors hand you a system. We stay until you're running on it."
            </p>
            <p className="font-body text-lg leading-relaxed" style={{ color: "#A1A1AA" }}>
              Most integration vendors hand you a working system and move on. Most process
              consultants hand you a roadmap and leave the building to someone else. We do both —
              one team designs the integration, builds it, and stays through rollout to make sure
              your organization actually runs on it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutStrip;
