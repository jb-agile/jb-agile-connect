const stats = [
  { value: "25", label: "Years" },
  { value: "5", label: "Sectors" },
  { value: "7", label: "Countries" },
];

/**
 * Design-system-v2 preview only. Same as HeroProofCard.tsx,
 * card fill updated from #111113 to Void Black #0A0C14.
 */
const HeroProofCardV2 = () => {
  return (
    <div className="bg-[#0A0C14] border border-white/10 rounded-3xl p-8">
      <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-6">
        Track record
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-4xl font-extrabold text-text-light mb-1">
              {s.value}
            </p>
            <p className="font-body text-xs" style={{ color: "#71717A" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
            Currently building
          </p>
        </div>
        <p className="font-body text-base font-medium text-text-light mb-1">
          Pakistan Land Port Authority
        </p>
        <p className="font-body text-sm" style={{ color: "#71717A" }}>
          Cross-agency cargo monitoring &amp; reconciliation platform
        </p>
      </div>
    </div>
  );
};

export default HeroProofCardV2;
