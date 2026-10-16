import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BellRing, Check, Database, FileCheck2, KeyRound, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Same warm palette as the Operational Assurance page: dark hero, then
// alternating light and dark sections.

type Tone = "dark" | "light";

const tones: Record<Tone, React.CSSProperties> = {
  dark: {
    "--ink": "#F5EFE8", "--ink2": "#C3B3A4", "--ink3": "#9A8879", "--rule": "#3A2A20", "--rule2": "#4E3A2C",
    "--acc": "#E8996A", "--acci": "#F0B287", "--acc-soft": "#33210F", "--surf": "#221811", "--surf2": "#2B1D16",
    "--open": "#E0796A", "--open-soft": "#361B16", "--held": "#79B694", "--held-soft": "#14251C",
  } as React.CSSProperties,
  light: {
    "--ink": "#2B1D16", "--ink2": "#5C4A3C", "--ink3": "#6B5B4C", "--rule": "#E8DCCB", "--rule2": "#D8C6B0",
    "--acc": "#A8551F", "--acci": "#A8551F", "--acc-soft": "#FBEEE2", "--surf": "#FFFFFF", "--surf2": "#EFE7DD",
    "--open": "#9B2C1F", "--open-soft": "#F7E4DF", "--held": "#3F6B52", "--held-soft": "#E6EFE9",
  } as React.CSSProperties,
};

const toneBg: Record<Tone, string> = {
  dark: "bg-[#171009]",
  light: "bg-[#F5EFE8]",
};

const btnPrimary =
  "inline-flex items-center justify-center gap-2 bg-[#D97A3D] hover:bg-[#A8551F] text-white font-body text-sm font-medium px-6 py-3 rounded-full transition-colors";
const btnQuiet =
  "inline-flex items-center justify-center gap-2 border border-[color:var(--rule2)] text-[color:var(--acci)] hover:bg-[color:var(--acc-soft)] font-body text-sm font-medium px-6 py-3 rounded-full transition-colors";
const bodyText = "font-body text-base leading-relaxed text-[color:var(--ink2)]";
const cardCls = "rounded-2xl border border-[color:var(--rule)] bg-[color:var(--surf)]";
const monoLabel = "font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--ink3)]";

const detections = [
  { t: "09:41:07", id: "T1110", what: "Repeated failed logins on VPN gateway", sev: "High", ctl: "Access monitoring" },
  { t: "09:40:52", id: "T1078", what: "Valid account used outside working hours", sev: "Medium", ctl: "Privileged access" },
  { t: "09:39:15", id: "T1021", what: "Remote service session between servers", sev: "High", ctl: "Lateral movement" },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Inside your boundary",
    body: "Runs on your infrastructure, including disconnected and classified networks. Rule and vulnerability updates arrive on controlled media you approve.",
    tag: "Air-gap capable",
  },
  {
    icon: FileCheck2,
    title: "Regulator-mapped evidence",
    body: "We map the logs you already collect from servers, firewalls and switches to the controls of PISF 2026, SBP Cyber Shield and PTA CTDISR, and show the gaps before an audit does.",
    tag: "Evidence and gap reports",
  },
  {
    icon: KeyRound,
    title: "Built to be owned",
    body: "Technology transfer of source, build pipeline, runbooks and engineer training is available on request, subject to licence review, so your team can run and extend the platform without us.",
    tag: "No lock-in",
  },
  {
    icon: Database,
    title: "Open storage",
    body: "Your data sits in an open store you control: OpenSearch by default, with other stores scoped to your retention and budget.",
    tag: "Open data",
  },
  {
    icon: BellRing,
    title: "Alerts where your team looks",
    body: "Your own reports and alert rules, routed to syslog, email or your ticketing system inside the boundary. Civil deployments can add phone calls or WhatsApp over a connection you approve.",
    tag: "In-boundary · syslog · ticketing",
  },
];

const fanout = [
  { name: "PISF 2026", duty: "SIEM operation and audit under the PKCERT SOC structure" },
  { name: "SBP Cyber Shield", duty: "Monitoring coverage for the maturity assessment" },
  { name: "PTA CTDISR 2025", duty: "Custom use case; real-time critical alert to the national telecom SOC" },
  { name: "NCA ECC · next", duty: "2-12-3: continuous monitoring of event logs", next: true },
];

const sources = ["Servers and endpoints", "Firewalls and routers", "Switches and legacy appliances", "Applications and directories"];
const coreCells = [
  ["Collect", "agents, syslog, NetFlow"],
  ["Detect", "open rules, MITRE ATT&CK"],
  ["Map", "events to regulator controls"],
  ["Prove", "evidence and gap reports"],
];
const interfaces = ["Dashboards and reports", "API and MCP gateway", "Alert dispatch"];

const archPoints = [
  {
    t: "Agents and agentless.",
    d: "Lightweight agents on high-value servers and endpoints; firewalls, routers and legacy appliances over syslog, SSH and NetFlow.",
  },
  {
    t: "Every alert mapped to MITRE ATT&CK.",
    d: "Analysts see the tactic and technique behind each detection, not a vendor score.",
  },
  {
    t: "Open API and MCP.",
    d: "Your analysts query telemetry through open APIs, or through MCP with language models you host.",
  },
  {
    t: "No licence call-home.",
    d: "The platform never contacts an outside server to check seats or licences, so it keeps running if the link, or the vendor, disappears.",
  },
  {
    t: "A proven open-source core.",
    d: "Built on an established open-source security platform, extended with regulator mapping, reporting and alerting.",
  },
];

const transfer = [
  ["Source code and build pipeline", "The full repository and the scripts that package and deploy it."],
  ["Deployment and operating runbooks", "Architecture blueprints, upgrade steps and incident procedures."],
  ["Engineer training", "Hands-on handover to your security operations and engineering staff."],
  ["Independence", "The platform keeps running without renewal fees or vendor access."],
];

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-body text-sm font-semibold uppercase tracking-widest text-[color:var(--acc)] mb-4">
    {children}
  </p>
);

const Section = ({
  id,
  eyebrow,
  title,
  tone,
  bg,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  tone: Tone;
  bg?: string;
  children: ReactNode;
}) => (
  <section id={id} style={tones[tone]} className={`scroll-mt-24 py-16 lg:py-20 ${bg ?? toneBg[tone]}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6"
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[color:var(--ink)] mb-6 max-w-3xl">
        {title}
      </h2>
      {children}
    </motion.div>
  </section>
);

const ConsoleCard = () => (
  <figure
    aria-label="Illustrative console: an isolated enclave with no outbound path, 12 months of logs retained in the boundary, three live detections each mapped to a MITRE ATT&CK technique and a control, and two silent log sources flagged as an evidence gap."
    className="relative rounded-2xl border border-[color:var(--rule2)] bg-gradient-to-b from-[#221811] to-[#1B130D] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(217,122,61,0.12)] overflow-hidden"
  >
    <div className="flex items-center justify-between gap-3 border-b border-[color:var(--rule)] px-5 py-3">
      <p className="font-heading text-sm font-bold text-[color:var(--ink)]">Nigehbaan Systems · Console</p>
      <span className="rounded-full border border-[color:var(--rule2)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--ink3)]">
        Illustrative
      </span>
    </div>

    <div className="grid grid-cols-3 gap-px bg-[color:var(--rule)] border-b border-[color:var(--rule)]" aria-hidden="true">
      {[
        ["Boundary", "Enclave A", true],
        ["Outbound", "None", true],
        ["Retention", "12 months", false],
      ].map(([k, v, live]) => (
        <div key={k as string} className="bg-[#1E150F] px-3 sm:px-4 py-3">
          <p className={monoLabel}>{k}</p>
          <p className="mt-1 flex items-center gap-2 whitespace-nowrap font-heading text-sm font-bold text-[color:var(--ink)]">
            {live && <span className="h-2 w-2 rounded-full bg-[color:var(--held)] shadow-[0_0_8px_#79B694]" />}
            {v}
          </p>
        </div>
      ))}
    </div>

    <div className="px-5 pt-4 pb-2" aria-hidden="true">
      <p className={`${monoLabel} mb-2 flex items-center gap-2`}>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8996A] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8996A]" />
        </span>
        Live detections
      </p>
      <ul className="divide-y divide-[color:var(--rule)]">
        {detections.map((d) => (
          <li key={d.id} className="grid grid-cols-[auto_1fr_auto] items-start gap-x-3 py-2.5">
            <span className="font-mono text-[11px] text-[color:var(--ink3)] pt-0.5">{d.t}</span>
            <div className="min-w-0">
              <p className="font-body text-[13px] leading-snug text-[color:var(--ink)]">{d.what}</p>
              <p className="mt-0.5 font-mono text-[11px] text-[color:var(--acci)]">
                {d.id} → {d.ctl}
              </p>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 font-body text-[11px] font-semibold ${
                d.sev === "High"
                  ? "bg-[color:var(--open-soft)] text-[color:var(--open)]"
                  : "bg-[color:var(--acc-soft)] text-[color:var(--acci)]"
              }`}
            >
              {d.sev}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mx-5 mb-5 mt-2 rounded-xl border border-dashed border-[color:var(--open)] bg-[color:var(--open-soft)] px-4 py-3" aria-hidden="true">
      <p className={monoLabel}>Evidence · centralised logging</p>
      <p className="mt-1 font-body text-[13px] text-[color:var(--ink)]">
        42 of 44 sources reporting. <span className="text-[color:var(--open)] font-semibold">Gap: 2 core switches silent since 3 Oct.</span>
      </p>
    </div>
  </figure>
);

const EventFanout = () => (
  <figure
    aria-label="Illustrative example: one detection, repeated failed logins on the VPN gateway (MITRE ATT&CK T1110), is mapped to the duty it evidences under PISF 2026, SBP Cyber Shield, PTA CTDISR 2025 and, next, NCA ECC."
    className="mt-10 grid items-center lg:grid-cols-[minmax(0,380px)_4rem_minmax(0,1fr)]"
  >
    <div
      style={tones.dark}
      className="rounded-2xl bg-[#171009] p-7 text-[color:var(--ink)] shadow-[0_30px_60px_-24px_rgba(23,16,9,0.55)] ring-1 ring-[#2B1D16]"
    >
      <div className="flex items-center justify-between">
        <p className={monoLabel}>Detection</p>
        <span className="rounded-full bg-[color:var(--acc-soft)] px-2.5 py-0.5 font-body text-xs font-semibold text-[color:var(--acci)]">
          High
        </span>
      </div>
      <p className="mt-4 font-heading text-xl lg:text-[22px] font-bold leading-snug">
        Repeated failed logins on the VPN gateway
      </p>
      <p className="mt-3 font-mono text-[13px] text-[color:var(--acci)]">MITRE ATT&amp;CK T1110 · Brute force</p>
      <p className={`${monoLabel} mt-4`}>Illustrative</p>
    </div>

    <div aria-hidden="true" className="flex justify-center lg:block">
      <span className="block h-10 w-px bg-[#D97A3D] lg:h-px lg:w-full" />
    </div>

    <ul className="flex flex-col gap-3 lg:border-l-2 lg:border-[#D97A3D] lg:rounded-l-2xl lg:py-2 lg:pl-6">
      {fanout.map((f) => (
        <li
          key={f.name}
          className={`grid gap-1 sm:grid-cols-[170px_minmax(0,1fr)] sm:items-center sm:gap-5 rounded-xl px-5 py-4 ${
            f.next
              ? "border border-dashed border-[color:var(--rule2)] bg-[color:var(--surf2)]/40"
              : "bg-[color:var(--surf)] shadow-[0_12px_28px_-18px_rgba(43,29,22,0.35)]"
          }`}
        >
          <span className={`font-heading text-base font-bold ${f.next ? "text-[color:var(--ink3)]" : "text-[color:var(--ink)]"}`}>
            {f.name}
          </span>
          <span className="font-body text-[15px] text-[color:var(--ink2)]">{f.duty}</span>
        </li>
      ))}
    </ul>
  </figure>
);

const BoundaryDiagram = () => (
  <figure
    id="architecture-diagram"
    style={tones.dark}
    className="my-10 rounded-2xl bg-gradient-to-b from-[#1E150F] to-[#221811] p-5 lg:p-10"
    aria-label="Diagram: everything runs inside your boundary. Log sources feed the Nigehbaan core, which collects, detects, maps events to regulator controls and produces evidence. It writes to an open store and serves dashboards, an API and MCP gateway, and alert dispatch. No telemetry and no licence check crosses the boundary."
  >
    <div className="relative rounded-2xl border-2 border-dashed border-[#8A5A3A] p-4 pt-10 lg:p-8 lg:pt-12">
      <p className="absolute -top-3 left-5 bg-[#1E150F] px-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--acci)]">
        Your boundary<span className="hidden sm:inline"> · on-premises, private cloud or air-gapped</span>
      </p>
      <p className="hidden lg:flex absolute top-4 right-6 items-center gap-2 font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.12em] text-[color:var(--held)]">
        <span className="h-2 w-2 rounded-full bg-[color:var(--held)] shadow-[0_0_8px_#79B694]" />
        0 outbound
      </p>

      {/* Interfaces */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {interfaces.map((s) => (
          <div
            key={s}
            className="rounded-xl border border-[color:var(--rule2)] bg-[color:var(--surf2)] px-4 py-3 text-center font-body text-sm font-medium text-[color:var(--ink)]"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-3 gap-3" aria-hidden="true">
        {interfaces.map((s) => (
          <div key={s} className="flex justify-center">
            <span className="h-6 w-px bg-[#E8996A]/60" />
          </div>
        ))}
      </div>

      {/* Core */}
      <div className="mt-3 sm:mt-0 rounded-2xl border-2 border-[color:var(--acc)] bg-[color:var(--acc-soft)] p-5 lg:p-6 shadow-[0_0_40px_rgba(232,153,106,0.22)]">
        <p className="font-heading text-lg lg:text-xl font-bold text-[color:var(--acci)] mb-4">Nigehbaan core</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {coreCells.map(([t, s]) => (
            <div key={t} className="rounded-xl border border-[color:var(--rule2)] bg-[#171009] p-4">
              <p className="font-heading text-sm lg:text-base font-bold text-[color:var(--ink)]">{t}</p>
              <p className="font-body text-xs lg:text-sm text-[color:var(--ink2)] mt-1">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-[color:var(--rule2)] bg-[#171009] px-4 py-3 font-body text-xs lg:text-sm text-[color:var(--ink2)]">
          <span className="font-heading font-bold text-[color:var(--ink)]">Open store</span> · OpenSearch · ClickHouse ·
          PostgreSQL · archive
        </div>
      </div>

      {/* Sources */}
      <div className="hidden lg:grid grid-cols-4 gap-3" aria-hidden="true">
        {sources.map((s) => (
          <div key={s} className="flex justify-center">
            <span className="h-8 w-px bg-[#E8996A]/60" />
          </div>
        ))}
      </div>
      <div className="mt-3 lg:mt-0 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {sources.map((s) => (
          <div
            key={s}
            className="rounded-xl border border-[color:var(--rule)] bg-[color:var(--surf2)] px-3 py-3 lg:py-4 text-center font-body text-sm text-[color:var(--ink)] flex items-center justify-center"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
    <figcaption className="mt-5 text-center font-body text-xs font-semibold uppercase tracking-widest text-[color:var(--ink3)]">
      No telemetry, no licence check and no vendor access crosses the line
    </figcaption>
  </figure>
);

const NigehbaanSystems = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = "Nigehbaan Systems · Sovereign security monitoring | JB Agile";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div style={tones.dark} className="min-h-screen overflow-x-clip bg-[#171009] text-[color:var(--ink)]">
      <Navbar />

      {/* Hero */}
      <div
        className="pt-28 pb-16 lg:pb-24"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 78% 40%, rgba(217,122,61,0.16), rgba(23,16,9,0) 70%), #171009",
        }}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-baseline gap-4 mb-5">
              <p className="font-heading text-base font-bold tracking-wide text-[color:var(--ink)]">
                Nigehbaan Systems
              </p>
              <span
                lang="ur"
                dir="rtl"
                className="font-urdu text-2xl leading-[1.9] text-[color:var(--acc)]"
                title="Nigehbaan: guardian"
              >
                نگہبان
              </span>
            </div>
            <Eyebrow>Sovereign security monitoring and compliance</Eyebrow>
            <h1 className="font-heading text-4xl lg:text-[3.4rem] lg:leading-[1.08] font-extrabold text-[color:var(--ink)] mb-6">
              Indigenous Defence.{" "}
              <span className="text-[color:var(--acc)]">Total Control.</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed text-[color:var(--ink2)] mb-8 max-w-2xl">
              A sovereign security monitoring and compliance platform that runs inside your defended
              boundary, air-gapped or connected. It turns the telemetry you already collect into audit
              evidence, never calls home, and is built to be handed to your team, source code included.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/contact" className={btnPrimary}>
                Request a briefing
              </Link>
              <a href="#architecture" className={btnQuiet}>
                See the architecture
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-[color:var(--ink2)]">
              {["Nothing needs to leave your boundary", "Air-gap capable", "Open rules, open storage"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[color:var(--held)]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ConsoleCard />
          </motion.div>
        </div>
      </div>

      <Section id="capabilities" tone="dark" bg="bg-[#2B1D16]" eyebrow="Capabilities" title="Monitoring you control, evidence your auditor can read.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {capabilities.map((c) => (
            <div key={c.title} className={`${cardCls} p-6 flex flex-col`}>
              <c.icon className="h-7 w-7 text-[color:var(--acc)] mb-4" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="font-heading text-lg font-bold text-[color:var(--ink)] mb-2">{c.title}</h3>
              <p className="font-body text-sm leading-relaxed text-[color:var(--ink2)] flex-1">{c.body}</p>
              <p className="mt-4 self-start rounded-full border border-[color:var(--rule2)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--acci)]">
                {c.tag}
              </p>
            </div>
          ))}
          <div className="flex flex-col justify-center gap-2 p-6">
            <p className={monoLabel}>Coming next</p>
            <p className="font-body text-sm leading-relaxed text-[color:var(--ink2)]">
              Optional AI triage on your own hardware: each alert labelled real, noise or escalate.
              The analyst decides.
            </p>
          </div>
        </div>
      </Section>

      <Section id="regulation" tone="light" eyebrow="Regulatory evidence" title="One event. Evidence for every regulator you answer to.">
        <div className="max-w-3xl">
          <p className={bodyText}>
            Regulators now require a SIEM, a year of logs and evidence that monitoring works. We map
            each event to the control it evidences, so the gap report exists before the auditor
            arrives: which systems evidence a control, and which are silent.
          </p>
        </div>
        <EventFanout />
        <p className="font-body text-sm text-[color:var(--ink3)] mt-10 max-w-3xl">
          Mappings show evidence against controls. They are not a certification: whether you comply
          remains your auditor's judgement.
        </p>
      </Section>

      <Section id="architecture" tone="dark" eyebrow="Architecture" title="Open components, wholly inside your perimeter.">
        <BoundaryDiagram />
        <dl className="grid md:grid-cols-2 gap-x-10 gap-y-5 max-w-5xl">
          {archPoints.map((p) => (
            <div key={p.t} className="border-t border-[color:var(--rule)] pt-4">
              <dt className="font-heading text-base font-bold text-[color:var(--ink)]">{p.t}</dt>
              <dd className="font-body text-sm leading-relaxed text-[color:var(--ink2)] mt-1">{p.d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="ownership" tone="light" eyebrow="Ownership" title="A platform you can inspect, change and own.">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="space-y-4">
            <p className={bodyText}>
              Most SIEM vendors sell a subscription you can never leave. For federal divisions,
              defence establishments and strategic enterprises, technology transfer is available on
              request, subject to licence review: your engineers receive everything needed to run and
              extend the platform themselves.
            </p>
            <p className="font-body text-sm text-[color:var(--ink3)]">
              Transfer scope and terms follow a review of the open-source licences of the core and
              are agreed with each customer in writing.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 gap-4">
            {transfer.map(([t, d], i) => (
              <li key={t} className={`${cardCls} p-5`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--acc)] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-base font-bold text-[color:var(--ink)] mb-1">{t}</h3>
                <p className="font-body text-sm leading-relaxed text-[color:var(--ink2)]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Closing CTA band */}
      <section
        id="next"
        className="scroll-mt-24 py-16 lg:py-24"
        style={{ background: "linear-gradient(115deg,#4A2F1E 0%,#2B1D16 45%,#171009 100%)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[color:var(--ink)] mb-4 max-w-2xl">
            Request a briefing.
          </h2>
          <p className="font-body text-lg leading-relaxed text-[color:var(--ink2)] max-w-xl">
            Our engineers walk your team through the architecture and deployment inside your
            boundary. Held under NDA on request.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
            <Link to="/contact" className={btnPrimary}>
              Request a briefing
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#171009] border-t border-[color:var(--rule)] py-6">
        <div className="container mx-auto px-6">
          <p className="font-body text-xs leading-relaxed text-[color:var(--ink3)] max-w-4xl">
            Console views on this page are illustrative. Detection capabilities come from the
            open-source core and are configured per deployment. Regulator mappings are alignments,
            not certifications.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NigehbaanSystems;
