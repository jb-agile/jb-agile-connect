import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="scroll-mt-24 bg-surface-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            The Team
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark mb-6">
            AI-native engineering, led by enterprise veterans
          </h2>
          <p className="font-body text-lg max-w-[700px] mx-auto leading-relaxed" style={{ color: "#52525B" }}>
            Everyone on an engagement has delivered enterprise systems before, in telecoms, banking
            and government. They bring the judgment that only comes from running systems in
            production, and they lead AI agents that do the building at a pace a conventional team
            cannot reach. You work directly with the people building your system, and you see working
            software every two weeks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["Lahore: primary engineering hub", "Islamabad: client engagement and delivery"].map(
            (office) => (
              <div
                key={office}
                className="flex items-center gap-2 rounded-full border border-border-light bg-card px-4 py-2"
              >
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span className="font-body text-sm text-text-dark">{office}</span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
