import Link from 'next/link';
import PageHead from '../../components/PageHead';
import CtaBand from '../../components/CtaBand';
import { massages, alsoOffered } from '../../lib/data';

export const metadata = { title: 'Our massages', description: 'Mobile remedial, deep tissue, full body, couples, hot stone, Reiki and relaxation massage across Airlie Beach and the Whitsundays.' };

export default function Massages() {
  return (
    <>
      <PageHead title={<>Our <em>massages</em></>} sub={`Seven signature treatments, all mobile, all equipment supplied. Also available: ${alsoOffered.join(', ').toLowerCase()}.`} img="/img/c/tq-image-2-hr.webp" />
      <section className="treatments">
        <div className="wrap t-grid">
          {massages.map(m => (
            <Link key={m.slug} href={`/massage/${m.slug}/`} className="t-card">
              <div className="t-img"><img src={m.img} alt="" width="600" height="420" loading="lazy" /></div>
              <div className="t-body"><h3>{m.name}</h3><p>{m.short}</p><span className="t-more">Learn more</span></div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
