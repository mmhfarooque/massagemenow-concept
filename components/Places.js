'use client';
import { useState } from 'react';
import { stays } from '../lib/data';
export default function Places() {
  const [i, setI] = useState(0);
  return (
    <div className="pl">
      <ol className="pl-list">
        {stays.map((s, k) => (
          <li key={s.title}>
            <button className={k === i ? 'on' : ''} onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)}>
              <span className="pl-n">{String(k + 1).padStart(2, '0')}</span>{s.title}
            </button>
          </li>
        ))}
      </ol>
      <div className="pl-view" aria-live="polite">
        {stays.map((s, k) => <img key={s.img} src={s.img} alt="" className={k === i ? 'on' : ''} width="900" height="1100" loading="lazy" />)}
        <p className="pl-cap">{stays[i].text}</p>
      </div>
    </div>
  );
}
