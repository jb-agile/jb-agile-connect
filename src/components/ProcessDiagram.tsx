import { useState } from "react";

const nodes = [
  { label: "Discover", highlighted: false },
  { label: "Design", highlighted: false },
  { label: "Build", highlighted: true },
  { label: "Deploy", highlighted: false },
  { label: "Evolve", highlighted: false },
];

const ProcessDiagram = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="transition-transform duration-300 ease-out"
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: "0 0 80px rgba(99, 102, 241, 0.2)",
      }}
    >
      <div className="bg-[#111113] border border-white/10 rounded-3xl p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <span className="font-body text-xs text-white/40 ml-2">
            Custom Solution — Problem to Delivery
          </span>
        </div>

        {/* Flow diagram */}
        <div className="relative overflow-x-auto">
          <svg width="100%" viewBox="0 0 520 60" className="min-w-[400px]">
            {nodes.map((node, i) => {
              const x = i * 110 + 10;
              const w = 90;
              const h = 36;
              const y = 12;
              return (
                <g key={node.label}>
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    rx={10}
                    fill={node.highlighted ? "#6366F1" : "#1C1C1F"}
                    stroke={node.highlighted ? "#6366F1" : "#3F3F46"}
                    strokeWidth={1}
                  />
                  <text
                    x={x + w / 2}
                    y={y + h / 2 + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-body"
                    fill={node.highlighted ? "#fff" : "#A1A1AA"}
                    fontSize={11}
                  >
                    {node.label}
                  </text>
                  {i < nodes.length - 1 && (
                    <>
                      <line
                        x1={x + w}
                        y1={y + h / 2}
                        x2={x + w + 18}
                        y2={y + h / 2}
                        stroke="#3F3F46"
                        strokeWidth={1.5}
                      />
                      <polygon
                        points={`${x + w + 14},${y + h / 2 - 4} ${x + w + 20},${y + h / 2} ${x + w + 14},${y + h / 2 + 4}`}
                        fill="#3F3F46"
                      />
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Status pills */}
        <div className="flex gap-3 mt-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-body font-medium">
            ✓ Purpose-built for your problem
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-body font-medium">
            ⚡ AI-powered
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProcessDiagram;
