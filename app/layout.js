import { Young_Serif, Figtree } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const display = Young_Serif({ subsets: ['latin'], weight: '400', variable: '--f-display' });
const body = Figtree({ subsets: ['latin'], variable: '--f-body' });

export const metadata = {
  title: { default: 'Massage Me Now | Mobile massage in Airlie Beach', template: '%s | Massage Me Now' },
  description: 'Mobile massage across Airlie Beach and the Whitsundays. We come to your hotel, Airbnb, home or boat with everything needed.',
  robots: { index: false, follow: false }, // design concept preview: never index
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
