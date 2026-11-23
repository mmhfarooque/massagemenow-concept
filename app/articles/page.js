import Link from 'next/link';
import PageHead from '../../components/PageHead';
import content from '../../lib/content.json';

export const metadata = { title: 'Articles', description: 'Guides to massage, recovery and relaxation in Airlie Beach and the Whitsundays.' };

export default function Articles() {
  const [first, ...rest] = content.articles;
  return (
    <>
      <PageHead title={<>Massage &amp; wellness <em>articles</em></>} sub="Guides to recovery, relaxation and getting the most from your massage in the Whitsundays." />
      <section className="art-sec art-index">
        <div className="wrap">
          <Link href={`/article/${first.slug}/`} className="a-feature">
            <img src={first.img} alt="" width="900" height="600" />
            <div><h2>{first.title}</h2><p>{first.desc}</p><span className="t-more">Read article</span></div>
          </Link>
          <div className="a-grid">
            {rest.map(a => (
              <Link key={a.slug} href={`/article/${a.slug}/`} className="a-card">
                <div className="t-img"><img src={a.img} alt="" width="600" height="400" loading="lazy" /></div>
                <div className="t-body"><h3>{a.title}</h3><p>{a.desc}</p><span className="t-more">Read article</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
