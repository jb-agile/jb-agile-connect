import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Landmark, Radio, Building2, HeartPulse, Zap } from "lucide-react";

const stats = [
  { value: "25", label: "Years enterprise delivery" },
  { value: "5", label: "Sectors" },
  { value: "7", label: "Countries" },
  { value: "4", label: "Continents" },
];

const sectors = [
  {
    icon: Landmark,
    sector: "Banking & Financial Services",
    geo: "South Africa · Egypt · Kenya",
    body: "Core banking integrations and customer engagement platforms operating at national scale, in regulated environments.",
  },
  {
    icon: Radio,
    sector: "Telecoms",
    geo: "Pakistan",
    body: "Carrier-grade billing and customer platforms serving millions of subscribers, built for continuous uptime.",
  },
  {
    icon: Building2,
    sector: "Government & Public Sector",
    geo: "Pakistan · Kenya",
    body: "Citizen-facing services and cross-agency data platforms, with audit and compliance built in from day one.",
  },
  {
    icon: HeartPulse,
    sector: "Healthcare & Crisis Support",
    geo: "USA · Australia · Canada",
    body: "Mission-critical contact center and case-management platforms for national crisis-response and health services.",
  },
  {
    icon: Zap,
    sector: "Utilities",
    geo: "Kenya",
    body: "Customer engagement and operations platforms for national utility providers.",
  },
];

const activeEngagements = [
  {
    label: "Currently Building",
    name: "Pakistan Land Port Authority (PLPA)",
    tag: "Government · Trade & Customs — Pakistan",
    body: "Building a cross-agency cargo monitoring and reconciliation platform that integrates data feeds from multiple trade and logistics agencies into a single real-time oversight dashboard — with automated exception detection, SLA breach alerts, and audit-grade reporting for supervisors.",
    status: "Active engagement, Phase 1 in progress — the start of a long-term, multi-project partnership.",
  },
  {
    label: "Currently Advising",
    name: "Enterprise Engineering Transformation",
    tag: "Enterprise Software / Customer Engagement Platforms",
    body: "Advising a senior engineering organization through a shift to AI-native, agentic engineering workflows — spec-driven development, AI-assisted delivery, and automated documentation — targeting a step-change in engineering throughput. In parallel, architecting a headless platform model that lets the company's own customers extend and own their UI and workflows.",
    status: "Ongoing advisory engagement, in progress.",
  },
];

const TrackRecordSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="track-record" className="bg-surface-dark py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Track Record
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-light mb-6">
            Deep domain exposure — now delivered the AI-native way
          </h2>
          <p className="font-body text-lg max-w-[720px] mx-auto leading-relaxed" style={{ color: "#A1A1AA" }}>
            JB Agile's principal, Jawad Bokhari, has built and led platforms across banking,
            telecoms, government, healthcare, and utilities — at national scale, across four
            continents. That real-world exposure is what we bring to every engagement, combined
            with AI-native workflows: agentic development, automated documentation, and a pace of
            delivery that simply wasn't possible a few years ago.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-[800px] mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center rounded-2xl border border-white/10 bg-white/5 py-6 px-3">
              <p className="font-heading text-3xl lg:text-4xl font-extrabold text-accent mb-1">
                {s.value}
              </p>
              <p className="font-body text-xs" style={{ color: "#A1A1AA" }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
        >
          {sectors.map((s) => (
            <div
              key={s.sector}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <s.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading text-base font-bold text-text-light mb-1.5 leading-snug">
                {s.sector}
              </h3>
              <p className="font-body text-xs font-medium text-accent/70 mb-3">{s.geo}</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
                {s.body}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-6">
          {activeEngagements.map((eng, i) => (
            <motion.div
              key={eng.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-8 lg:p-10"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
                  {eng.label}
                </p>
              </div>

              <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-text-light mb-2">
                    {eng.name}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "#A1A1AA" }}>
                    {eng.tag}
                  </p>
                </div>
                <div>
                  <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#D4D4D8" }}>
                    {eng.body}
                  </p>
                  <p className="font-body text-sm inline-flex items-center gap-2 text-accent">
                    <Activity className="w-4 h-4" />
                    {eng.status}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
