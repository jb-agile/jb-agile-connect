import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity } from "lucide-react";

const clients = [
  { name: "First National Bank (FNB)", sector: "Banking", geo: "South Africa" },
  { name: "PTCL", sector: "Telecoms", geo: "Pakistan" },
  { name: "Zong", sector: "Telecoms", geo: "Pakistan" },
  { name: "Banque Misr", sector: "Banking", geo: "Egypt" },
  { name: "CIB Egypt", sector: "Banking", geo: "Egypt" },
  { name: "US Poison Control Centers", sector: "Healthcare", geo: "USA" },
  { name: "Government of Kenya", sector: "Government", geo: "Kenya" },
  { name: "Lifeline Australia", sector: "Healthcare / Crisis Support", geo: "Australia" },
  { name: "Kenya Commercial Bank", sector: "Banking", geo: "Kenya" },
  { name: "Kenya Power", sector: "Utilities", geo: "Kenya" },
  { name: "Blood Canada", sector: "Healthcare", geo: "Canada" },
  { name: "Ufone", sector: "Telecoms", geo: "Pakistan" },
  { name: "Warid", sector: "Telecoms", geo: "Pakistan" },
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
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Track Record
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-light mb-6">
            25 years of enterprise delivery, live at national scale
          </h2>
          <p className="font-body text-lg max-w-[700px] mx-auto leading-relaxed" style={{ color: "#A1A1AA" }}>
            JB Agile's principal, Jawad Bokhari, has built and led platforms now running in
            production across banking, telecoms, healthcare, government, and utilities — on
            four continents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {clients.map((c) => (
            <div
              key={c.name}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5"
            >
              <span className="font-body text-sm font-medium text-text-light">{c.name}</span>
              <span className="font-body text-sm" style={{ color: "#71717A" }}>
                {" "}
                — {c.sector}, {c.geo}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-8 lg:p-10"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
              Currently Building
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-text-light mb-2">
                Pakistan Land Port Authority (PLPA)
              </h3>
              <p className="font-body text-sm" style={{ color: "#A1A1AA" }}>
                Government · Trade &amp; Customs — Pakistan
              </p>
            </div>
            <div>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#D4D4D8" }}>
                Building a cross-agency cargo monitoring and reconciliation platform that
                integrates data feeds from multiple trade and logistics agencies into a single
                real-time oversight dashboard — with automated exception detection, SLA breach
                alerts, and audit-grade reporting for supervisors.
              </p>
              <p className="font-body text-sm inline-flex items-center gap-2 text-accent">
                <Activity className="w-4 h-4" />
                Active engagement, Phase 1 in progress — the start of a long-term, multi-project
                partnership.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
