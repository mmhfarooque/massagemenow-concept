'use client';
import { useEffect, useRef } from 'react';

// "Touch the dark": the photo sits in shadow; a warm pool of light follows the pointer
// slowly (lerped), and drifts on its own when untouched.
export default function Spotlight({ src, alt = '', radius = 260, className = '', children }) {
  const el = useRef(null);
  useEffect(() => {
    const node = el.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tx = .62, ty = .45, x = tx, y = ty, last = 0, raf = 0, vis = true, t0 = performance.now();
    const move = e => { const r = node.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height; last = performance.now(); };
    const tick = now => {
      if (now - last > 2600) { const k = (now - t0) / 9000; tx = .5 + Math.sin(k * 2.1) * .28; ty = .48 + Math.sin(k * 1.3 + 1) * .2; }
      const f = reduce ? 1 : .045; x += (tx - x) * f; y += (ty - y) * f;
      node.style.setProperty('--mx', `${(x * 100).toFixed(2)}%`); node.style.setProperty('--my', `${(y * 100).toFixed(2)}%`);
      if (vis) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis) { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); } });
    io.observe(node);
    node.addEventListener('pointermove', move, { passive: true });
    node.addEventListener('pointerdown', move, { passive: true });
    return () => { io.disconnect(); cancelAnimationFrame(raf); node.removeEventListener('pointermove', move); node.removeEventListener('pointerdown', move); };
  }, []);
  return (
    <div ref={el} className={`spot ${className}`} style={{ '--rad': `${radius}px` }}>
      <img className="spot-dim" src={src} alt={alt} width="1600" height="1100" />
      <img className="spot-lit" src={src} alt="" aria-hidden="true" width="1600" height="1100" />
      {children}
    </div>
  );
}
