export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(f => (
        <details key={f.q} className="faq-item">
          <summary>{f.q}</summary>
          <div className="faq-a"><p>{f.a}</p></div>
        </details>
      ))}
    </div>
  );
}
