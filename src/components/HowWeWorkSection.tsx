import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "Everything starts with a conversation — no agenda, no pitch. We listen to understand your organization, the challenges you're facing, and what success genuinely looks like for your team.",
  },
  {
    num: "02",
    title: "Process Discovery & Diagnosis",
    body: "We embed with your team — running workshops, stakeholder interviews, and hands-on process observation — to build a clear map of how work actually flows, where friction lives, and where AI agents could meaningfully join your workforce.",
  },
  {
    num: "03",
    title: "Solution Design",
    body: "With a shared understanding of the landscape, we design the path forward together with your team — defining what to build, where AI fits, what tools to use, and how the solution integrates into your existing workflows and roles.",
  },
  {
    num: "04",
    title: "Build & Delivery",
    body: "We work inside your organization — not as external advisors dropping in with slide decks, but as embedded partners alongside your teams. We build, implement, iterate, and course-correct in real time, continuously transferring knowledge and ownership.",
  },
  {
    num: "05",
    title: "Enablement & Handover",
    body: "Before we step back, your team is fully equipped to own and evolve the solution independently — managing workflows, maintaining AI components, and continuing to improve without relying on us.",
  },
  {
    num: "06",
    title: "Ongoing Partnership",
    body: "Transformation doesn't end at handover. Many clients maintain an ongoing relationship — bringing us back for new process domains, emerging AI capabilities, or periodic reviews as their organization evolves.",
  },
];

const HowWeWorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-we-work" className="scroll-mt-24 bg-surface-dark py-24 lg:py-32">
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
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-light">
            We embed. We build. We hand it over.
          </h2>
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="grid lg:grid-cols-[100px_1fr] gap-6 items-start"
            >
              <span className="font-heading text-5xl font-extrabold text-accent">{step.num}</span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text-light mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: "#A1A1AA" }}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
