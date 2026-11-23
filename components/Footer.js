import Link from 'next/link';
import { BOOK_URL, SOCIAL, massages } from '../lib/data';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div>
          <img src="/img/logo-white.png" alt="Massage Me Now" width="162" height="86" />
          <p>Mobile massage across Airlie Beach and the Whitsundays, seven days a week.</p>
          <a className="btn btn-sun" href={BOOK_URL}>Book a massage</a>
        </div>
        <div>
          <h2>Massages</h2>
          <ul>{massages.map(m => <li key={m.slug}><Link href={`/massages/${m.slug}/`}>{m.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Find us</h2>
          <ul>
            <li><a href={SOCIAL.facebook}>Facebook</a></li>
            <li><a href={SOCIAL.instagram}>Instagram</a></li>
            <li><a href={SOCIAL.chris}>Chris Pannan on Facebook</a></li>
            <li><Link href="/reviews/">Client reviews</Link></li>
            <li><Link href="/about/">About Chris</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap ftr-base">© {new Date().getFullYear()} Massage Me Now, Airlie Beach QLD</div>
    </footer>
  );
}
