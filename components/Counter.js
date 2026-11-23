'use client';
import { useEffect, useRef, useState } from 'react';
export default function Counter({ to, suffix = '', decimals = 0 }) {
  const ref = useRef(null); const [v, setV] = useState(to);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setV(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now(), d = 1400;
      const tick = now => { const k = Math.min((now - t0) / d, 1); setV(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: .5 });
    io.observe(ref.current); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}
