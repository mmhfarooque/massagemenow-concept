'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BOOK_URL, PHONE, PHONE_LABEL, massages } from '../lib/data';

const nav = [
  ['/articles/', 'Articles'],
  ['/frequently-asked-questions/', 'FAQs'],
  ['/our-reviews/', 'Reviews'],
  ['/about-us/', 'About'],
  ['/contact-us/', 'Contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { document.body.classList.toggle('nav-open', open); }, [open]);
  return (
    <header className="hdr">
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>Mobile massage across Airlie Beach &amp; the Whitsundays, 7 days</span>
          <a href={`tel:${PHONE}`}>Call {PHONE_LABEL}</a>
        </div>
      </div>
      <div className="wrap hdr-in">
        <Link href="/" className="brand">
          <img src="/img/mark.png" alt="" width="40" height="40" />
          <span>Massage Me Now</span>
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span className="burger" aria-hidden="true" />{open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          <div className="has-sub">
            <Link href="/massage/" aria-current={path.startsWith('/massage') ? 'page' : undefined}>Massages</Link>
            <ul className="sub">
              {massages.map(m => <li key={m.slug}><Link href={`/massage/${m.slug}/`}>{m.name}</Link></li>)}
            </ul>
          </div>
          {nav.map(([href, label]) => (
            <Link key={href} href={href} aria-current={path.startsWith(href) ? 'page' : undefined}>{label}</Link>
          ))}
          <a className="btn btn-gold" href={BOOK_URL}>Book now</a>
        </nav>
      </div>
    </header>
  );
}
