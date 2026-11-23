import { Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';
import './v3.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Smooth from '../components/Smooth';

const display = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--f-display' });
const body = Manrope({ subsets: ['latin'], variable: '--f-body' });

export const viewport = { themeColor: '#0e0d0c' };

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
        <Smooth />
        <div className="mobile-bar"><a href="tel:+61407448644">Call Chris</a><a className="mb-book" href="https://book.heygoldie.com/In-House-Massage/checkout">Book a massage</a></div>
      </body>
    </html>
  );
}
