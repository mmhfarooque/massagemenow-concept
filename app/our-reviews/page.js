import PageHead from '../../components/PageHead';
import Stars from '../../components/Stars';
import CtaBand from '../../components/CtaBand';
import { reviews } from '../../lib/data';

export const metadata = { title: 'Our reviews', description: `${reviews.length} five-star Google reviews for Massage Me Now, Airlie Beach mobile massage.` };

export default function Reviews() {
  return (
    <>
      <PageHead title={<>{reviews.length} reviews, <em>all five stars</em></>} sub="Read firsthand accounts of how our therapists have helped clients relax, recover and feel better, in hotel rooms, Airbnbs, homes and on boats." />
      <section className="all-reviews">
        <div className="wrap cols">
          {reviews.map(r => (
            <figure key={r.name} className="voice">
              <Stars />
              <blockquote><p>{r.text}</p></blockquote>
              <figcaption>{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
