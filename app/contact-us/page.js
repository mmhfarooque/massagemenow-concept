import PageHead from '../../components/PageHead';
import { BOOK_URL, PHONE, PHONE_LABEL, EMAIL, SOCIAL, AREAS } from '../../lib/data';
import content from '../../lib/content.json';

export const metadata = { title: 'Contact us', description: 'Call, email or book online with Massage Me Now, mobile massage in Airlie Beach and the Whitsundays.' };

export default function Contact() {
  const paras = content.contact.blocks.filter(b => b.t === 'p').map(b => b.x).slice(0, 2);
  return (
    <>
      <PageHead title={<>Contact <em>us</em></>} sub={paras.join(' ')} />
      <section className="contact">
        <div className="wrap c-grid">
          <a className="c-card" href={BOOK_URL}><span className="c-ico" aria-hidden="true">📅</span><h2>Book online</h2><p>Choose your massage, time and therapist. Takes about a minute.</p><span className="t-more">Open booking</span></a>
          <a className="c-card" href={`tel:${PHONE}`}><span className="c-ico" aria-hidden="true">📞</span><h2>Call us today</h2><p>{PHONE_LABEL}<br />Real-time support for questions and same-day bookings.</p><span className="t-more">Call now</span></a>
          <a className="c-card" href={`mailto:${EMAIL}`}><span className="c-ico" aria-hidden="true">✉️</span><h2>Email us today</h2><p>{EMAIL}<br />For group bookings, events and special requests.</p><span className="t-more">Send email</span></a>
        </div>
        <div className="wrap c-areas">
          <h2>Where we <em>come to you</em></h2>
          <ul className="chips">{AREAS.map(a => <li key={a}>{a}</li>)}</ul>
          <p>Follow us on <a className="text-link" href={SOCIAL.facebook}>Facebook</a> and <a className="text-link" href={SOCIAL.instagram}>Instagram</a>.</p>
        </div>
      </section>
    </>
  );
}
