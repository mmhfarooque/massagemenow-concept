'use client';
import { useEffect, useRef } from 'react';

// Pinned horizontal scroll: vertical scroll drives the track sideways (desktop).
export default function HScroll({ children }) {
  const outer = useRef(null), track = useRef(null);
  useEffect(() => {
    const o = outer.current, t = track.current;
    const mq = window.matchMedia('(min-width: 861px) and (prefers-reduced-motion: no-preference)');
    let raf = 0;
    const size = () => {
      if (!mq.matches) { o.style.height = ''; t.style.transform = ''; return; }
      const dist = t.scrollWidth - window.innerWidth + 80;
      o.style.height = `${o.firstChild.offsetHeight + Math.max(dist, 0)}px`;
      update();
    };
    const update = () => {
      if (!mq.matches) return;
      const r = o.getBoundingClientRect();
      const dist = t.scrollWidth - window.innerWidth + 80;
      const p = Math.min(Math.max((106 - r.top) / (o.offsetHeight - o.firstChild.offsetHeight), 0), 1);
      t.style.transform = `translate3d(${-p * dist}px,0,0)`;
      o.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    size();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', size);
    mq.addEventListener('change', size);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', size); mq.removeEventListener('change', size); };
  }, []);
  return (
    <div className="hs-outer" ref={outer}>
      <div className="hs-sticky">
        <div className="hs-track" ref={track}>{children}</div>
        <div className="hs-bar"><span /></div>
      </div>
    </div>
  );
}
