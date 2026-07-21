import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  num: string;
  title: string;
  icon: LucideIcon;
}

interface WorkflowDiagramProps {
  inView: boolean;
  steps: Step[];
}

// Positions as % of the container, one per step, in a loose zigzag.
const positions = [
  { x: 22, y: 4 },
  { x: 74, y: 19 },
  { x: 24, y: 37 },
  { x: 76, y: 55 },
  { x: 27, y: 73 },
  { x: 74, y: 90 },
];

const WorkflowDiagram = ({ inView, steps }: WorkflowDiagramProps) => {
  const nodes = steps.slice(0, positions.length).map((step, i) => ({
    ...step,
    ...positions[i],
  }));

  const path = nodes
    .map((n, i) => `${i === 0 ? "M" : "L"} ${n.x} ${n.y}`)
    .join(" ");

  return (
    <div className="relative w-full max-w-[320px] aspect-[300/620]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <motion.path
          d={path}
          vectorEffect="non-scaling-stroke"
          stroke="hsl(var(--accent))"
          strokeOpacity={0.35}
          strokeWidth={1.5}
          strokeDasharray="2 5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>

      {nodes.map((n, i) => {
        const Icon = n.icon;
        const isEndpoint = i === 0 || i === nodes.length - 1;
        return (
          <motion.div
            key={n.num}
            className="absolute flex flex-col items-center gap-2"
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.22 }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-dark border"
              style={{
                borderColor: isEndpoint ? "hsl(var(--accent))" : "hsl(var(--accent) / 0.4)",
                borderWidth: 1.5,
              }}
            >
              <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
            </div>
            <span className="font-body text-xs text-text-light/50 text-center leading-snug w-24">
              {n.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkflowDiagram;
