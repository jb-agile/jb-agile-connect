import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  GitCompare,
  Map as MapIcon,
  Search,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Local dark palette for this page only (draft's dark tokens).
// ground #171009, surface #221811, surface-2 #2B1D16, ink #F5EFE8, ink-2 #C3B3A4,
// ink-3 #9A8879, rule #3A2A20, accent #E8996A, accent-ink #F0B287, accent-soft #33210F,
// open #E0796A / #361B16, held #79B694 / #14251C.

const timeline = [
  {
    day: "JAN",
    what: "A branch approves a six-month fee waiver for a corporate client's trade transactions.",
    src: "Approval workflow · Status: Approved, expires June",
    chip: "Owned",
    open: false,
  },
  {
    day: "JAN",
    what: "Operations sets the waiver flag in core banking. The end-date field is optional, so it is left blank.",
    src: "Core banking · Status: Waiver active, no end date",
    chip: "Owned",
    open: false,
  },
  {
    day: "JUL",
    what: "The approval expires in the workflow system. Core banking keeps waiving the fees.",
    src: "Workflow says expired · core banking says active",
    chip: "No owner",
    open: true,
  },
  { gap: true },
  {
    day: "NEXT MAR",
    what: "Internal audit samples the account and finds fees waived for eight months past the approval.",
    src: "Statements & fee income · Revenue not recoverable",
    chip: "Unreconciled",
    open: true,
  },
  {
    day: "+2 WKS",
    what: "Two officers rebuild the history from the workflow, core banking and statements. Recovering the fees would damage the relationship, so they are written off.",
    src: "Audit finding raised",
    chip: "Escalation",
    open: true,
  },
] as const;

const comparison = [
  ["BI and dashboards", "Shows the exception. Nobody owns it."],
  ["Integration, iPaaS or ESB", "Moves the record. Does not check it is complete or correct."],
  ["Process mining", "Shows how the process ran. Does not reconcile or resolve live discrepancies."],
  ["GRC and audit tooling", "Records that a control exists, not that it operated."],
  ["Case or workflow systems", "Manage work inside one boundary. The loss happens between boundaries."],
];

const layerCells = [
  ["Event log", "every step, every source"],
  ["Reconciliation rules", "records vs. source data"],
  ["Exception ledger", "every deviation, named owner"],
  ["Evidence", "traceable history on demand"],
];

const systems = [
  "ERP / core system",
  "Partner / agent portal",
  "Regulator portal",
  "Bank / finance",
  "Email, files, spreadsheets",
];

const flow: { group: string; nodes: { name: string; desc: string; Icon: LucideIcon }[] }[] = [
  {
    group: "See",
    nodes: [
      { name: "Map", desc: "Flow, systems, handoffs and controls", Icon: MapIcon },
      { name: "Track", desc: "Every case across systems, in one event history", Icon: Activity },
    ],
  },
  {
    group: "Check",
    nodes: [
      { name: "Reconcile", desc: "Records against source data and business rules", Icon: GitCompare },
      { name: "Detect", desc: "Missing, conflicting, late or out-of-sequence events", Icon: Search },
    ],
  },
  {
    group: "Act",
    nodes: [
      { name: "Route", desc: "Each exception to an accountable owner, with an SLA clock", Icon: UserCheck },
      { name: "Prove", desc: "Traceable history and audit evidence on demand", Icon: ShieldCheck },
    ],
  },
];

const controlModel = [
  ["Deterministic", "Integration, workflow state, permissions, business rules and evidence."],
  ["AI-assisted", "Reading unstructured documents, matching records with no shared key, flagging anomalies, compiling evidence."],
  ["Human-approved", "Every consequential action, with a full audit trail."],
];

const steps = [
  {
    n: "Step 1",
    title: "Discovery Session & Operational Assurance Diagnostic",
    meta: "2–3 weeks · fixed fee",
    body: "We start with a discovery session to agree what is in scope and why. You receive a cross-system process and responsibility map, an interface and data-handoff map, a control, reconciliation, SLA and exception register, an evidence and reporting-gap assessment, a data readiness assessment, a baseline measurement plan, a prioritized 90-day roadmap, and a fully costed pilot scope with written acceptance criteria.",
    keep: "If you stop here, you keep all of it, fully actionable with us, another partner, or your internal engineering team.",
  },
  {
    n: "Step 2",
    title: "Operational Assurance Pilot",
    meta: "8–12 weeks · fixed scope",
    body: "We build the event spine, deterministic reconciliation rules, monitoring, exception workflow, and evidence reporting for one high-value process on your existing infrastructure, then hand it over with complete training and operating runbooks. Acceptance criteria are agreed in writing before we write a single line of code.",
  },
  {
    n: "Step 3",
    title: "Managed Improvement",
    meta: "Optional · annual fixed subscription",
    body: "Operational control decays without supervision. Covers continuous rule tuning as systems evolve, feed-health monitoring, quarterly control reviews with your process owner, and audit evidence packs produced on demand.",
  },
  {
    n: "Step 4",
    title: "Multi-Process Expansion",
    body: "Each additional process reuses the established event spine and exception ledger, drastically reducing delivery time and amortizing cost across the entire operating picture.",
  },
];

const notFor = [
  "Your operation runs inside one system, end to end",
  "Exception volume is low and flat, and two more coordinators genuinely is the right answer",
  null,
  "You want a findings document rather than something working on the ground",
];

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "How is this different from process mining?",
    a: "Process mining discovers and visualizes how a process ran historically. It does not hold a live journey, reconcile records against business rules, assign an owner to a deviation, or produce the evidence trail. Discovery tells you what happened. We build the control that acts on it. Several clients will want both.",
  },
  {
    q: "We are planning an AI programme. Should we do that first, or this?",
    a: "This first, or alongside. Most AI programmes stall because the process data is fragmented, event history is incomplete, provenance is unclear, and there is no assurance layer to give an automated step defined authority or a reviewable trail. Those are the exact gaps this closes. Building it makes your AI programme viable rather than competing with it.",
  },
  {
    q: "Where does our data sit, and what do you do with it?",
    a: "Sanitized samples wherever they are sufficient, which is most of the time for a diagnostic. Where live access is genuinely needed we work inside your environment under your access controls, take only what the analysis requires, and hold nothing after the engagement beyond your deliverables. NDA before kickoff, not after. Nothing from your engagement is reused for another client.",
  },
  {
    q: "What happens if a key person on your team is unavailable?",
    a: "Delivery is senior and team-based. The maps, registers, rules, architecture and operating procedures are in your hands during the engagement, not at the end of it. Nothing depends on undocumented knowledge in one person's head.",
  },
  {
    q: "What if our systems have no APIs?",
    a: "Common, and not a blocker. Much of what we work with is file drops, database views, scheduled extracts, report outputs, and message queues. Some of the most valuable journeys we reconstruct run on systems that predate APIs. If a system genuinely cannot be read, we find that in week one and tell you what it means for scope before you commit to a pilot.",
  },
  {
    q: "What if the diagnostic finds nothing worth fixing?",
    a: "Then we tell you that, in writing, with the baseline that shows it. You keep a clear picture of what's actually happening in that operation and a documented reason not to spend further. That is a legitimate outcome and we would rather deliver it than manufacture a pilot.",
  },
  {
    q: "How is it AI-native?",
    a: (
      <>
        The problem we are solving is an operations problem: the journey is not visible, records
        do not agree, exceptions have no owner, and evidence has to be reconstructed by hand. AI is
        how we close that gap at each step of the method above, under explicit human authority with
        a full audit trail, not a technology badge layered on top. See{" "}
        <a href="#method" className="text-[#F0B287] hover:underline">
          How we do it
        </a>{" "}
        for the specifics.
      </>
    ),
  },
  {
    q: "We already have dashboards and automation. Why is that not enough?",
    a: (
      <>
        Dashboards show you data. They do not assign ownership or resolve exceptions. If nobody is
        accountable for what the dashboard shows, problems still fall through. See the{" "}
        <a href="#alternatives" className="text-[#F0B287] hover:underline">
          comparison above
        </a>{" "}
        for the fuller answer.
      </>
    ),
  },
  {
    q: "Why not just hire two more coordinators?",
    a: "Sometimes that is the right answer, and if your exception volume is low and flat we will tell you so. The arithmetic turns when volume grows: two coordinators cost their loaded salary every year, absorb the symptom rather than removing it, take the process knowledge with them when they leave, and leave the journey exactly as unobservable as it was.",
  },
  {
    q: "Can you pass our security review and vendor onboarding?",
    a: "Yes, and tell us early so it runs in parallel rather than after. We will complete your vendor security questionnaire, sign your data-processing terms, work under your access and device policies, and scope the diagnostic around sanitized data if your review will take longer than the engagement itself.",
  },
  {
    q: "Do you build a platform we then depend on you for?",
    a: "No standalone software platform is sold. We design and implement using established integration, workflow, and cloud infrastructure appropriate to your environment, and hand it over with training and operating procedures. The Managed Improvement service exists because assurance decays without tending, not because we hold the keys.",
  },
  {
    q: "Who owns the code, the configuration, and the data?",
    a: "You do. Work produced for your engagement is yours, in your repository or ours transferred to you, with the data staying yours throughout. We retain our own general methods and templates, the things we brought with us, which does not touch anything specific to you.",
  },
  {
    q: "What does it cost to run after you leave?",
    a: "Your existing infrastructure carries most of it, which is why we build on what you own. The genuine additions are compute and storage for the event and reconciliation layer, modest at typical operational volumes, and the staff time to work the exception queue, time your team already spends chasing the same exceptions without a queue. We size both during the diagnostic rather than leave you to discover them.",
  },
  {
    q: "How do you get the other party's data when they are not your customer?",
    a: "We do not need their cooperation to start. We reconcile against what they already send you and what you already send them: advices, confirmations, declarations, manifests, statements, portal statuses. That alone usually exposes the gaps. Where the counterparty is willing, an agreed event exchange makes it sharper.",
  },
  {
    q: "What if our process owner changes mid-engagement?",
    a: "We pause and re-establish ownership rather than continue without it. The deliverables are written to be picked up by a successor, and the diagnostic identifies the process owner role explicitly, not just the person, so handovers do not reset the work.",
  },
  {
    q: "How is this different from a generic systems integrator?",
    a: "We do not do generic AI transformation or undefined automation. We start from one operational journey with a measurable consequence in delay, leakage, or audit exposure, and build the assurance loop around it: map, track, reconcile, detect, resolve, prove. An integrator is typically accountable for the interface working. We are accountable for the operation being controllable.",
  },
  {
    q: "What do you need from us to start?",
    a: (
      <>
        An identified process owner and technology owner, access to relevant stakeholders, and
        either live or sanitized sample data. See{" "}
        <a href="#notfor" className="text-[#F0B287] hover:underline">
          who this isn't for
        </a>
        .
      </>
    ),
  },
  {
    q: "Where do you deploy this?",
    a: "Customer-hosted, managed single-tenant, sovereign-cloud, or on-premises, depending on your constraints.",
  },
];


const btnPrimary =
  "inline-flex items-center justify-center gap-2 bg-[#D97A3D] hover:bg-[#A8551F] text-white font-body text-sm font-medium px-6 py-3 rounded-full transition-colors";
const btnQuiet =
  "inline-flex items-center justify-center gap-2 border border-[#4E3A2C] text-[#F0B287] hover:bg-[#33210F] font-body text-sm font-medium px-6 py-3 rounded-full transition-colors";
const bodyText = "font-body text-base leading-relaxed text-[#C3B3A4]";
const cardCls = "rounded-2xl border border-[#3A2A20] bg-[#221811]";

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-body text-sm font-semibold uppercase tracking-widest text-[#E8996A] mb-4">
    {children}
  </p>
);

const Section = ({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="scroll-mt-24 py-16 lg:py-20 border-t border-[#3A2A20] first:border-t-0"
  >
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#F5EFE8] mb-6 max-w-3xl">
      {title}
    </h2>
    {children}
  </motion.section>
);

const Prose = ({ children }: { children: ReactNode }) => (
  <div className="max-w-3xl space-y-4">{children}</div>
);

const Diagram = () => (
  <figure
    id="positioning-diagram"
    className="my-10"
    aria-label="Diagram: five source systems each hold a fragment of one journey. A journey-level assurance layer sits above them, holding the whole journey end to end, with an event log, reconciliation rules, an exception ledger with named owners, and evidence."
  >
    <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#9A8879] mb-4">
      One journey, held end to end
    </p>
    {/* Journey line */}
    <div className="relative h-14 mb-6" aria-hidden="true">
      <div className="absolute left-0 right-0 top-8 h-px bg-[#4E3A2C]" />
      {[2, 22, 62, 82, 98].map((p) => (
        <span
          key={p}
          className="absolute top-8 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8996A]"
          style={{ left: `${p}%` }}
        />
      ))}
      <span
        className="absolute top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E0796A] ring-4 ring-[#E0796A]/25"
        style={{ left: "42%" }}
      />
      <span
        className="absolute top-0 -translate-x-1/2 whitespace-nowrap font-body text-xs font-medium text-[#E0796A]"
        style={{ left: "42%" }}
      >
        deviation, owner assigned
      </span>
    </div>

    {/* Layer box */}
    <div className="rounded-2xl border-2 border-[#E8996A] bg-[#33210F] p-5 lg:p-7 shadow-[0_0_40px_rgba(232,153,106,0.22)]">
      <p className="font-heading text-lg lg:text-xl font-bold text-[#F0B287] mb-4">
        Journey-level assurance layer
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {layerCells.map(([t, s]) => (
          <div key={t} className="rounded-xl border border-[#4E3A2C] bg-[#171009] p-4">
            <p className="font-heading text-sm lg:text-base font-bold text-[#F5EFE8]">{t}</p>
            <p className="font-body text-xs lg:text-sm text-[#C3B3A4] mt-1">{s}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Connectors (desktop) */}
    <div className="hidden lg:grid grid-cols-5 gap-3" aria-hidden="true">
      {systems.map((s) => (
        <div key={s} className="flex justify-center">
          <span className="h-10 w-px bg-[#E8996A]/60" />
        </div>
      ))}
    </div>
    <div className="mt-4 lg:mt-0 flex flex-wrap lg:grid lg:grid-cols-5 gap-3">
      {systems.map((s) => (
        <div
          key={s}
          className="rounded-xl border border-[#3A2A20] bg-[#2B1D16] px-4 py-3 lg:py-5 text-center font-body text-sm lg:text-base font-medium text-[#F5EFE8] lg:flex lg:items-center lg:justify-center"
        >
          {s}
        </div>
      ))}
    </div>
    <figcaption className="mt-5 text-center font-body text-xs font-semibold uppercase tracking-widest text-[#9A8879]">
      Each holds a fragment · infrastructure you already own
    </figcaption>
  </figure>
);

const Arrow = () => (
  <span className="flex items-center justify-center text-[#E8996A] shrink-0" aria-hidden="true">
    <ArrowRight className="hidden lg:block h-5 w-5" />
    <ArrowDown className="lg:hidden h-5 w-5" />
  </span>
);

const Flow = () => (
  <div id="method-flow" className="my-8">
    <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3">
      {flow.map((g, gi) => (
        <li key={g.group} className="contents">
          <div className="lg:flex-1 flex flex-col">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#E8996A] mb-2 text-center">
              {g.group}
            </p>
            <div className="flex-1 flex flex-col lg:flex-row gap-2 rounded-2xl border border-dashed border-[#4E3A2C] p-2">
              {g.nodes.map((n, ni) => (
                <div key={n.name} className="contents">
                  <div className={`${cardCls} flex-1 p-4`}>
                    <n.Icon className="h-6 w-6 text-[#E8996A] mb-2" aria-hidden="true" />
                    <h3 className="font-heading text-base font-bold text-[#F5EFE8]">{n.name}</h3>
                    <p className="font-body text-sm text-[#C3B3A4] mt-1">{n.desc}</p>
                  </div>
                  {ni === 0 && <Arrow />}
                </div>
              ))}
            </div>
          </div>
          {gi < flow.length - 1 && (
            <div className="lg:self-center lg:pt-6">
              <Arrow />
            </div>
          )}
        </li>
      ))}
    </ol>
    <div className="mt-3 rounded-b-2xl border-x border-b border-[#4E3A2C] px-4 py-2 text-center font-body text-xs text-[#C3B3A4]">
      <span aria-hidden="true">&larr; </span>
      Prove returns to Map: extends to the next process without rebuilding
    </div>
  </div>
);

const OperationalAssurance = () => {
  return (
    <div className="min-h-screen bg-[#171009] text-[#F5EFE8]">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-16 lg:pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#F5EFE8] mb-6">
              We track your systems, reconcile what they show,{" "}
              <span className="text-[#E8996A]">
                and surface the revenue and performance gaps hiding between them.
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed text-[#C3B3A4] mb-4 max-w-3xl">
              We connect the systems your critical operations run across, reconcile records against
              source truth, and give every discrepancy a named owner and a traceable history.
            </p>
            <p className="font-body text-base leading-relaxed text-[#C3B3A4] mb-6 max-w-3xl">
              Start with a 30-minute discovery session to diagnose what is actually happening in
              your operation, scoped to where you hurt most, before committing to anything further.
            </p>
            <div className="rounded-xl border-l-4 border-[#E8996A] bg-[#221811] p-4 mb-8 max-w-3xl font-body text-base text-[#F5EFE8]">
              <b>If we find nothing worth fixing, we tell you that in writing, with the baseline that proves it.</b>{" "}
              See{" "}
              <a href="#questions" className="text-[#F0B287] hover:underline">
                why we work this way
              </a>
              .
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className={btnPrimary}>
                Book a discovery session
              </Link>
              <a href="#method" className={btnQuiet}>
                See how we do it
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <Section id="problem" eyebrow="The problem" title="Nobody holds the whole journey.">
          <Prose>
            <p className={bodyText}>
              For a critical case, shipment, payment, permit, or service request, your operations team
              cannot reliably say where it stands. One team says complete, another says pending. The
              SLA clock keeps running silently. Exceptions sit unresolved in spreadsheets, inboxes,
              and chat threads without a single accountable owner.
            </p>
            <p className={bodyText}>
              The root failure is structural: <strong className="text-[#F5EFE8]">no single system holds the complete journey</strong>.
              Each application holds only a fragment. Your skilled people spend their days doing what
              disconnected systems cannot: chasing status, re-keying data across boundaries,
              reconciling records by hand, and rebuilding history after the fact. That shadow work is
              invisible in the status reports you receive, which is precisely why it never gets fixed.
            </p>
            <p className={bodyText}>
              <strong className="text-[#F5EFE8]">This breakdown is sharpest when the operation crosses more than one organization</strong>,
              where each party sees only its own leg of the journey and nobody can see the whole
              picture. That is the hardest version of this problem, and the exact one we are built to
              solve.
            </p>
          </Prose>
        </Section>

        <Section id="practice" eyebrow="In practice" title="How an approved waiver becomes lost revenue.">
          <div className="max-w-3xl space-y-4">
            <p className={`${bodyText} text-sm italic`}>
              An illustrative example. One fee waiver, three systems, each doing its job.
            </p>
          </div>

          <div className={`${cardCls} p-5 lg:p-6 mt-4 max-w-4xl`}>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#9A8879] mb-4">
              One operational journey · three disconnected systems of record
            </p>
            <ol className="divide-y divide-[#3A2A20]">
              {timeline.map((ev, i) =>
                "gap" in ev ? (
                  <li key={i} className="py-4">
                    <div className="rounded-xl border border-dashed border-[#E0796A] bg-[#361B16] p-4">
                      <p className="font-heading text-sm font-bold text-[#E0796A]">
                        Gap opens: approved term and live tariff never compared
                      </p>
                      <p className="font-body text-sm text-[#C3B3A4] mt-1">
                        Nobody is responsible for checking that what was approved is what the system
                        is still doing.
                      </p>
                    </div>
                  </li>
                ) : (
                  <li key={i} className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr] gap-4 py-4">
                    <span className="font-heading text-sm font-extrabold text-[#E8996A]">{ev.day}</span>
                    <div className="font-body text-base text-[#F5EFE8]">
                      {ev.what}
                      <span
                        className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold align-middle ${
                          ev.open ? "bg-[#361B16] text-[#E0796A]" : "bg-[#14251C] text-[#79B694]"
                        }`}
                      >
                        {ev.chip}
                      </span>
                      <span className="block text-sm text-[#9A8879] mt-1">{ev.src}</span>
                    </div>
                  </li>
                ),
              )}
            </ol>
          </div>

          <div className="max-w-3xl space-y-4 mt-6">
            <p className={bodyText}>
              The approval was valid. The waiver was set correctly. Nobody compared the two once the
              term ended. It was nobody's fault because it was nobody's job.
            </p>
            <p className={bodyText}>
              Nothing crashed. No report was wrong. Every system did exactly what it was told within
              its own boundary. The gap stayed invisible until an audit sample found it.
            </p>
          </div>
        </Section>

        <Section id="alternatives" eyebrow="What you already own" title="Why the tools you already bought have not closed this.">
          <div className="max-w-3xl">
            <p className={bodyText}>
              Most organizations facing this breakdown have already invested in adjacent enterprise
              tooling, and remain puzzled that cross-system friction and leakage persist.
            </p>
          </div>
          <Diagram />
          <div className={`${cardCls} overflow-x-auto`}>
            <table className="w-full text-left font-body text-sm lg:text-base">
              <thead>
                <tr className="border-b border-[#3A2A20] bg-[#2B1D16]">
                  <th scope="col" className="px-4 py-3 font-heading font-bold text-[#F5EFE8] w-2/5">
                    What you may already have
                  </th>
                  <th scope="col" className="px-4 py-3 font-heading font-bold text-[#F5EFE8]">
                    What it leaves open
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3A2A20]">
                {comparison.map(([tool, gap]) => (
                  <tr key={tool}>
                    <th scope="row" className="px-4 py-3 align-top font-semibold text-[#F5EFE8]">
                      {tool}
                    </th>
                    <td className="px-4 py-3 align-top text-[#C3B3A4] leading-relaxed">{gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mt-6">
            <p className={bodyText}>
              That is the layer we build, <strong className="text-[#F5EFE8]">on infrastructure you already own</strong>. No new
              platform to license, staff, and defend at your next architecture review.
            </p>
          </div>
        </Section>

        <Section id="method" eyebrow="How we do it" title="We map. We reconcile. We route. We prove.">
          <Flow />
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {controlModel.map(([t, d]) => (
              <div key={t} className={`${cardCls} p-5`}>
                <h3 className="font-heading text-base font-bold text-[#F0B287] mb-2">{t}</h3>
                <p className="font-body text-sm leading-relaxed text-[#C3B3A4]">{d}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mt-6">
            <p className={bodyText}>
              We start with one critical process. The event history, exception ledger and reporting
              extend to the next process without rebuilding.
            </p>
          </div>
        </Section>

        <Section id="origin" eyebrow="Why JB Agile" title="Built for operations where a gap is expensive.">
          <Prose>
            <p className={bodyText}>
              Our team has delivered mission-critical platforms and complex integration across
              telecom, banking, government, healthcare and utilities. In each, the same failure
              recurred: a record held correctly by the system that created it, and unmonitored the
              moment it crossed a boundary. JB Agile exists to close that gap.
            </p>
            <p className={bodyText}>
              This is what we are delivering right now: JB Agile is currently the technology partner
              on an active programme building an operational assurance layer for a{" "}
              <strong className="text-[#F5EFE8]">regulated, multi-party operation</strong>, covering multi-agency integration,
              automated reconciliation, business rules, SLA monitoring, exception routing, and
              evidentiary audit reporting. <em>It is an active engagement, and we describe it that way.</em>{" "}
              A discovery session is the first step to evaluating how this applies to your operation.
            </p>
          </Prose>
        </Section>
      </div>

      {/* Offer band */}
      <section id="offer" className="scroll-mt-24 bg-[#2B1D16] py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <Eyebrow>The offer</Eyebrow>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#F5EFE8] mb-10 max-w-3xl">
            Start bounded. Keep everything we build.
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-[#3A2A20] bg-[#171009] p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#E8996A] mb-2">
                  {s.n}
                </p>
                <h3 className="font-heading text-lg font-bold text-[#F5EFE8] mb-1">{s.title}</h3>
                {s.meta && <p className="font-body text-xs text-[#9A8879] mb-3">{s.meta}</p>}
                <p className="font-body text-sm leading-relaxed text-[#C3B3A4]">{s.body}</p>
                {s.keep && (
                  <p className="font-body text-sm font-semibold text-[#F0B287] mt-3">{s.keep}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mt-6">
            <div className="rounded-2xl border border-[#3A2A20] bg-[#171009] p-6">
              <h3 className="font-heading text-lg font-bold text-[#F5EFE8] mb-3">How the diagnostic runs</h3>
              <div className="space-y-3 font-body text-sm leading-relaxed text-[#C3B3A4]">
                <p>
                  <b className="text-[#F5EFE8]">Week 1, Discovery &amp; Scope:</b> Kickoff interviews,
                  process walkthroughs, systems mapping, and agreeing boundary definitions with your
                  process and tech owners.
                </p>
                <p>
                  <b className="text-[#F5EFE8]">Week 2, Breakpoints &amp; Rules:</b> Identifying
                  reconciliation points, exception types, SLA clocks, evidentiary gaps, data quality
                  readiness, and baseline measurement.
                </p>
                <p>
                  <b className="text-[#F5EFE8]">Week 3, Roadmap &amp; Commercial Case:</b>{" "}
                  Prioritization, pilot architecture outline, acceptance measures, delivery
                  estimate, and an executive walkthrough with your team.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#3A2A20] bg-[#171009] p-6">
              <h3 className="font-heading text-lg font-bold text-[#F5EFE8] mb-3">
                What we need from you to start
              </h3>
              <p className="font-body text-sm leading-relaxed text-[#C3B3A4]">
                An identified process owner and technology owner, access to relevant domain
                stakeholders, and either live or sanitized sample data. (See{" "}
                <a href="#notfor" className="text-[#F0B287] hover:underline">
                  who this isn't for
                </a>{" "}
                if either owner is unassigned).
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <Section id="notfor" eyebrow="Who this is not for" title="Four reasons to stop reading.">
          <ul className="list-disc pl-6 space-y-3 max-w-3xl font-body text-base leading-relaxed text-[#C3B3A4] marker:text-[#E8996A]">
            {notFor.map((item, i) => (
              <li key={i}>
                {item ?? (
                  <>
                    There is no identified process owner and no technology owner.{" "}
                    <strong className="text-[#F5EFE8]">No accountable owner, no diagnostic:</strong> we'd rather say that here
                    than three meetings in
                  </>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="questions" eyebrow="Questions buyers ask" title="The ones we get first.">
          <Accordion type="multiple" className={`${cardCls} px-5 max-w-4xl`}>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-[#3A2A20]">
                <AccordionTrigger className="text-left font-heading text-base font-bold text-[#F5EFE8] hover:no-underline hover:text-[#F0B287]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base leading-relaxed text-[#C3B3A4]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </div>

      {/* Closing CTA band */}
      <section
        id="next"
        className="scroll-mt-24 py-16 lg:py-24"
        style={{ background: "linear-gradient(115deg,#4A2F1E 0%,#2B1D16 45%,#171009 100%)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#F5EFE8] mb-4 max-w-2xl">
            Start with a 30-minute discovery session.
          </h2>
          <p className="font-body text-lg leading-relaxed text-[#C3B3A4] max-w-xl">
            We agree which process matters most, who owns it, and what data is available. If a
            diagnostic is not worth doing, we will say so.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
            <Link to="/contact" className={btnPrimary}>
              Book a discovery session
            </Link>
            <a href="mailto:jawad@jb-agiledev.com" className="font-body text-sm text-[#F0B287] hover:underline">
              jawad@jb-agiledev.com
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#171009] border-t border-[#3A2A20] py-6">
        <p className="container mx-auto px-6 font-body text-xs leading-relaxed text-[#9A8879] max-w-4xl">
          The control register maps to the control frameworks your auditors already work in.
          Information handling follows ISO 27001 practice. AI-assisted steps are designed against
          NIST AI Risk Management Framework structure. These are alignments, not certifications.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default OperationalAssurance;
