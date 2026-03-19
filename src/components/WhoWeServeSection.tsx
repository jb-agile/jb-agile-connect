import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Settings, Code } from "lucide-react";

const personas = [
  {
    icon: Target,
    title: "CEOs & Founders",
    body: "You have a clear vision for where your organization needs to go but need a trusted partner to design and execute the path — without disrupting what's already working.",
  },
  {
    icon: Settings,
    title: "COOs & Heads of Operations",
    body: "You know where processes break down, where your teams are spending time they shouldn't be, and where the organization is leaving value on the table. You come to us ready to fix it.",
  },
  {
    icon: Code,
    title: "CTOs & Heads of Engineering",
    body: "You're evaluating or already deploying AI and want to make sure it's embedded thoughtfully — not bolted on as an afterthought. You want AI that works with your teams, not around them.",
  },
];

const signs = [
  "You have a specific business problem that off-the-shelf tools can't solve properly",
  "Your team is spending too much time on manual work that a custom solution could eliminate",
  "You've tried generic AI tools but they don't fit your workflows or data",
  "You need a solution built around your specific context — not a platform you have to adapt to",
  "You want technology that your team can own, maintain, and evolve over time",
];

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-we-serve" className="bg-surface-light py-24 lg:py-32">
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
            Built for organizations with a problem worth solving properly
          </h2>
          <p className="font-body text-lg max-w-[700px] mx-auto leading-relaxed" style={{ color: "#52525B" }}>
            We work with organizations that have a specific problem off-the-shelf tools won't
            solve. Our methodology is industry-agnostic — but we have deep experience with
            technology companies, SaaS platforms, and digital-first organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border-light rounded-2xl p-8 shadow-sm"
            >
              <p.icon className="w-8 h-8 text-accent mb-5" />
              <h3 className="font-heading text-lg font-bold text-text-dark mb-3">{p.title}</h3>
              <p className="font-body text-base leading-relaxed text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Signs you're ready */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-secondary rounded-2xl p-10"
        >
          <h3 className="font-heading text-2xl font-bold text-text-dark mb-6">
            Signs you might be ready
          </h3>
          <div className="space-y-4">
            {signs.map((sign, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-accent mt-1.5 text-sm">—</span>
                <p className="font-body text-base text-muted-foreground leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
