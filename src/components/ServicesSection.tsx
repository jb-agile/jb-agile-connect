import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "System Integration",
    body: "Unifying disparate platforms, applications, and data sources into a coherent operational foundation — closing the gap of manual handoffs, duplicated data entry, delayed information, and process breakdowns that fragmentation causes.",
    tag: "Fastest path in · Primary buyer: COOs & Heads of Operations",
    roi: "Cuts the manual handoffs and duplicate entry that fragmentation causes — and opens the door to self-service, reducing the volume that needs a human agent.",
  },
  {
    num: "02",
    title: "Journey Orchestration",
    body: "For integrated systems, we design and implement the workflows, real-time tracking, and alerts that give operations continuous visibility of the complete picture — and give the people involved timely, accurate information at every step.",
    tag: "Where the differentiated IP lives · A reusable orchestration approach, refined across engagements",
    roi: "A single unified view removes the context-switching that slows resolution — the same pattern that improved first-call resolution in past engagements.",
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
            Our Approach
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark mb-6">
            Two stages. One team.
          </h2>
          <p className="font-body text-lg max-w-2xl leading-relaxed text-muted-foreground">
            We begin by integrating your fragmented, disconnected systems. From there, we build
            the orchestration layer — the workflows, dashboards, and alerts — that give your
            organization the complete, end-to-end picture and control over every process those
            systems support.
          </p>
        </motion.div>

        <div className="divide-y divide-border-light border-t border-border-light">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid lg:grid-cols-[100px_1fr_260px] gap-4 lg:gap-8 items-start py-10"
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
              <div className="lg:text-right lg:pt-1">
                <p className="font-body text-xs font-medium text-accent/70 mb-3">
                  {service.tag}
                </p>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">
                  {service.roi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
