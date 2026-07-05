import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Find the real problem",
    body: "We map how work actually flows today and pinpoint exactly where friction, cost, and delay hide — so we build the right thing, not just any AI solution.",
    tag: "Faster time-to-value · No guesswork",
  },
  {
    num: "02",
    title: "Build the AI solution",
    body: "We design and build an AI system engineered for your specific problem, your data, and your people — not a generic chatbot or platform bolted onto old workflows.",
    tag: "Purpose-built · Not off-the-shelf",
  },
  {
    num: "03",
    title: "Automate the workflow",
    body: "We connect the AI solution directly into your systems so work moves end-to-end without manual handoffs, re-keying, or errors — with security and GDPR compliance built in.",
    tag: "AI-native automation · End-to-end",
  },
  {
    num: "04",
    title: "Hand it over, keep it running",
    body: "We deploy, train your team, and hand over full ownership — then stay on call as your needs evolve, so the solution keeps paying off long after launch.",
    tag: "Full ownership · Ongoing support",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="scroll-mt-24 bg-surface-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            How We Work
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark">
            From problem to production, in four steps
          </h2>
        </motion.div>

        <div className="divide-y divide-border-light border-t border-border-light">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid lg:grid-cols-[100px_1fr_auto] gap-4 lg:gap-8 items-start py-10"
            >
              <span className="font-heading text-4xl font-extrabold text-accent/40">
                {service.num}
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground max-w-2xl">
                  {service.body}
                </p>
              </div>
              <p className="font-body text-xs font-medium text-accent/70 lg:text-right lg:max-w-[180px] lg:pt-1">
                {service.tag}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
