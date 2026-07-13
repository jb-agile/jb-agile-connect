import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const personas = [
  {
    title: "CEOs & Founders",
    quote:
      "I have a clear vision for where the organization needs to go — I need a partner to help design and execute the path without disrupting what's already working.",
  },
  {
    title: "COOs & Heads of Operations",
    quote:
      "I know exactly where processes break down, where my teams are spending time they shouldn't be, and where we're leaving value on the table. I'm ready to fix it.",
  },
  {
    title: "CTOs & Heads of Engineering",
    quote:
      "I'm evaluating or already deploying AI and want it embedded thoughtfully — not bolted on as an afterthought. It has to work with my teams, not around them.",
  },
];

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-we-serve" className="scroll-mt-24 bg-surface-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Who We Work With
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark mb-6">
            Built for organizations with a problem worth solving properly
          </h2>
          <p className="font-body text-lg max-w-[700px] mx-auto leading-relaxed" style={{ color: "#52525B" }}>
            We work with organizations that have a specific problem off-the-shelf tools won't
            solve. Our methodology is industry-agnostic — but we have deep experience with
            technology companies, SaaS platforms, and digital-first organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mt-16">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-l-2 border-accent/30 pl-6"
            >
              <p className="font-heading text-lg italic text-text-dark leading-snug mb-4">
                "{p.quote}"
              </p>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
                {p.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
