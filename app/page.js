import Link from 'next/link';
import Spotlight from '../components/Spotlight';
import HoldToBook from '../components/HoldToBook';
import Journey from '../components/Journey';
import Places from '../components/Places';
import SlowQuotes from '../components/SlowQuotes';
import { BOOK_URL, PHONE, PHONE_LABEL, EMAIL, massages, reviews } from '../lib/data';
import content from '../lib/content.json';

const quotes = reviews.filter(r => r.text.length > 90 && r.text.length < 360);

export default function Home() {
  return (
    <>
      <Journey>
        {/* 1 — hero: touch the dark */}
        <section className="pn pn-hero">
          <Spotlight src="/img/hero.webp" alt="Chris giving a massage in a villa overlooking the Whitsundays" radius={300}>
            <div className="pn-hero-copy">
              <p className="kick">Massage Me Now · Airlie Beach &amp; the Whitsundays</p>
              <h1><span>Slow</span><span>down.</span></h1>
              <p className="lede3">Mobile massage that comes to you. Hotel, Airbnb, home or yacht. You don’t move.</p>
              <div className="actions"><a className="btn btn-gold" href={BOOK_URL}>Book a massage</a><a className="btn btn-ghost" href={`tel:${PHONE}`}>{PHONE_LABEL}</a></div>
            </div>
            <p className="hint3"><span className="hint-dot" />Move your hand through the dark</p>
            <p className="hint3 hint-r">Scroll to drift →</p>
          </Spotlight>
        </section>

        {/* 2 — manifesto */}
        <section className="pn pn-man">
          <p className="kick">The idea</p>
          <ul className="man">
            <li>You don’t drive.</li>
            <li>You don’t wait.</li>
            <li>You don’t move.</li>
          </ul>
          <p className="man-sub">We bring the table, the linen, the oils and the quiet. Chris Pannan has massaged Airlie Beach for close to seventeen years, seven days and nights a week.</p>
        </section>

        {/* 3 — treatments */}
        <section className="pn pn-mass">
          <div className="pn-mass-head">
            <p className="kick">Seven treatments</p>
            <h2>Choose<br />your <em>pressure</em></h2>
            <Link className="text-link" href="/massage/">All massages</Link>
          </div>
          <div className="mrow">
            {massages.map((m, i) => (
              <Link key={m.slug} href={`/massage/${m.slug}/`} className="mcard">
                <img src={m.img} alt="" width="600" height="900" loading="lazy" />
                <span className="mcard-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="mcard-b"><span className="mcard-h">{m.name}</span><span className="mcard-p">{m.short}</span></span>
              </Link>
            ))}
          </div>
        </section>

        {/* 4 — places */}
        <section className="pn pn-places">
          <p className="kick">Where we come</p>
          <h2>Anywhere <em>you</em> lie down.</h2>
          <Places />
        </section>

        {/* 5 — voices */}
        <section className="pn pn-voice">
          <p className="kick">In their words · 5.0 on Google</p>
          <SlowQuotes items={quotes} />
        </section>

        {/* 6 — hold */}
        <section className="pn pn-hold">
          <p className="kick">Before you book</p>
          <h2>Take one <em>slow</em> breath.</h2>
          <HoldToBook />
        </section>
      </Journey>

      {/* after the journey: quiet vertical close */}
      <section className="close3">
        <div className="wrap close3-grid">
          <div>
            <p className="kick">Questions, quietly answered</p>
            <ul className="qlist">
              {content.home.faqs.slice(0, 6).map(f => (
                <li key={f.q}><details><summary>{f.q}</summary><p>{f.a}</p></details></li>
              ))}
            </ul>
            <Link className="text-link" href="/frequently-asked-questions/">All 35 questions</Link>
          </div>
          <div className="close3-card">
            <h2>Call Chris,<br /><em>or don’t.</em></h2>
            <p>Book online any time, or call for same-day availability across Airlie Beach, Cannonvale, Proserpine and the islands.</p>
            <p className="close3-contact"><a href={`tel:${PHONE}`}>{PHONE_LABEL}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <a className="btn btn-gold" href={BOOK_URL}>Book a massage</a>
          </div>
        </div>
      </section>
    </>
  );
}
