import Link from 'next/link';
import Stars from '../components/Stars';
import { BOOK_URL, places, massages, alsoOffered, reviews } from '../lib/data';

const picks = ['Tarryn Puntigam', 'Linda Reid', 'Kellie Lloyd'].map(n => reviews.find(r => r.name === n));

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img src="/img/hero.webp" alt="Chris giving a massage in a villa overlooking the Whitsunday islands" width="2000" height="1500" fetchPriority="high" />
        </div>
        <div className="wrap hero-in">
          <h1>We bring the massage table to you.</h1>
          <p className="lede">Mobile massage across Airlie Beach and the Whitsundays. Your hotel room, Airbnb, home, island villa or boat. We arrive with the table, linen and oils.</p>
          <div className="actions">
            <a className="btn btn-sun" href={BOOK_URL}>Book a massage</a>
            <Link className="btn btn-line" href="#massages">See the massages</Link>
          </div>
          <p className="proof"><Stars /> <span>5.0 from {reviews.length} Google reviews</span></p>
        </div>
      </section>

      <section className="places" aria-labelledby="places-h">
        <div className="wrap">
          <h2 id="places-h" className="places-h">Where the table has been set up lately</h2>
          <ul className="place-list">
            {places.map(p => (
              <li key={p.place}>
                <span className="place">{p.place}</span>
                <blockquote>
                  <p>“{p.quote}”</p>
                  <cite>{p.name}</cite>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="massages" className="massages" aria-labelledby="mass-h">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="mass-h">Massages</h2>
            <p>Every style is mobile. Pick the one that fits, or ask Chris when you book and he will match it to what is sore.</p>
          </div>
          <ul className="mass-list">
            {massages.map(m => (
              <li key={m.slug}>
                <Link href={`/massages/${m.slug}/`} className="mass-row">
                  <img src={m.img} alt="" width="320" height="200" loading="lazy" />
                  <span className="mass-name">{m.name}</span>
                  <span className="mass-short">{m.short}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="also">Also available: {alsoOffered.join(', ').toLowerCase().replace(/^./, c => c.toUpperCase())}.</p>
        </div>
      </section>

      <section className="how" aria-labelledby="how-h">
        <div className="wrap how-grid">
          <h2 id="how-h">How a booking works</h2>
          <ol className="steps">
            <li><strong>Book online.</strong> Choose the massage, the length and your therapist in the booking app.</li>
            <li><strong>Tell us where you are.</strong> Hotel, Airbnb, home, resort or the boat. Same-day bookings are often possible.</li>
            <li><strong>We arrive set up.</strong> Table, fresh linen and oils. All you need is a bit of floor space.</li>
            <li><strong>Stay where you are.</strong> No drive home afterwards. Have a shower, or go straight to sleep.</li>
          </ol>
        </div>
      </section>

      <section className="voices" aria-labelledby="voices-h">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="voices-h">What clients say</h2>
            <Link href="/reviews/" className="text-link">Read all {reviews.length} reviews</Link>
          </div>
          <div className="voice-grid">
            {picks.map(r => (
              <figure key={r.name} className="voice">
                <Stars />
                <blockquote><p>{r.text}</p></blockquote>
                <figcaption>{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="chris-band">
        <div className="wrap chris-grid">
          <img src="/img/chris.webp" alt="Chris Pannan at work" width="600" height="840" loading="lazy" />
          <div>
            <h2>Meet Chris Pannan</h2>
            <p>Chris Pannan has been massaging in Airlie Beach for close to 17 years. He built Massage Me Now around one idea: the massage should come to the client. He is a qualified remedial sports practitioner and works with a small team of therapists across the Whitsundays, seven days and nights a week.</p>
            <Link href="/about/" className="text-link">Read Chris’s story</Link>
          </div>
        </div>
      </section>

      <section className="closer">
        <div className="wrap closer-in">
          <h2>Where are you staying tonight?</h2>
          <a className="btn btn-sun" href={BOOK_URL}>Book a massage</a>
        </div>
      </section>
    </>
  );
}
