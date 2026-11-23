import Stars from '../../components/Stars';
import { BOOK_URL, reviews } from '../../lib/data';

export const metadata = { title: 'Client reviews', description: `${reviews.length} five-star Google reviews for Massage Me Now, Airlie Beach mobile massage.` };

export default function Reviews() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{reviews.length} reviews, all five stars</h1>
          <p className="lede-sm">Straight from Google. Hotel rooms, Airbnbs, boats and hens weekends, in the clients’ own words.</p>
          <a className="btn btn-sun" href={BOOK_URL}>Book a massage</a>
        </div>
      </section>
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
    </>
  );
}
