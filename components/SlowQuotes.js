'use client';
import { useEffect, useState } from 'react';
export default function SlowQuotes({ items }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI(v => (v + 1) % items.length), 7500); return () => clearInterval(t);
  }, [items.length]);
  const r = items[i];
  return (
    <figure className="sq">
      <blockquote key={i}>“{r.text}”</blockquote>
      <figcaption key={`c${i}`}><span>{r.name}</span><span className="sq-n">{String(i + 1).padStart(2, '0')} / {items.length}</span></figcaption>
      <div className="sq-nav">
        <button onClick={() => setI(v => (v - 1 + items.length) % items.length)} aria-label="Previous review">←</button>
        <button onClick={() => setI(v => (v + 1) % items.length)} aria-label="Next review">→</button>
      </div>
    </figure>
  );
}
