import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const personas = [
  {
    title: "COOs & Heads of Operations",
    quote:
      "I know exactly where processes break down, where my teams are spending time they shouldn't be, and where we're leaving value on the table. I'm ready to fix it.",
  },
  {
    title: "CEOs & Founders",
    quote:
      "I have a clear vision for where the organization needs to go — I need a partner to help design and execute the path without disrupting what's already working.",
  },
  {
    title: "CTOs & Heads of Engineering",
    quote:
      "My systems all work fine in isolation. What I don't have is one place that shows me the whole process end-to-end — or tells me when something's about to break.",
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
            Built for the people who feel the fragmentation first
          </h2>
          <p className="font-body text-lg max-w-[700px] mx-auto leading-relaxed" style={{ color: "#52525B" }}>
            We work with organizations whose systems don't talk to each other — and where that
            gap is costing time, money, or visibility. Our methodology is domain-agnostic; the
            pain is the same whether it shows up in a contact center, a hospital, or a customs
            office.
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
