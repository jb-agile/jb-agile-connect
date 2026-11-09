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
            and government. AI runs through our engineering practice, from requirements and design
            to code review and testing, which lets a small team carry the scope of a much larger
            one. You work directly with the people building your system, and you see working
            software every two weeks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border-light rounded-2xl p-8 lg:p-10 shadow-sm"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Principal
            </p>
            <h3 className="font-heading text-2xl font-bold text-text-dark mb-4">Jawad Bokhari</h3>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              25 years of enterprise platform delivery across telecoms, banking, defense, healthcare, and
              government. Founder of JB Agile and Head of Engineering at a global
              customer-engagement software company, where he led ground-up development of its CX
              platform — from solo engineer to an 80+ engineer organization — now live across
              telecom, banking, government, and crisis-line clients in 7+ countries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border-light rounded-2xl p-8 lg:p-10 shadow-sm"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Offices
            </p>
            <div className="flex flex-wrap gap-3">
              {["Lahore — primary engineering hub", "Islamabad — client engagement & delivery"].map(
                (office) => (
                  <div
                    key={office}
                    className="flex items-center gap-2 rounded-full border border-border-light px-4 py-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span className="font-body text-sm text-text-dark">{office}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
