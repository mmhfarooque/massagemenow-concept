import Link from 'next/link';
import PageHead from '../../components/PageHead';
import Faq from '../../components/Faq';
import CtaBand from '../../components/CtaBand';
import { PHONE, PHONE_LABEL, EMAIL } from '../../lib/data';
import content from '../../lib/content.json';
import { slugify } from '../../components/Rich';

export const metadata = { title: 'Frequently asked questions', description: 'Answers about booking, pressure, preparation and each of our mobile massage treatments.' };

export default function FAQ() {
  const cats = content.faqCats.filter(c => content.faqs.some(f => f.cat === c));
  const order = ['Booking and general', ...cats.filter(c => c !== 'Booking and general')];
  return (
    <>
      <PageHead title={<>Frequently asked <em>questions</em></>} sub={content.faqIntro.join(' ')} />
      <section className="faq-page">
        <div className="wrap faq-layout">
          <nav className="faq-nav" aria-label="FAQ topics">
            <ul>{order.map(c => <li key={c}><a href={`#${slugify(c)}`}>{c}</a></li>)}</ul>
            <div className="faq-help">
              <p><strong>Can't find your answer?</strong></p>
              <p><a href={`tel:${PHONE}`}>Call {PHONE_LABEL}</a><br /><a href={`mailto:${EMAIL}`}>Email Chris</a></p>
            </div>
          </nav>
          <div>
            {order.map(c => (
              <div key={c} id={slugify(c)} className="faq-group">
                <h2>{c}</h2>
                <Faq items={content.faqs.filter(f => f.cat === c)} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
