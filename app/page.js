import Link from 'next/link';
import Stars from '../components/Stars';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import { LongForm } from '../components/Rich';
import Finder from '../components/Finder';
import Marquee from '../components/Marquee';
import { BOOK_URL, PHONE, PHONE_LABEL, AREAS, massages, alsoOffered, reviews } from '../lib/data';
import content from '../lib/content.json';

const featured = reviews.filter(r => r.text.length > 140 && r.text.length < 420).slice(0, 8);
const about = content.about.blocks;
const aboutParas = (h) => {
  const i = about.findIndex(b => b.x === h);
  const out = [];
  for (let j = i + 1; j < about.length && about[j].t === 'p'; j++) out.push(about[j].x);
  return out;
};

const why = [
  ['We come to you', 'Hotel, Airbnb, home, island resort or yacht. No driving home afterwards.'],
  ['Everything supplied', 'Professional table, fresh linen and oils. You just need a little floor space.'],
  ['Choose your therapist', 'Book online in a minute, pick your practitioner, style and pressure.'],
  ['Qualified therapists', 'Led by Chris Pannan, a remedial sports practitioner with close to 17 years in Airlie Beach.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src="/img/hero.webp" alt="" width="2000" height="1500" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="wrap hero-in">
          <p className="hero-kicker">Airlie Beach &amp; the Whitsundays</p>
          <h1>Massage, delivered<br /><em>to your door</em></h1>
          <p className="hero-sub">Relax, unwind and enjoy a professional massage in the comfort of your hotel, Airbnb, home or yacht. Seven days a week.</p>
          <div className="actions center">
            <a className="btn btn-gold" href={BOOK_URL}>Book your massage</a>
            <a className="btn btn-ghost" href="#find">Find my massage</a>
          </div>
          <div className="badge">
            <span className="g" aria-hidden="true">G</span>
            <span><strong>5.0</strong> <span className="stars-inline"><Stars /></span><br /><small>{reviews.length} Google reviews</small></span>
            <span className="badge-sep" />
            <span><strong>17 yrs</strong><br /><small>in Airlie Beach</small></span>
          </div>
        </div>
      </section>
      <Marquee />


      <section className="intro">
        <div className="wrap intro-grid">
          <div className="intro-img">
            <img src="/img/sunset.webp" alt="Mobile massage by the pool overlooking the Whitsundays" width="1600" height="1067" loading="lazy" />
          </div>
          <div>
            <h2>Relax without leaving <em>your room</em></h2>
            {content.home.intro.map(p => <p key={p.slice(0, 24)}>{p}</p>)}
            <div className="actions">
              <a className="btn btn-ocean" href={BOOK_URL}>Book online</a>
              <Link className="btn btn-line-dark" href="#massages">View treatments</Link>
            </div>
          </div>
        </div>
      </section>

      <Finder />

      <section id="massages" className="treatments">
        <div className="wrap">
          <div className="center-head">
            <h2>Our <em>massages</em></h2>
            <p>Every treatment is mobile, with all equipment supplied. Also available: {alsoOffered.join(', ').toLowerCase()}.</p>
          </div>
          <div className="t-grid">
            {massages.map(m => (
              <Link key={m.slug} href={`/massage/${m.slug}/`} className="t-card">
                <div className="t-img"><img src={m.img} alt="" width="600" height="420" loading="lazy" /></div>
                <div className="t-body">
                  <h3>{m.name}</h3>
                  <p>{m.short}</p>
                  <span className="t-more">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <div className="center-head light"><h2>Why choose <em>Massage Me Now</em></h2></div>
          <div className="why-grid">
            {why.map(([t, d]) => (
              <div key={t} className="why-item">
                <span className="why-dot" aria-hidden="true" />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="meet">
        <div className="wrap meet-grid">
          <div>
            <h2>About <em>us</em></h2>
            <p>Welcome to Massage Me Now, founded by Chris Pannan, who began his massage career in the stunning coastal town of Airlie Beach close to 17 years ago. Our company has grown out of a passion for excellence and a commitment to delivering exceptional mobile massage service.</p>
            <h3>Our story</h3>
            {aboutParas('Our Story').map(p => <p key={p}>{p}</p>)}
            <h3>Our mission</h3>
            {aboutParas('Our Mission').map(p => <p key={p}>{p}</p>)}
            <Link href="/about-us/" className="btn btn-ocean">More about Chris</Link>
          </div>
          <img src="/img/chris.webp" alt="Chris Pannan at work" width="600" height="840" loading="lazy" />
        </div>
      </section>

      <section className="testis">
        <div className="wrap">
          <div className="center-head">
            <h2>Loved by <em>our clients</em></h2>
            <p><Stars /> 5.0 average from {reviews.length} Google reviews</p>
          </div>
          <div className="t-scroll" tabIndex={0} aria-label="Client reviews, scroll sideways">
            {featured.map(r => (
              <figure key={r.name} className="testi">
                <Stars />
                <blockquote><p>{r.text}</p></blockquote>
                <figcaption>{r.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="center"><Link className="btn btn-ocean" href="/our-reviews/">Read all {reviews.length} reviews</Link></p>
        </div>
      </section>

      <section className="areas">
        <div className="wrap areas-in">
          <h2>Where we <em>come to you</em></h2>
          <ul className="chips">{AREAS.map(a => <li key={a}>{a}</li>)}</ul>
        </div>
      </section>

      <section className="guide">
        <div className="wrap">
          <div className="center-head">
            <h2>Airlie Beach mobile <em>massage services</em></h2>
            <p>Everything you need to know about our treatments, techniques and how mobile massage works.</p>
          </div>
          <LongForm blocks={content.home.long.filter(b => b.x !== 'Airlie Beach Mobile Massage Services')} title="In this guide" />
        </div>
      </section>

      <section className="faq-sec">
        <div className="wrap faq-grid">
          <div>
            <h2>Frequently asked <em>questions</em></h2>
            <p>Quick answers about booking, pressure, preparation and what to expect.</p>
            <Link className="btn btn-ocean" href="/frequently-asked-questions/">See all FAQs</Link>
          </div>
          <Faq items={content.home.faqs} />
        </div>
      </section>

      <section className="art-sec">
        <div className="wrap">
          <div className="center-head"><h2>Latest <em>articles</em></h2></div>
          <div className="a-grid">
            {content.articles.slice(0, 3).map(a => (
              <Link key={a.slug} href={`/article/${a.slug}/`} className="a-card">
                <div className="t-img"><img src={a.img} alt="" width="600" height="400" loading="lazy" /></div>
                <div className="t-body"><h3>{a.title}</h3><p>{a.desc}</p><span className="t-more">Read article</span></div>
              </Link>
            ))}
          </div>
          <p className="center"><Link className="btn btn-line-dark" href="/articles/">All articles</Link></p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
