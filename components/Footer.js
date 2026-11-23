import Link from 'next/link';
import { BOOK_URL, SOCIAL, PHONE, PHONE_LABEL, EMAIL, AREAS, massages } from '../lib/data';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div className="ftr-brand">
          <img src="/img/logo-white.png" alt="Massage Me Now" width="162" height="86" />
          <p>Mobile massage across Airlie Beach and the Whitsundays, seven days a week.</p>
          <p className="ftr-contact"><a href={`tel:${PHONE}`}>{PHONE_LABEL}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <a className="btn btn-gold" href={BOOK_URL}>Book a massage</a>
        </div>
        <div>
          <h2>Massages</h2>
          <ul>{massages.map(m => <li key={m.slug}><Link href={`/massage/${m.slug}/`}>{m.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Helpful links</h2>
          <ul>
            <li><Link href="/frequently-asked-questions/">FAQs</Link></li>
            <li><Link href="/articles/">Articles</Link></li>
            <li><Link href="/mobile-massage-guide/">Mobile massage guide</Link></li>
            <li><Link href="/about-us/">About us</Link></li>
            <li><Link href="/contact-us/">Contact us</Link></li>
            <li><Link href="/our-reviews/">Our reviews</Link></li>
            <li><Link href="/join-the-team/">Join the team</Link></li>
          </ul>
        </div>
        <div>
          <h2>We come to</h2>
          <ul>{AREAS.map(a => <li key={a}>{a}</li>)}</ul>
          <h2 className="mt">Follow us</h2>
          <ul>
            <li><a href={SOCIAL.facebook}>Facebook</a></li>
            <li><a href={SOCIAL.instagram}>Instagram</a></li>
            <li><a href={SOCIAL.chris}>Chris Pannan on Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap ftr-base">
        <span>© {new Date().getFullYear()} Massage Me Now, Airlie Beach QLD</span>
        <span><Link href="/privacy-policy/">Privacy policy</Link> · <Link href="/terms-and-conditions/">Terms and conditions</Link></span>
      </div>
    </footer>
  );
}
