const items = ['Remedial massage', 'Deep tissue', 'Full body', 'Couples massage', 'Hot stone', 'Reiki', 'Sports massage', 'Pregnancy massage', 'Relaxation'];
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{row.map((x, i) => <span key={i}>{x}</span>)}</div>
    </div>
  );
}
