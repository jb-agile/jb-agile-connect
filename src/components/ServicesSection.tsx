import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Business Problem Discovery & Analysis",
    body: "Every solution starts with understanding the real problem. We embed with your team to map how work actually flows, identify the root causes of friction, and pinpoint exactly where a custom solution will have the greatest impact — so we build the right thing from day one.",
    tag: "BPMN 2.0 · Value Stream Mapping · Process Mining",
  },
  {
    num: "02",
    title: "Custom AI Solution Design & Development",
    body: "We design and build AI-powered solutions tailored precisely to your specific problem. No generic tools, no one-size-fits-all platforms — just purpose-built technology that fits your workflows, your data, and your people, rigorously tested against real business outcomes.",
    tag: "LangChain · AutoGen · n8n · OpenAI · Anthropic",
  },
  {
    num: "03",
    title: "Integration & Automation",
    body: "We design and implement automated workflows that eliminate repetitive manual work, reduce errors, and free your people for higher-value tasks. Every automation is fully documented, measurable, and owned by your team — with security and GDPR compliance built in from day one.",
    tag: "UiPath · Power Automate · Zapier · Make · RPA",
  },
  {
    num: "04",
    title: "Deployment, Enablement & Ongoing Support",
    body: "A solution only works if your team can own it. We deploy, train, and hand over — ensuring your people are fully equipped to run, maintain, and evolve the solution independently. We stay available for ongoing support as your needs grow.",
    tag: "Enablement · Training · Change Management",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-surface-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            What We Do
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark">
            Four ways we solve your problem
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
