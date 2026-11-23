import PageHead from '../../components/PageHead';
import Rich from '../../components/Rich';
import CtaBand from '../../components/CtaBand';
import Stars from '../../components/Stars';
import { BOOK_URL, SOCIAL, reviews } from '../../lib/data';
import content from '../../lib/content.json';

export const metadata = { title: 'About us', description: content.about.desc };

export default function About() {
  const blocks = content.about.blocks.filter(b => b.t !== 'img' && !/^about us$/i.test(b.x || ''));
  return (
    <>
      <PageHead title={<>About <em>us</em></>} img="/img/c/massage-me-now-hammo-.webp" sub="Founded by Chris Pannan. Close to 17 years of mobile massage in Airlie Beach and the Whitsundays." />
      <section className="about">
        <div className="wrap about-grid">
          <div className="about-imgs">
            <img src="/img/chris.webp" alt="Chris Pannan" width="600" height="840" />
          </div>
          <div>
            <Rich blocks={blocks} />
            <p className="note"><Stars /> 5.0 from {reviews.length} Google reviews</p>
            <div className="actions">
              <a className="btn btn-gold" href={BOOK_URL}>Book with Chris</a>
              <a className="btn btn-line-dark" href={SOCIAL.chris}>Chris on Facebook</a>
            </div>
          </div>
        </div>
      </section>
      <CtaBand img="/img/c/couple-1.webp" />
    </>
  );
}
