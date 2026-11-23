'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

// Slow, smooth momentum scrolling + calm scroll-reveal for the corporate edition.
const SEL = [
  '.sec-top', '.center-head', '.t-card', '.a-card', '.acc', '.addon', '.faq-item', '.c-card', '.voice',
  '.meet2-img', '.meet2-grid > div:last-child', '.final-card', '.prose > *', '.toc', '.fx-left', '.stats2-grid > div',
  '.m-hero-grid > *', '.m-glance-grid > *', '.about-grid > *', '.page-head .ph-in > *', '.hs-intro', '.join-cta', '.faq-group h2'
].join(',');

export default function Smooth() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.35, easing: t => 1 - Math.pow(1 - t, 4), smoothWheel: true, wheelMultiplier: .9 });
      const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -110, duration: 1.6 }); }
      }));
    }
    if (reduce) return () => lenis?.destroy();
    const els = [...document.querySelectorAll(SEL)];
    els.forEach(el => {
      const sib = [...el.parentElement.children].filter(c => c.matches(SEL));
      el.style.setProperty('--rd', `${Math.min(sib.indexOf(el), 5) * 110}ms`);
      el.classList.add('rv');
    });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    els.forEach(el => io.observe(el));
    return () => { io.disconnect(); lenis?.destroy(); };
  }, []);
  return null;
}
