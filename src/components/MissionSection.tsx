import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-24 bg-surface-dark py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-light leading-tight max-w-[480px]">
            We're not consultants who parachute in with a report. We build what your business actually needs.
          </h2>

          <div className="space-y-10">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Mission
              </p>
              <p className="font-body text-lg leading-relaxed" style={{ color: "#A1A1AA" }}>
                To turn fragmented, disconnected systems into the visibility and control
                operations teams need — integrating what's broken, then building the orchestration
                layer that keeps it running.
              </p>
            </div>
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Vision
              </p>
              <p className="font-body text-lg leading-relaxed" style={{ color: "#A1A1AA" }}>
                To be the partner organizations call when their systems don't talk to each other —
                bringing a reusable orchestration approach, refined across 15+ years of
                engagements, to every new domain we enter.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
