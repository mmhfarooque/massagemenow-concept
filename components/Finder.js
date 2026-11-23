'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BOOK_URL, massages } from '../lib/data';
import Icon from './Icon';

const needs = [
  { id: 'relax', label: 'Switch off and relax', icon: 'leaf', img: '/img/c/istock-000016466843xxlarge.webp', pick: ['airlie-beach-full-body-massage', 'airlie-beach-hot-stone-massage'], why: 'Head-to-toe relaxation with real time spent on the scalp and feet. The one to book when you just want to melt.' },
  { id: 'pain', label: 'Fix a sore back or neck', icon: 'target', img: '/img/c/relax.webp', pick: ['airlie-beach-remedial-massage', 'airlie-beach-deep-tissue-massage'], why: 'Targeted work on the exact spots that hurt: lower back, neck, sciatica and tension headaches.' },
  { id: 'sail', label: 'Recover after sailing or sport', icon: 'boat', img: '/img/c/img-0560.webp', pick: ['airlie-beach-deep-tissue-massage', 'airlie-beach-remedial-massage'], why: 'Firm, deep pressure to release the shoulders, hips and lower back after days on deck or on the trail.' },
  { id: 'two', label: 'A treat for two', icon: 'heart', img: '/img/c/couple-1.webp', pick: ['airlie-beach-couples-massage', 'airlie-beach-full-body-massage'], why: 'Two therapists, side by side, wherever you are staying. Honeymoons, anniversaries, birthdays and hens.' },
  { id: 'calm', label: 'Calm a busy mind', icon: 'moon', img: '/img/c/tq-image-2-hr.webp', pick: ['airlie-beach-reiki-massage', 'airlie-beach-hot-stone-massage'], why: 'Gentle, quiet treatments for stress, poor sleep and a mind that will not switch off.' },
];

export default function Finder() {
  const [sel, setSel] = useState(null);
  const [layers, setLayers] = useState([{ k: 0, img: '/img/c/hot-stones-massage-airlie-beach.webp', x: 50, y: 50 }]);
  const sec = useRef(null);
  const res = useRef(null);
  const n = needs.find(x => x.id === sel);
  const [main, alt] = n ? n.pick.map(s => massages.find(m => m.slug === s)) : [];

  const choose = (x, e) => {
    if (x.id === sel) return;
    const r = sec.current.getBoundingClientRect();
    const b = e.currentTarget.getBoundingClientRect();
    const cx = e.clientX || b.left + b.width / 2, cy = e.clientY || b.top + b.height / 2;
    const px = ((cx - r.left) / r.width) * 100, py = ((cy - r.top) / r.height) * 100;
    setLayers(l => [...l.slice(-1), { k: (l[l.length - 1]?.k || 0) + 1, img: x.img, x: px, y: py }]);
    setSel(x.id);
    if (window.innerWidth < 900) setTimeout(() => res.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 250);
  };

  return (
    <section className="fx" id="find" ref={sec}>
      <div className="fx-bg" aria-hidden="true">
        {layers.map((l, i) => (
          <div key={l.k} className={`fx-layer ${i === layers.length - 1 && l.k > 0 ? 'in' : ''}`} style={{ '--x': `${l.x}%`, '--y': `${l.y}%` }}>
            <img src={l.img} alt="" width="1600" height="1000" />
          </div>
        ))}
        <div className="fx-shade" />
      </div>

      <div className="wrap fx-grid">
        <div className="fx-left">
          <p className="eyebrow light">Massage finder</p>
          <h2>What does your body <em>need today?</em></h2>
          <div className="fx-opts" role="radiogroup" aria-label="Choose what you need">
            {needs.map((x, i) => (
              <button key={x.id} role="radio" aria-checked={sel === x.id} className={`fx-opt ${sel === x.id ? 'on' : ''}`} onClick={e => choose(x, e)}>
                <span className="fx-num">0{i + 1}</span>
                <span className="fx-label">{x.label}</span>
                <span className="fx-ico"><Icon name={x.icon} size={22} /></span>
              </button>
            ))}
          </div>
        </div>

        <div className="fx-right" aria-live="polite" ref={res}>
          {!n && (
            <div className="fx-idle">
              <span className="fx-pulse" />
              <p>Choose what you need.<br />Your match appears here.</p>
            </div>
          )}
          {n && (
            <div className="fx-card" key={n.id}>
              <p className="fx-tag"><Icon name="star" size={14} /> Your match</p>
              <h3 className="fx-title">{main.name.split(' ').map((w, i) => <span key={i}><span className="w" style={{ '--d': i }}>{w}</span>{' '}</span>)}</h3>
              <p className="fx-why">{n.why}</p>
              <ul className="fx-chips">{main.goodFor.map(g => <li key={g}>{g}</li>)}</ul>
              <div className="actions">
                <a className="btn btn-gold btn-arrow" href={BOOK_URL}>Book this massage <span><Icon name="arrow" size={18} /></span></a>
                <Link className="btn btn-ghost" href={`/massage/${main.slug}/`}>Learn more</Link>
              </div>
              <p className="fx-alt">Also great for you: <Link href={`/massage/${alt.slug}/`}>{alt.name}</Link></p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
