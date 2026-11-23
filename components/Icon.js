const P = {
  hotel: 'M3 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M15 9h4a2 2 0 0 1 2 2v10M3 21h18M7 7h2M7 11h2M7 15h2M11 7h0M11 11h0M11 15h0',
  home: 'M3 11 12 4l9 7M5 10v10h5v-6h4v6h5V10',
  boat: 'M3 17c2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0M5 14l1-5h12l1 5M12 3v6M9 6h6',
  island: 'M2 19c3-2 6-2 10 0s7 2 10 0M12 17c0-5 1-8 3-10M15 7c-2-1-5 0-6 2M15 7c2-1 4 0 5 2M15 7c0-2-2-3-4-3',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21a7 7 0 0 1 14 0M17 3.5a4 4 0 0 1 0 7.5M22 21a7 7 0 0 0-4-6.3',
  studio: 'M4 21V10l8-6 8 6v11M9 21v-6h6v6M2 21h20',
  calendar: 'M4 6h16v15H4zM4 10h16M8 3v4M16 3v4M8 14h3',
  pin: 'M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  check: 'M5 12l4 4L19 6',
  leaf: 'M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19l7-7',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h0',
  wave: 'M2 12c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1M2 17c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1M2 7c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1',
  heart: 'M12 20s-7-4.5-9-9a4.5 4.5 0 0 1 9-3 4.5 4.5 0 0 1 9 3c-2 4.5-9 9-9 9Z',
  moon: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z',
  bowl: 'M3 11h18a9 9 0 0 1-18 0ZM8 20h8M12 4v3M8 5l1 2M16 5l-1 2',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
};
export default function Icon({ name, size = 24, className = 'ico' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name]} />
    </svg>
  );
}
