import Link from 'next/link';
import CtaBand from '../../../components/CtaBand';
import Faq from '../../../components/Faq';
import { LongForm } from '../../../components/Rich';
import { BOOK_URL } from '../../../lib/data';
import content from '../../../lib/content.json';

export const dynamicParams = false;
export function generateStaticParams() { return content.articles.map(a => ({ slug: a.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const a = content.articles.find(x => x.slug === slug);
  return { title: a.title, description: a.desc };
}

export default async function Article({ params }) {
  const { slug } = await params;
  const a = content.articles.find(x => x.slug === slug);
  const more = content.articles.filter(x => x.slug !== slug).slice(0, 3);
  const blocks = a.blocks.filter((b, i) => !(i === 0 && b.t === 'h2'));
  return (
    <>
      <section className="page-hero art-hero">
        <img className="ph-bg" src={a.img} alt="" width="1600" height="1000" />
        <div className="ph-shade" />
        <div className="wrap ph-in">
          <p className="crumbs light"><Link href="/articles/">Articles</Link></p>
          <h1>{a.title}</h1>
          <p className="ph-sub">{a.desc}</p>
        </div>
      </section>
      <section className="guide">
        <div className="wrap"><LongForm blocks={blocks} title="In this article" /></div>
      </section>
      {a.faqs.length > 0 && <section className="faq-sec"><div className="wrap"><Faq items={a.faqs} /></div></section>}
      <section className="art-sec">
        <div className="wrap">
          <div className="center-head"><h2>More <em>articles</em></h2></div>
          <div className="a-grid">
            {more.map(x => (
              <Link key={x.slug} href={`/article/${x.slug}/`} className="a-card">
                <div className="t-img"><img src={x.img} alt="" width="600" height="400" loading="lazy" /></div>
                <div className="t-body"><h3>{x.title}</h3><span className="t-more">Read article</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
