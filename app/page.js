import Link from 'next/link';
import Stars from '../components/Stars';
import Faq from '../components/Faq';
import Icon from '../components/Icon';
import Finder from '../components/Finder';
import Marquee from '../components/Marquee';
import HScroll from '../components/HScroll';
import Counter from '../components/Counter';
import ReviewRiver from '../components/ReviewRiver';
import Wave from '../components/Wave';
import HeroWater from '../components/HeroWater';
import ScrollVars from '../components/ScrollVars';
import { BOOK_URL, PHONE, PHONE_LABEL, EMAIL, ADDRESS, AREAS, massages, reviews, stays, steps, addons } from '../lib/data';
import content from '../lib/content.json';

const river = reviews.filter(r => r.text.length > 60);
const hero = reviews.find(r => r.name === 'My Herd');

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero2">
        <img className="hero-bg" src="/img/hero.webp" alt="" width="2000" height="1500" fetchPriority="high" />
        <HeroWater src="/img/hero.webp" />
        <div className="hero2-shade" />
        <p className="water-hint" aria-hidden="true">Move across the water</p>
        <div className="wrap hero2-grid">
          <div className="hero2-copy">
            <p className="pill"><span className="dot" />Mobile massage · Airlie Beach &amp; the Whitsundays</p>
            <h1 className="reveal-h">{['Massage,', 'delivered'].map((w, i) => <span key={w}><span className="w" style={{ '--d': i }}>{w}</span>{' '}</span>)}<em>{['to', 'your', 'door'].map((w, i) => <span key={w}><span className="w" style={{ '--d': i + 2 }}>{w}</span>{' '}</span>)}</em></h1>
            <p className="hero-sub">Your hotel, Airbnb, home, yacht or island villa. Chris and his team bring the table, linen and oils, seven days a week.</p>
            <div className="actions">
              <a className="btn btn-gold btn-arrow" href={BOOK_URL}>Book your massage <span><Icon name="arrow" size={18} /></span></a>
              <a className="btn btn-ghost" href={`tel:${PHONE}`}><Icon name="phone" size={18} /> {PHONE_LABEL}</a>
            </div>
            <div className="hero-proof">
              <div className="badge">
                <span className="g" aria-hidden="true">G</span>
                <span><strong>5.0</strong> <span className="stars-inline"><Stars /></span><br /><small>Google rating</small></span>
              </div>
              <div className="hero-years"><strong>17</strong><span>years in<br />Airlie Beach</span></div>
            </div>
          </div>
          <aside className="glass">
            <p className="glass-h">Book in about a minute</p>
            <ul className="glass-list">
              {massages.slice(0, 6).map(m => (
                <li key={m.slug}><Link href={`/massage/${m.slug}/`}><img src={m.img} alt="" width="56" height="56" /><span>{m.name}</span><Icon name="arrow" size={16} /></Link></li>
              ))}
            </ul>
            <a className="btn btn-gold glass-btn" href={BOOK_URL}>Choose a time</a>
            <p className="glass-q">“{hero.text.slice(0, 118)}…”<br /><span>{hero.name}, on a boat at the marina</span></p>
          </aside>
        </div>
      </section>
      <Marquee />
      <ScrollVars />

      {/* FINDER */}
      <Finder />

      {/* MASSAGES */}
      <section id="massages" className="treatments">
        <div className="wrap">
          <div className="sec-top">
            <div><p className="eyebrow">Our massages</p><h2>Seven treatments, <em>all mobile</em></h2></div>
            <p>Every massage comes to you with all equipment supplied. Also available on request: sports, pregnancy and fertility, post-surgery and weight loss massage.</p>
          </div>
          <div className="accord">
            {massages.map((m, i) => (
              <Link key={m.slug} href={`/massage/${m.slug}/`} className="acc" style={{ '--i': i }}>
                <img src={m.img} alt="" width="900" height="700" loading="lazy" />
                <span className="acc-n">0{i + 1}</span>
                <span className="acc-v">{m.name}</span>
                <span className="acc-body">
                  <span className="acc-h">{m.name}</span>
                  <span className="acc-p">{m.short}</span>
                  <span className="acc-go">Explore <Icon name="arrow" size={16} /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ZOOM-THROUGH */}
      <section className="zoom" data-sp="pin">
        <div className="zoom-stick">
          <div className="zoom-frame"><img src="/img/sunset.webp" alt="" width="1600" height="1067" loading="lazy" /></div>
          <div className="zoom-copy">
            <p>Wherever the Whitsundays take you,</p>
            <h2>we bring the <em>calm</em>.</h2>
          </div>
        </div>
      </section>

      {/* WHEREVER YOU STAY — pinned horizontal scroll */}
      <Wave top="#fff" bottom="#023e58" />
      <section className="stays">
        <HScroll>
          <div className="hs-intro">
            <p className="eyebrow light">Wherever you stay</p>
            <h2>We come <em>to you</em></h2>
            <p>Professional treatments across Airlie Beach, Cannonvale, Proserpine and the Whitsunday Islands. Keep scrolling.</p>
            <a className="btn btn-gold btn-arrow" href={BOOK_URL}>Book where you are <span><Icon name="arrow" size={18} /></span></a>
          </div>
          {stays.map((s, i) => (
            <article key={s.title} className="stay">
              <img src={s.img} alt="" width="800" height="1000" loading="lazy" />
              <div className="stay-body">
                <span className="stay-tag"><Icon name={s.icon} size={16} /> {s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <span className="stay-n">0{i + 1}</span>
            </article>
          ))}
        </HScroll>
      </section>

      {/* STATS */}
      <section className="stats2">
        <div className="wrap stats2-grid">
          <div><strong><Counter to={17} /></strong><span>years in Airlie Beach</span></div>
          <div><strong><Counter to={5} decimals={1} /></strong><span>Google star rating</span></div>
          <div><strong><Counter to={7} /></strong><span>days a week</span></div>
          <div><strong><Counter to={7} /></strong><span>signature massages</span></div>
        </div>
      </section>
      <Wave top="#023e58" bottom="#fff" flip />

      {/* HOW IT WORKS: 3D stacking image cards */}
      <section className="how3">
        <div className="wrap">
          <div className="sec-top">
            <div><p className="eyebrow">Easy booking</p><h2>Four steps to <em>total calm</em></h2></div>
            <p>From choosing your massage to lying back and relaxing. Most people are booked in about a minute.</p>
          </div>
          <div className="stack">
            {steps.map((s, i) => (
              <article key={s.title} className="scard" data-sp="stack" style={{ '--i': i }}>
                <div className="scard-in">
                  <div className="scard-img"><img src={s.img} alt="" width="900" height="700" loading="lazy" /></div>
                  <div className="scard-txt">
                    <span className="scard-num">0{i + 1}</span>
                    <span className="step-ico"><Icon name={s.icon} size={26} /></span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    {i === steps.length - 1
                      ? <a className="btn btn-gold btn-arrow" href={BOOK_URL}>Book your massage <span><Icon name="arrow" size={18} /></span></a>
                      : <span className="scard-next">Next: {steps[i + 1].title}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="addons">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow">Make it more</p>
            <h2>Add-ons for a <em>deeper reset</em></h2>
            <p>Complimentary with Hamilton &amp; Hayman Island packages. Ask Chris to add them to any booking.</p>
          </div>
          <div className="addon-grid">
            {addons.map(a => (
              <article key={a.title} className="addon">
                <span className="addon-ico"><Icon name={a.icon} size={30} /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <a className="text-link" href={`tel:${PHONE}`}>Ask Chris to add this</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEET CHRIS */}
      <section className="meet2">
        <div className="wrap meet2-grid">
          <div className="meet2-img">
            <img src="/img/chris.webp" alt="Chris Pannan at work" width="600" height="840" loading="lazy" />
            <div className="meet2-card"><strong>Chris Pannan</strong><span>Founder · Remedial sports practitioner</span></div>
          </div>
          <div>
            <p className="eyebrow">About us</p>
            <h2>Close to 17 years of <em>Airlie Beach</em> massage</h2>
            <p>Massage Me Now was founded by Chris Pannan, who began his massage career in Airlie Beach and built the business around one idea: the massage should come to you.</p>
            <p>From hotels and Airbnbs to island resorts and the luxury boating community, Chris and his team work seven days and nights a week, with a wide range of styles and strengths so every client finds the right match.</p>
            <ul className="ticks two">
              <li>Qualified remedial sports practitioner</li>
              <li>Choose your therapist when you book</li>
              <li>No referral needed</li>
              <li>All equipment supplied</li>
            </ul>
            <div className="actions"><Link href="/about-us/" className="btn btn-ocean">Our story</Link><Link href="/join-the-team/" className="btn btn-line-dark">Join the team</Link></div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="testis">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow">Client reviews</p>
            <h2>Loved by <em>our clients</em></h2>
            <p><Stars /> 5.0 from {reviews.length} Google reviews</p>
          </div>
        </div>
        <ReviewRiver items={river} />
        <div className="wrap">
          <p className="center"><Link className="btn btn-ocean" href="/our-reviews/">Read all {reviews.length} reviews</Link></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow">FAQ</p>
            <h2>Frequently asked <em>questions</em></h2>
          </div>
          <div className="faq-2col">
            <Faq items={content.home.faqs.slice(0, 5)} />
            <Faq items={content.home.faqs.slice(5, 10)} />
          </div>
          <p className="center"><Link className="btn btn-line-dark" href="/frequently-asked-questions/">All 35 questions</Link></p>
        </div>
      </section>

      {/* ARTICLES + GUIDE */}
      <section className="art-sec">
        <div className="wrap">
          <div className="sec-top">
            <div><p className="eyebrow">Guides &amp; articles</p><h2>Massage tips for <em>the Whitsundays</em></h2></div>
            <p>Recovery after sailing, choosing the right massage, and how in-room massage works. <Link className="text-link" href="/mobile-massage-guide/">Read our complete guide</Link>.</p>
          </div>
          <div className="a-grid">
            {content.articles.slice(0, 3).map(a => (
              <Link key={a.slug} href={`/article/${a.slug}/`} className="a-card">
                <div className="t-img"><img src={a.img} alt="" width="600" height="400" loading="lazy" /></div>
                <div className="t-body"><h3>{a.title}</h3><p>{a.desc}</p><span className="t-more">Read article</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <div className="wrap">
          <div className="final-card">
            <div className="final-copy">
              <p className="eyebrow light">Book today</p>
              <h2>Ready to relax? <em>We are on our way.</em></h2>
              <p>Why save the relaxing for the last day of your trip? Book a massage at your accommodation today, or call Chris for same-day availability.</p>
              <ul className="chips">{AREAS.map(a => <li key={a}>{a}</li>)}</ul>
              <div className="actions">
                <a className="btn btn-gold btn-arrow" href={BOOK_URL}>Book your massage <span><Icon name="arrow" size={18} /></span></a>
                <a className="btn btn-ghost" href={`tel:${PHONE}`}><Icon name="phone" size={18} /> {PHONE_LABEL}</a>
              </div>
              <p className="final-contact"><Icon name="pin" size={16} /> {ADDRESS} &nbsp;·&nbsp; <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
            <div className="final-img"><img src="/img/c/couple-1.webp" alt="Couples massage by the water in the Whitsundays" width="800" height="900" loading="lazy" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
