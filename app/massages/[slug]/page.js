import Link from 'next/link';
import { notFound } from 'next/navigation';
import Stars from '../../../components/Stars';
import { BOOK_URL, massages, reviews } from '../../../lib/data';

export const dynamicParams = false;
export function generateStaticParams() { return massages.map(m => ({ slug: m.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = massages.find(x => x.slug === slug);
  return m ? { title: `${m.name} in Airlie Beach`, description: m.short } : {};
}

export default async function MassagePage({ params }) {
  const { slug } = await params;
  const i = massages.findIndex(x => x.slug === slug);
  if (i < 0) notFound();
  const m = massages[i];
  const others = massages.filter(x => x.slug !== slug).slice(0, 3);
  const long = reviews.filter(r => r.text.length > 150 && r.text.length < 450);
  const quote = long[(i * 3) % long.length];
  return (
    <>
      <section className="m-hero">
        <div className="wrap m-hero-grid">
          <div>
            <p className="crumbs"><Link href="/#massages">Massages</Link></p>
            <h1>{m.name}</h1>
            {m.intro.map(p => <p key={p.slice(0, 20)} className="lede-sm">{p}</p>)}
            <div className="actions">
              <a className="btn btn-sun" href={BOOK_URL}>Book a {m.name.toLowerCase()}</a>
            </div>
            <p className="note">Mobile across Airlie Beach and the Whitsundays. We bring the table.</p>
          </div>
          <img src={m.img} alt="" width="700" height="520" />
        </div>
      </section>

      <section className="m-body">
        <div className="wrap m-body-grid">
          <div>
            <h2>What it involves</h2>
            <p>{m.what}</p>
          </div>
          <div>
            <h2>Good for</h2>
            <ul className="ticks">{m.goodFor.map(g => <li key={g}>{g}</li>)}</ul>
          </div>
          <figure className="voice">
            <Stars />
            <blockquote><p>{quote.text}</p></blockquote>
            <figcaption>{quote.name}</figcaption>
          </figure>
        </div>
      </section>

      <section className="more">
        <div className="wrap">
          <h2>Other massages</h2>
          <ul className="more-list">
            {others.map(o => (
              <li key={o.slug}><Link href={`/massages/${o.slug}/`}><span className="mass-name">{o.name}</span><span className="mass-short">{o.short}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
