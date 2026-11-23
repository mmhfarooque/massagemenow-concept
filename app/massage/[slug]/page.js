import Link from 'next/link';
import Stars from '../../../components/Stars';
import Faq from '../../../components/Faq';
import CtaBand from '../../../components/CtaBand';
import { LongForm } from '../../../components/Rich';
import { BOOK_URL, PHONE, PHONE_LABEL, massages, reviews } from '../../../lib/data';
import content from '../../../lib/content.json';

export const dynamicParams = false;
export function generateStaticParams() { return massages.map(m => ({ slug: m.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const c = content.massages[slug];
  return { title: c.title, description: c.desc };
}

export default async function MassagePage({ params }) {
  const { slug } = await params;
  const i = massages.findIndex(x => x.slug === slug);
  const m = massages[i]; const c = content.massages[slug];
  const long = reviews.filter(r => r.text.length > 150 && r.text.length < 450);
  const quotes = [long[(i * 3) % long.length], long[(i * 3 + 1) % long.length]];
  const others = massages.filter(x => x.slug !== slug);
  return (
    <>
      <section className="m-hero">
        <div className="wrap m-hero-grid">
          <div>
            <p className="crumbs"><Link href="/">Home</Link> / <Link href="/massage/">Massages</Link></p>
            <h1>{c.title}</h1>
            {m.intro.map(p => <p key={p.slice(0, 20)} className="lede-sm">{p}</p>)}
            <div className="actions">
              <a className="btn btn-gold" href={BOOK_URL}>Book this massage</a>
              <a className="btn btn-line-dark" href={`tel:${PHONE}`}>Call {PHONE_LABEL}</a>
            </div>
            <p className="note"><Stars /> 5.0 from {reviews.length} Google reviews · mobile across the Whitsundays</p>
          </div>
          <img src={m.img} alt={c.title} width="700" height="520" fetchPriority="high" />
        </div>
      </section>

      <section className="m-glance">
        <div className="wrap m-glance-grid">
          <div><h2>What it involves</h2><p>{m.what}</p></div>
          <div><h2>Good for</h2><ul className="ticks">{m.goodFor.map(g => <li key={g}>{g}</li>)}</ul></div>
          <figure className="voice">
            <Stars />
            <blockquote><p>{quotes[0].text}</p></blockquote>
            <figcaption>{quotes[0].name}</figcaption>
          </figure>
        </div>
      </section>

      <section className="guide">
        <div className="wrap"><LongForm blocks={c.blocks} /></div>
      </section>

      {c.faqs.length > 0 && (
        <section className="faq-sec">
          <div className="wrap faq-grid">
            <div>
              <h2>{m.name} <em>FAQs</em></h2>
              <p>Still unsure? <Link className="text-link" href="/frequently-asked-questions/">See all FAQs</Link> or call Chris on <a className="text-link" href={`tel:${PHONE}`}>{PHONE_LABEL}</a>.</p>
            </div>
            <Faq items={c.faqs} />
          </div>
        </section>
      )}

      <section className="more">
        <div className="wrap">
          <h2>Other <em>massages</em></h2>
          <div className="t-grid t-grid-sm">
            {others.slice(0, 6).map(o => (
              <Link key={o.slug} href={`/massage/${o.slug}/`} className="t-card">
                <div className="t-img"><img src={o.img} alt="" width="600" height="400" loading="lazy" /></div>
                <div className="t-body"><h3>{o.name}</h3><p>{o.short}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={<>Ready for your <em>{m.name.toLowerCase()}</em>?</>} img={m.img} />
    </>
  );
}
