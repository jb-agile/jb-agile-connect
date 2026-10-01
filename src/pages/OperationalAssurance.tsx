import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FX_PKR_PER_USD = 280; // every PKR example figure derives from this one rate

type Currency = "USD" | "PKR";
type InputId = "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q8";
type Inputs = Record<InputId, string>;

const examples = (cur: Currency): Inputs => {
  const k = cur === "PKR" ? FX_PKR_PER_USD : 1;
  return {
    q1: "180",
    q2: "35",
    q3: String(42 * k),
    q4: String(60000 * k),
    q5: String(240000 * k),
    q6: "24",
    q8: "5",
  };
};

const scrollToCheck = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("check")?.scrollIntoView({ behavior: "smooth" });
};

const timeline = [
  {
    day: "MON",
    what: "Customer order confirmed in CRM and routed to fulfillment",
    src: "CRM · Status: Confirmed",
    chip: "Owned",
    open: false,
  },
  {
    day: "TUE",
    what: "Order picked and packed in warehouse; custom discount applied at pack time",
    src: "Warehouse Management System · Status: Packed with discount",
    chip: "Owned",
    open: false,
  },
  {
    day: "WED",
    what: "Shipment handed to 3PL carrier; handoff event never syncs back to CRM",
    src: "Carrier handoff · CRM remains frozen at “In fulfillment”",
    chip: "No owner",
    open: true,
  },
  { gap: true },
  {
    day: "FRI",
    what: "Finance system auto-generates invoice, pricing against Monday's pre-discount CRM record",
    src: "Billing & ERP · Invoice issued with incorrect balance",
    chip: "Unreconciled",
    open: true,
  },
  {
    day: "TUE +6",
    what: "Customer escalates: billed original amount on an order delivered four days ago",
    src: "Two senior staff spend an afternoon cross-referencing CRM, WMS, and ERP logs",
    chip: "Escalation",
    open: true,
  },
] as const;

const comparison = [
  [
    "BI and dashboards",
    "Nobody is accountable for what the dashboard displays. Exceptions are observed and reported, but never owned or resolved.",
  ],
  [
    "Integration, iPaaS or ESB",
    "Moves records between endpoints. Moving a payload does not assert that it is complete, reconciled, or correct against business rules.",
  ],
  [
    "Process mining or process intelligence",
    "Needs systems that already emit a readable event log, and is priced and staffed for large ERP estates. Does not reconcile your record against a counterparty document that shares no key with it.",
  ],
  [
    "Reconciliation or data-control platforms",
    "Built for financial data structures inside one organization, matching what you feed them. Deciding what constitutes the journey, and reconciling against a counterparty document with no shared key, is upstream of what they do.",
  ],
  [
    "GRC and audit tooling",
    "Records that a control policy exists on paper, not that it operated in the live flow. Audit evidence must still be gathered by hand.",
  ],
  [
    "Business assurance suites",
    "Detect leakage and fraud across one industry's high-volume estate, built around that industry's data model. Outside the estate they were designed for, coverage thins quickly.",
  ],
  [
    "System monitoring and APM",
    "Watch infrastructure and application health. A server can be perfectly healthy while a permit sits unowned for eleven days.",
  ],
  [
    "Case or workflow systems",
    "Manage work inside one boundary. The failure happens at the handoff between boundaries, which no single system sees.",
  ],
  [
    "Your incumbent integrator or platform partner",
    "Accountable for the interface working, not for the operation being controllable. The assurance layer is rarely in anyone's scope.",
  ],
  [
    "A one-off consulting review",
    "Produces findings and a recommendation. Leaves you a document. Nothing on the ground changes, and the findings are stale within two quarters.",
  ],
  [
    "The other party's systems, in a multi-party flow",
    "Hold their own leg of the journey accurately. Nobody holds the journey across the parties, so each side is confidently right about a different version.",
  ],
  [
    "Hiring more coordinators",
    "Absorbs the pain in the short term. Scales cost linearly with volume and leaves the underlying journey just as unobservable.",
  ],
];

const method = [
  ["Map", "the operational flow, systems, handoffs, and controls, using AI to parse unstructured SOPs, emails, and portal formats"],
  ["Track", "each case, transaction, shipment, or permit across systems into an immutable, neutral event spine"],
  ["Reconcile", "records against source data and explicit business rules, including AI-assisted matching when counterparties share no common key"],
  ["Detect", "missing, conflicting, late, or out-of-sequence events before customers, auditors, or SLAs are breached"],
  ["Route", "exceptions and decisions with explicit SLA clocks to the exact person accountable for them"],
  ["Prove", "what happened, with a traceable journey history and audit-ready evidence reporting on demand"],
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
    q: "You are principal-led. What happens if Jawad is unavailable?",
    a: "A fair question to ask a small firm. Delivery is principal-led and senior, not solo. The maps, registers, rules, architecture, and operating procedures are in your hands during the engagement, not at the end of it. Nothing depends on undocumented knowledge in one person's head.",
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
        <a href="#method" className="text-accent hover:underline">
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
        <a href="#alternatives" className="text-accent hover:underline">
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
        <a href="#notfor" className="text-accent hover:underline">
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

type Verdict = { tone: "fit" | "maybe" | "no"; key: string; text: string; acts: ("primary" | "quiet")[] };

const getVerdict = (q1: number, q7: "yes" | "no", q8: number): Verdict => {
  if (q8 <= 1) {
    return {
      tone: "no",
      key: "Not a fit",
      text: "Your operation runs inside one system, end to end. That's outside what this diagnostic is built for, whatever your exception volume, and we'd rather say that here than three meetings in.",
      acts: [],
    };
  }
  if (q1 < 20) {
    return {
      tone: "no",
      key: "Not a fit",
      text: "Your journey crosses systems, but exception volume is low and flat. Two more coordinators is genuinely the right answer here, and we'd rather say that here than three meetings in.",
      acts: [],
    };
  }
  if (q8 >= 3 || (q7 === "yes" && q8 >= 2)) {
    return {
      tone: "fit",
      key: "Clear candidate",
      text: "Your journey crosses enough boundaries that no single system holds it, which is the version we are built for. A discovery session is the right next step to scope a diagnostic and give you a clear picture of what's actually happening.",
      acts: ["primary", "quiet"],
    };
  }
  return {
    tone: "maybe",
    key: "Worth a conversation",
    text: "There is enough here to be worth a conversation, but not enough on these answers alone to say a diagnostic is the right next step. Bring these numbers to a discovery session and we will tell you either way.",
    acts: ["quiet"],
  };
};

const toNum = (v: string) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

const btnPrimary =
  "inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-full transition-colors";
const btnQuiet =
  "inline-flex items-center justify-center gap-2 border border-accent/60 text-accent hover:bg-accent/10 font-body text-sm font-medium px-6 py-3 rounded-full transition-colors";
const btnQuietDark =
  "inline-flex items-center justify-center gap-2 border border-white/30 text-text-light hover:bg-white/10 font-body text-sm font-medium px-6 py-3 rounded-full transition-colors";
const inputCls =
  "w-full rounded-lg border border-border-light bg-white px-3 py-2 font-body text-base text-text-dark focus:outline-none focus:ring-2 focus:ring-accent";
const bodyText = "font-body text-base leading-relaxed text-muted-foreground";

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
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
    className="scroll-mt-24 py-16 lg:py-20 border-t border-border-light first:border-t-0"
  >
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-text-dark mb-6 max-w-3xl">
      {title}
    </h2>
    <div className="max-w-3xl space-y-4">{children}</div>
  </motion.section>
);

const Calculator = () => {
  const [cur, setCur] = useState<Currency>("USD");
  const [dirty, setDirty] = useState(false);
  const [vals, setVals] = useState<Inputs>(examples("USD"));
  const [q7, setQ7] = useState<"yes" | "no">("yes");

  const setVal = (id: InputId, v: string) => {
    setDirty(true);
    setVals((prev) => ({ ...prev, [id]: v }));
  };

  const pickCurrency = (c: Currency) => {
    setCur(c);
    if (!dirty) setVals(examples(c));
  };

  const fmt = (n: number) => `${cur} ${Math.round(Number.isFinite(n) ? n : 0).toLocaleString("en-US")}`;

  const q1 = toNum(vals.q1);
  const q2 = toNum(vals.q2);
  const q3 = toNum(vals.q3);
  const q4 = toNum(vals.q4);
  const q5 = toNum(vals.q5);
  const q6 = toNum(vals.q6);
  const q8 = toNum(vals.q8);

  const hours = q1 * (q2 / 60) * 12;
  const handling = hours * q3;
  const evidence = q6 * 8 * q3;
  const exposure = q4 + q5 + evidence;
  const total = handling + exposure;
  const verdict = getVerdict(q1, q7, q8);

  const field = (id: InputId, label: string, hint?: string, money = false) => (
    <div>
      <label htmlFor={id} className="block font-body text-sm font-medium text-text-dark mb-1">
        {label}
        {hint && <span className="block text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      <div className="flex items-center gap-2">
        {money && (
          <span className="font-body text-xs font-semibold text-muted-foreground w-9" aria-hidden="true">
            {cur}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={id === "q8" ? 1 : 0}
          step={1}
          value={vals[id]}
          onChange={(e) => setVal(id, e.target.value)}
          className={inputCls}
        />
      </div>
    </div>
  );

  const toneCls =
    verdict.tone === "fit"
      ? "border-accent bg-accent/10"
      : verdict.tone === "maybe"
        ? "border-border-light bg-surface-light"
        : "border-border-light bg-surface-light";

  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 lg:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Self-check · your inputs, your arithmetic
        </p>
        <div role="group" aria-label="Currency" className="inline-flex rounded-full border border-border-light overflow-hidden">
          {(["USD", "PKR"] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cur === c}
              onClick={() => pickCurrency(c)}
              className={`px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                cur === c ? "bg-accent text-primary-foreground" : "text-text-dark hover:bg-surface-light"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="font-heading text-sm font-bold text-text-dark">Manual handling cost</p>
          {field("q1", "Exceptions or discrepancies per month")}
          {field("q2", "Minutes per exception", "Chase to write-up, not just the fix")}
          {field("q3", "Loaded hourly cost of the people doing it", undefined, true)}
        </div>
        <div className="space-y-4">
          <p className="font-heading text-sm font-bold text-text-dark">Exposure you are already carrying</p>
          {field("q4", "SLA or contractual penalties in the last 12 months", "Including the ones you settled informally", true)}
          {field("q5", "Value of discrepancies still unresolved", "Aged beyond your own tolerance", true)}
          {field("q6", "Staff days spent assembling evidence", "For the last audit, inspection, or incident review")}
          <div>
            <label htmlFor="q7" className="block font-body text-sm font-medium text-text-dark mb-1">
              Any single incident in the last two years that could not be reconstructed cleanly
            </label>
            <select
              id="q7"
              value={q7}
              onChange={(e) => setQ7(e.target.value as "yes" | "no")}
              className={inputCls}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {field("q8", "Systems, departments, or partner organizations the journey crosses")}
        </div>
      </div>

      <div className="mt-8 border-t border-border-light pt-6" aria-live="polite">
        <div className="flex flex-wrap justify-between gap-2 py-2 font-body text-sm text-muted-foreground">
          <span>
            Manual handling, per year
            {hours > 0 && <> · {Math.round(hours).toLocaleString("en-US")} hours</>}
          </span>
          <b className="text-text-dark">{fmt(handling)}</b>
        </div>
        <div className="flex flex-wrap justify-between gap-2 py-2 font-body text-sm text-muted-foreground">
          <span>Exposure carried, last 12 months</span>
          <b className="text-text-dark">{fmt(exposure)}</b>
        </div>
        <div className="flex flex-wrap justify-between gap-2 py-3 border-t border-border-light font-body">
          <span className="font-semibold text-text-dark">Your floor figure, per year</span>
          <b className="font-heading text-2xl text-accent">{fmt(total)}</b>
        </div>
        <p className="font-body text-xs text-muted-foreground mt-1">
          Example figures are loaded above; replace them with yours.
        </p>

        <div className={`mt-6 rounded-xl border p-5 ${toneCls}`}>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            {verdict.key}
          </p>
          <p className="font-body text-base leading-relaxed text-text-dark">{verdict.text}</p>
          {verdict.acts.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {verdict.acts.map((a) => (
                <Link key={a} to="/contact" className={a === "primary" ? btnPrimary : btnQuiet}>
                  {a === "primary" ? "Book the discovery session" : "Book a discovery session"}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const OperationalAssurance = () => {
  return (
    <div className="min-h-screen bg-surface-light">
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
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark mb-6">
              We track your systems, reconcile what they show,{" "}
              <span className="text-accent">
                and surface the revenue and performance gaps hiding between them.
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed text-muted-foreground mb-4 max-w-3xl">
              We connect the systems your critical operations run across, reconcile records against
              source truth, and give every discrepancy a named owner and a traceable history.
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground mb-6 max-w-3xl">
              Start with a 30-minute discovery session to diagnose what is actually happening in
              your operation, scoped to where you hurt most, before committing to anything further.
            </p>
            <div className="rounded-xl border-l-4 border-accent bg-white p-4 mb-8 max-w-3xl font-body text-base text-text-dark">
              <b>If we find nothing worth fixing, we tell you that in writing, with the baseline that proves it.</b>{" "}
              See{" "}
              <a href="#questions" className="text-accent hover:underline">
                why we work this way
              </a>
              .
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#check" onClick={scrollToCheck} className={btnPrimary}>
                Score your operation
                <span className="text-xs font-semibold opacity-80">5 MIN</span>
              </a>
              <Link to="/contact" className={btnQuiet}>
                Or book a discovery session
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <Section id="problem" eyebrow="The problem" title="Nobody holds the whole journey.">
          <p className={bodyText}>
            For a critical case, shipment, payment, permit, or service request, your operations team
            cannot reliably say where it stands. One team says complete, another says pending. The
            SLA clock keeps running silently. Exceptions sit unresolved in spreadsheets, inboxes,
            and chat threads without a single accountable owner.
          </p>
          <p className={bodyText}>
            The root failure is structural: <strong>no single system holds the complete journey</strong>.
            Each application holds only a fragment. Your skilled people spend their days doing what
            disconnected systems cannot: chasing status, re-keying data across boundaries,
            reconciling records by hand, and rebuilding history after the fact. That shadow work is
            invisible in the status reports you receive, which is precisely why it never gets fixed.
          </p>
          <p className={bodyText}>
            <strong>This breakdown is sharpest when the operation crosses more than one organization</strong>,
            where each party sees only its own leg of the journey and nobody can see the whole
            picture. That is the hardest version of this problem, and the exact one we are built to
            solve.
          </p>
        </Section>

        <Section id="practice" eyebrow="In practice" title="How a normal handoff becomes a costly fire drill.">
          <p className={`${bodyText} italic`}>
            Composited from recurring patterns across real enterprise operations: a cross-system
            order journey where every system performed its job, yet the overall operation failed.
          </p>

          <div className="rounded-2xl border border-border-light bg-white p-5 lg:p-6">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              One operational journey · three disconnected systems of record
            </p>
            <ol className="divide-y divide-border-light">
              {timeline.map((ev, i) =>
                "gap" in ev ? (
                  <li key={i} className="py-4">
                    <div className="rounded-xl border border-dashed border-accent bg-accent/10 p-4">
                      <p className="font-heading text-sm font-bold text-accent">
                        Gap opens: 72 hours without ownership
                      </p>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        Nobody is monitoring the seam between what the warehouse knows and what the
                        CRM displays.
                      </p>
                    </div>
                  </li>
                ) : (
                  <li key={i} className="grid grid-cols-[4.5rem_1fr] gap-4 py-4">
                    <span className="font-heading text-sm font-extrabold text-accent">{ev.day}</span>
                    <div className="font-body text-base text-text-dark">
                      {ev.what}
                      <span
                        className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold align-middle ${
                          ev.open ? "bg-accent/15 text-accent-hover" : "bg-surface-light text-muted-foreground"
                        }`}
                      >
                        {ev.chip}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-1">{ev.src}</span>
                    </div>
                  </li>
                ),
              )}
            </ol>
          </div>

          <p className={bodyText}>
            The root cause was a valid pack-time discount that was never reconciled back against
            invoicing rules. It was nobody's fault because it was nobody's job.
          </p>
          <p className={bodyText}>
            Nothing crashed. No server went down. Every system performed exactly as programmed
            within its own boundary. But because the journey between them was unheld and
            unmonitored, the gap stayed invisible until an angry customer exposed it.
          </p>
        </Section>

        <Section id="check" eyebrow="Score your operation" title="Work out your own exposure.">
          <p className={bodyText}>
            We will not guess a percentage. Anyone quoting you an ROI figure before establishing
            your baseline is making assumptions. Answer eight questions using your operational
            realities, and calculate your annual exposure floor in five minutes.
          </p>
        </Section>
        <div className="-mt-10 pb-16 lg:pb-20">
          <Calculator />
          <p className="font-body text-base text-text-dark mt-6 max-w-3xl">
            <strong>
              If your operation runs inside one system, or your exception volume is genuinely low
              and flat, this is not for you, and the result above will say so.
            </strong>
          </p>
        </div>

        <Section id="alternatives" eyebrow="What you already own" title="Why the tools you already bought have not closed this.">
          <p className={bodyText}>
            Most organizations facing this breakdown have already invested in adjacent enterprise
            tooling, and remain puzzled that cross-system friction and leakage persist.
          </p>
        </Section>
        <div className="-mt-10 pb-4">
          <div className="overflow-x-auto rounded-2xl border border-border-light bg-white">
            <table className="w-full min-w-[560px] text-left font-body text-sm">
              <thead>
                <tr className="border-b border-border-light bg-surface-light">
                  <th scope="col" className="px-4 py-3 font-heading font-bold text-text-dark w-1/3">
                    What you may already have
                  </th>
                  <th scope="col" className="px-4 py-3 font-heading font-bold text-text-dark">
                    What it leaves open
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {comparison.map(([tool, gap]) => (
                  <tr key={tool}>
                    <th scope="row" className="px-4 py-3 align-top font-semibold text-text-dark">
                      {tool}
                    </th>
                    <td className="px-4 py-3 align-top text-muted-foreground leading-relaxed">{gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl space-y-4 mt-6 pb-12">
            <p className={bodyText}>
              The structural gap none of these tools address is a{" "}
              <strong>journey-level assurance layer</strong>: one neutral spine that connects the
              end-to-end operational journey, continuously reconciles records against source truth,
              and assigns an accountable human owner to every deviation.
            </p>
            <p className={bodyText}>
              That is the layer we build, <strong>on infrastructure you already own</strong>. No new
              platform to license, staff, and defend at your next architecture review.
            </p>
          </div>
        </div>

        <Section id="method" eyebrow="How we do it" title="We map. We reconcile. We route. We prove.">
          <ol className="space-y-3">
            {method.map(([verb, rest], i) => (
              <li key={verb} className="flex gap-4 font-body text-base leading-relaxed text-muted-foreground">
                <span className="font-heading text-2xl font-extrabold text-accent/40 w-8 shrink-0">
                  {i + 1}
                </span>
                <span>
                  <b className="text-text-dark">{verb}</b> {rest}
                </span>
              </li>
            ))}
          </ol>
          <p className={bodyText}>
            <strong>Deterministic control comes first.</strong> Integration, workflow state,
            permissions, business rules, and evidence stay strictly deterministic. AI performs
            bounded, high-value work: ingesting unstructured PDFs and emails, matching records
            across legacy platforms with no shared foreign key, flagging subtle behavioral
            anomalies, and compiling audit evidence. Consequential actions always require explicit
            human approval with a complete audit trail. What you buy is an operation under
            verifiable control, built AI-native, not an opaque technology experiment.
          </p>
          <p className={bodyText}>
            We start with a single critical process, but we never build a throwaway point solution.
            The event spine, exception ledger, and reporting spine extend to your second and third
            process without rebuilding from scratch.
          </p>
        </Section>

        <Section id="origin" eyebrow="Why JB Agile" title="20+ years of mission-critical systems and integration.">
          <p className={bodyText}>
            Jawad has spent more than 20 years in enterprise systems architecture, complex
            integration, and mission-critical platform delivery, including scaling engineering
            organizations past 80 people across telecom, banking, government, healthcare, and
            utilities. In every one of those high-stakes environments, the same breakdown
            recurringly emerged: a billing record, a customs permit, an insurance claim, or an
            interconnect settlement, each held perfectly by the system that created it, yet
            completely unmonitored the moment it crossed boundaries. JB Agile exists to close that
            specific void.
          </p>
          <p className={bodyText}>
            This is what we are delivering right now: JB Agile is currently the technology partner
            on an active programme building an operational assurance layer for a{" "}
            <strong>regulated, multi-party operation</strong>, covering multi-agency integration,
            automated reconciliation, business rules, SLA monitoring, exception routing, and
            evidentiary audit reporting. <em>It is an active engagement, and we describe it that way.</em>{" "}
            A discovery session is the first step to evaluating how this applies to your operation.
          </p>
        </Section>
      </div>

      {/* Offer band */}
      <section id="offer" className="scroll-mt-24 bg-surface-dark py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <Eyebrow>The offer</Eyebrow>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-text-light mb-10 max-w-3xl">
            Start bounded. Keep everything we build.
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {s.n}
                </p>
                <h3 className="font-heading text-lg font-bold text-text-light mb-1">{s.title}</h3>
                {s.meta && <p className="font-body text-xs text-text-light/60 mb-3">{s.meta}</p>}
                <p className="font-body text-sm leading-relaxed text-text-light/80">{s.body}</p>
                {s.keep && (
                  <p className="font-body text-sm font-semibold text-accent mt-3">{s.keep}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mt-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-text-light mb-3">How the diagnostic runs</h3>
              <div className="space-y-3 font-body text-sm leading-relaxed text-text-light/80">
                <p>
                  <b className="text-text-light">Week 1, Discovery &amp; Scope:</b> Kickoff interviews,
                  process walkthroughs, systems mapping, and agreeing boundary definitions with your
                  process and tech owners.
                </p>
                <p>
                  <b className="text-text-light">Week 2, Breakpoints &amp; Rules:</b> Identifying
                  reconciliation points, exception types, SLA clocks, evidentiary gaps, data quality
                  readiness, and baseline measurement.
                </p>
                <p>
                  <b className="text-text-light">Week 3, Roadmap &amp; Commercial Case:</b>{" "}
                  Prioritization, pilot architecture outline, acceptance measures, delivery
                  estimate, and an executive walkthrough with your team.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-lg font-bold text-text-light mb-3">
                What we need from you to start
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-light/80">
                An identified process owner and technology owner, access to relevant domain
                stakeholders, and either live or sanitized sample data. (See{" "}
                <a href="#notfor" className="text-accent hover:underline">
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
          <ul className="list-disc pl-6 space-y-3 font-body text-base leading-relaxed text-muted-foreground">
            {notFor.map((item, i) => (
              <li key={i}>
                {item ?? (
                  <>
                    There is no identified process owner and no technology owner.{" "}
                    <strong>No accountable owner, no diagnostic:</strong> we'd rather say that here
                    than three meetings in
                  </>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="questions" eyebrow="Questions buyers ask" title="The ones we get first.">
          <Accordion type="multiple" className="rounded-2xl border border-border-light bg-white px-5">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-border-light">
                <AccordionTrigger className="text-left font-heading text-base font-bold text-text-dark hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </div>

      {/* Closing CTA band */}
      <section id="next" className="scroll-mt-24 bg-surface-dark py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-text-light mb-4">
            Score your operation.
          </h2>
          <p className="font-body text-lg leading-relaxed text-text-light/80 max-w-xl">
            Eight questions, five minutes, your own numbers, no contact details needed to see the
            result. If it says this is not for you, that is the result and we will not follow up.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#check" onClick={scrollToCheck} className={btnPrimary}>
              Score your operation
              <span className="text-xs font-semibold opacity-80">5 MIN</span>
            </a>
            <Link to="/contact" className={btnQuietDark}>
              Book a discovery session
            </Link>
          </div>
          <p className="font-body text-sm text-text-light/70 mt-6">
            Contact:{" "}
            <a href="mailto:jawad@jb-agiledev.com" className="text-accent hover:underline">
              jawad@jb-agiledev.com
            </a>
          </p>
        </div>
      </section>

      <div className="bg-surface-dark border-t border-white/10 pb-8 pt-6">
        <p className="container mx-auto px-6 font-body text-xs leading-relaxed text-text-light/60 max-w-4xl">
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
