'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BOOK_URL, massages } from '../lib/data';

const needs = [
  { id: 'relax', label: 'Switch off and relax', icon: '🌴', pick: ['airlie-beach-full-body-massage', 'airlie-beach-hot-stone-massage'], why: 'Head-to-toe relaxation, with extra time on the scalp and feet.' },
  { id: 'pain', label: 'Fix a sore back or neck', icon: '🎯', pick: ['airlie-beach-remedial-massage', 'airlie-beach-deep-tissue-massage'], why: 'Targeted work on the exact spots that hurt: back, neck, sciatica, headaches.' },
  { id: 'sail', label: 'Recover after sailing or sport', icon: '⛵', pick: ['airlie-beach-deep-tissue-massage', 'airlie-beach-remedial-massage'], why: 'Firm pressure to release tight shoulders, hips and lower back after time on the water.' },
  { id: 'two', label: 'A treat for two', icon: '💞', pick: ['airlie-beach-couples-massage', 'airlie-beach-full-body-massage'], why: 'Two therapists, side by side, in your room. Perfect for honeymoons and hens.' },
  { id: 'calm', label: 'Calm a busy mind', icon: '✨', pick: ['airlie-beach-reiki-massage', 'airlie-beach-hot-stone-massage'], why: 'Gentle, quiet treatments for stress, poor sleep and mental fatigue.' },
];

export default function Finder() {
  const [sel, setSel] = useState(null);
  const n = needs.find(x => x.id === sel);
  const [main, alt] = n ? n.pick.map(s => massages.find(m => m.slug === s)) : [];
  return (
    <section className="finder" id="find">
      <div className="wrap finder-in">
        <div className="finder-q">
          <h2>Find <em>your massage</em></h2>
          <p>What would you like your massage to do?</p>
          <div className="finder-opts" role="radiogroup" aria-label="Choose what you need">
            {needs.map(x => (
              <button key={x.id} role="radio" aria-checked={sel === x.id} className={sel === x.id ? 'opt on' : 'opt'} onClick={() => setSel(x.id)}>
                <span aria-hidden="true">{x.icon}</span>{x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="finder-r" aria-live="polite">
          {!n && (
            <div className="finder-empty">
              <img src="/img/c/hot-stones-massage-airlie-beach.webp" alt="" width="700" height="460" loading="lazy" />
              <p>Pick an option and we will suggest the right treatment.</p>
            </div>
          )}
          {n && (
            <div className="finder-card" key={n.id}>
              <img src={main.img} alt="" width="700" height="460" />
              <div className="finder-body">
                <p className="finder-tag">We recommend</p>
                <h3>{main.name}</h3>
                <p>{n.why}</p>
                <div className="actions">
                  <a className="btn btn-gold" href={BOOK_URL}>Book {main.name.toLowerCase()}</a>
                  <Link className="btn btn-line-dark" href={`/massage/${main.slug}/`}>Learn more</Link>
                </div>
                <p className="finder-alt">Also great: <Link className="text-link" href={`/massage/${alt.slug}/`}>{alt.name}</Link></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
