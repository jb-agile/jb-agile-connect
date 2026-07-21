import { motion } from "framer-motion";

interface WorkflowDiagramProps {
  inView: boolean;
}

const nodes = [
  { x: 60, y: 30 },
  { x: 220, y: 120 },
  { x: 70, y: 230 },
  { x: 230, y: 340 },
  { x: 80, y: 450 },
  { x: 220, y: 560 },
];

const path = nodes
  .map((n, i) => `${i === 0 ? "M" : "L"} ${n.x} ${n.y}`)
  .join(" ");

const WorkflowDiagram = ({ inView }: WorkflowDiagramProps) => {
  return (
    <svg
      viewBox="0 0 300 620"
      fill="none"
      className="w-full h-auto max-w-[320px]"
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke="hsl(var(--accent))"
        strokeOpacity={0.35}
        strokeWidth={1.5}
        strokeDasharray="2 6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      {nodes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.22 }}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={22}
            fill="hsl(var(--bg-dark))"
            stroke="hsl(var(--accent))"
            strokeOpacity={i === 0 || i === nodes.length - 1 ? 1 : 0.5}
            strokeWidth={1.5}
          />
          <circle cx={n.x} cy={n.y} r={4} fill="hsl(var(--accent))" fillOpacity={0.8} />
        </motion.g>
      ))}
    </svg>
  );
};

export default WorkflowDiagram;
