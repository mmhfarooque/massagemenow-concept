'use client';
import { useEffect, useRef, useState } from 'react';
import { BOOK_URL, PHONE, PHONE_LABEL } from '../lib/data';

// Press and hold to relax: a slow 2.2s fill, releases ease back. Keyboard: Enter/Space completes.
export default function HoldToBook() {
  const [p, setP] = useState(0); const [done, setDone] = useState(false);
  const holding = useRef(false), raf = useRef(0), prog = useRef(0);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  const loop = () => {
    prog.current = Math.max(0, Math.min(1, prog.current + (holding.current ? 1 / 132 : -1 / 50)));
    setP(prog.current);
    if (prog.current >= 1) { setDone(true); return; }
    if (holding.current || prog.current > 0) raf.current = requestAnimationFrame(loop);
  };
  const start = () => { if (done) return; holding.current = true; cancelAnimationFrame(raf.current); raf.current = requestAnimationFrame(loop); };
  const stop = () => { holding.current = false; };
  const C = 2 * Math.PI * 92;
  return (
    <div className={`hold ${done ? 'done' : ''}`}>
      {!done ? (
        <button className="hold-btn" onPointerDown={start} onPointerUp={stop} onPointerLeave={stop} onPointerCancel={stop}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); prog.current = 1; setP(1); setDone(true); } }}
          onContextMenu={e => e.preventDefault()} aria-label="Press and hold to relax, then book">
          <svg viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="92" className="hold-track" />
            <circle cx="100" cy="100" r="92" className="hold-fill" style={{ strokeDasharray: C, strokeDashoffset: C * (1 - p) }} />
          </svg>
          <span className="hold-core" style={{ transform: `scale(${1 - p * .12})` }}>
            <span className="hold-t">{p > 0 ? 'Breathe out…' : 'Press & hold'}</span>
            <span className="hold-s">{p > 0 ? `${Math.round(p * 100)}%` : 'to relax'}</span>
          </span>
        </button>
      ) : (
        <div className="hold-open">
          <p className="hold-msg">There. Now let us bring the rest.</p>
          <div className="actions center">
            <a className="btn btn-gold" href={BOOK_URL}>Book your massage</a>
            <a className="btn btn-ghost" href={`tel:${PHONE}`}>Call {PHONE_LABEL}</a>
          </div>
        </div>
      )}
    </div>
  );
}
