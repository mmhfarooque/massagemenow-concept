import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], style: ['normal', 'italic'], variable: '--f-display' });
const body = Montserrat({ subsets: ['latin'], variable: '--f-body' });

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
        <div className="mobile-bar"><a href="tel:+61407448644">Call Chris</a><a className="mb-book" href="https://book.heygoldie.com/In-House-Massage/checkout">Book a massage</a></div>
      </body>
    </html>
  );
}
