'use client';
import { useEffect } from 'react';
// Writes scroll progress (--p, 0..1) onto [data-sp] elements.
// data-sp="stack": p = how much the NEXT sibling card has covered this one.
// data-sp="pin":   p = progress scrolling through this (tall) element.
export default function ScrollVars() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const run = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('[data-sp]').forEach(el => {
        const r = el.getBoundingClientRect(); let p = 0;
        if (el.dataset.sp === 'stack') {
          const n = el.nextElementSibling;
          if (n) { const nr = n.getBoundingClientRect(); p = 1 - Math.min(Math.max((nr.top - r.top) / r.height, 0), 1); }
        } else {
          p = Math.min(Math.max(-r.top / (r.height - vh), 0), 1);
        }
        el.style.setProperty('--p', p.toFixed(3));
      });
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(run); };
    run(); window.addEventListener('scroll', on, { passive: true }); window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return null;
}
