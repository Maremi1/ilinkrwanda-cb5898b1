import { useCounter } from "@/hooks/useCounter";

function Stat({ value, suffix, label, decimals = 0 }: { value: number; suffix?: string; label: string; decimals?: number }) {
  const { ref, val } = useCounter(value);
  return (
    <div className="text-center px-2">
      <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
        <span ref={ref}>{val.toFixed(decimals)}</span>
        {suffix}
      </div>
      <div className="mt-1 text-xs md:text-sm text-navy/70 font-medium">{label}</div>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="container -mt-6 md:-mt-10 mb-24 relative z-10">
      <div className="glass-strong rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
        <Stat value={1.8} decimals={1} suffix="M+" label="Households Reached" />
        <Stat value={451} label="FIA Ambassadors" />
        <Stat value={5} suffix="B RWF" label="Capital Mobilized" />
        <Stat value={10} suffix="+ Yrs" label="Sector Expertise" />
      </div>
    </section>
  );
}
