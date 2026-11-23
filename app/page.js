import Link from 'next/link';
import Stars from '../components/Stars';
import { BOOK_URL, massages, alsoOffered, reviews } from '../lib/data';

const featured = reviews.filter(r => r.text.length > 140 && r.text.length < 420).slice(0, 6);

const why = [
  ['We come to you', 'Hotel, Airbnb, home, island resort or boat. No driving home afterwards.'],
  ['Everything supplied', 'Professional table, fresh linen and oils. You just need a little floor space.'],
  ['Same-day bookings', 'Short notice is often fine. Book online in a minute and choose your therapist.'],
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
          <p className="hero-sub">Professional mobile massage at your hotel, Airbnb, home or yacht. Seven days a week.</p>
          <div className="actions center">
            <a className="btn btn-gold" href={BOOK_URL}>Book your massage</a>
            <Link className="btn btn-ghost" href="#massages">View treatments</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-grid">
          <div><strong>17</strong><span>years in Airlie Beach</span></div>
          <div><strong>7</strong><span>days a week</span></div>
          <div><strong>{reviews.length}</strong><span>five-star Google reviews</span></div>
          <div><strong>0 km</strong><span>for you to travel</span></div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap intro-grid">
          <div className="intro-img">
            <img src="/img/sunset.webp" alt="Massage by the pool overlooking the Whitsundays" width="1600" height="1067" loading="lazy" />
          </div>
          <div>
            <h2>Relax without leaving <em>your room</em></h2>
            <p>Welcome to Massage Me Now, mobile massage throughout the Whitsundays. Whether you are in your own home, a resort, an Airbnb or aboard a yacht charter, our therapists bring the full massage experience to you.</p>
            <p>Choose from relaxation, remedial, deep tissue, hot stone, Reiki and couples treatments, plus {alsoOffered.join(', ').toLowerCase()}.</p>
            <a className="btn btn-ocean" href={BOOK_URL}>Book online</a>
          </div>
        </div>
      </section>

      <section id="massages" className="treatments">
        <div className="wrap">
          <div className="center-head">
            <h2>Our <em>treatments</em></h2>
            <p>Every treatment is mobile, with all equipment supplied.</p>
          </div>
          <div className="t-grid">
            {massages.map(m => (
              <Link key={m.slug} href={`/massages/${m.slug}/`} className="t-card">
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
          <div className="center-head light">
            <h2>Why choose <em>Massage Me Now</em></h2>
          </div>
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
          <p className="center"><Link className="btn btn-ocean" href="/reviews/">Read all reviews</Link></p>
        </div>
      </section>

      <section className="meet">
        <div className="wrap meet-grid">
          <div>
            <h2>Meet <em>Chris</em></h2>
            <p>Massage Me Now was founded by Chris Pannan, who began his massage career in Airlie Beach close to 17 years ago. A qualified remedial sports practitioner, he has worked everywhere from hotels and Airbnbs to island resorts and the luxury boating community.</p>
            <p>Today Chris and his team offer a wide range of styles and strengths, so every client finds the right match.</p>
            <Link href="/about/" className="btn btn-ocean">Our story</Link>
          </div>
          <img src="/img/chris.webp" alt="Chris Pannan at work" width="600" height="840" loading="lazy" />
        </div>
      </section>

      <section className="cta-band">
        <img src="/img/reiki.webp" alt="" width="1600" height="1066" loading="lazy" />
        <div className="cta-shade" />
        <div className="wrap cta-in">
          <h2>Your massage is <em>one click away</em></h2>
          <p>Book online now and we will come to you.</p>
          <a className="btn btn-gold" href={BOOK_URL}>Book your massage</a>
        </div>
      </section>
    </>
  );
}
