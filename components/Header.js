'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BOOK_URL } from '../lib/data';

const nav = [
  ['/#massages', 'Massages'],
  ['/reviews/', 'Reviews'],
  ['/about/', 'About Chris'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/img/mark.png" alt="" width="40" height="40" />
          <span>Massage Me Now</span>
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a className="btn btn-sun" href={BOOK_URL}>Book a massage</a>
        </nav>
      </div>
    </header>
  );
}
