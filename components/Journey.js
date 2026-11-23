'use client';
import { useEffect, useRef } from 'react';
// Whole-page sideways journey on desktop: vertical scroll moves a horizontal track.
export default function Journey({ children }) {
  const outer = useRef(null), track = useRef(null);
  useEffect(() => {
    const o = outer.current, t = track.current;
    const mq = window.matchMedia('(min-width: 1001px) and (prefers-reduced-motion: no-preference)');
    let raf = 0;
    const size = () => {
      if (!mq.matches) { o.style.height = ''; t.style.transform = ''; return; }
      const dist = t.scrollWidth - window.innerWidth;
      o.style.height = `${window.innerHeight + Math.max(dist, 0)}px`; update();
    };
    const update = () => {
      if (!mq.matches) return;
      const r = o.getBoundingClientRect(); const dist = t.scrollWidth - window.innerWidth;
      const p = Math.min(Math.max(-r.top / (o.offsetHeight - window.innerHeight), 0), 1);
      t.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`;
      o.style.setProperty('--jp', p.toFixed(4));
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    size(); window.addEventListener('scroll', on, { passive: true }); window.addEventListener('resize', size); mq.addEventListener('change', size);
    const ro = new ResizeObserver(size); ro.observe(t);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', size); mq.removeEventListener('change', size); ro.disconnect(); };
  }, []);
  return (
    <div className="jr-outer" ref={outer}>
      <div className="jr-stick">
        <div className="jr-track" ref={track}>{children}</div>
        <div className="jr-progress" aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}
