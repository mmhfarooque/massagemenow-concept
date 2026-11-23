import { BOOK_URL, SOCIAL } from '../../lib/data';

export const metadata = { title: 'About Chris Pannan', description: 'Massage Me Now was founded by Chris Pannan, a remedial sports practitioner who has worked in Airlie Beach for close to 17 years.' };

export default function About() {
  return (
    <>
      <section className="about">
        <div className="wrap about-grid">
          <img src="/img/chris.webp" alt="Chris Pannan" width="600" height="840" />
          <div className="prose">
            <h1>About Chris</h1>
            <p className="lede-sm">Massage Me Now was founded by Chris Pannan, who began his massage career in Airlie Beach close to 17 years ago.</p>
            <p>Chris is a qualified remedial sports practitioner with experience across many massage styles. Over the years he has worked in hotels and motels, Airbnbs, holiday letting pools, private homes, island resorts and on boats across the Whitsundays, seven days and nights a week.</p>
            <h2>How we work</h2>
            <p>The idea is simple: good value and good quality, delivered where you are staying. Chris and his team of therapists cover a wide range of styles and pressures, so every client can find the right match.</p>
            <p>Clients say the same things again and again. He asks the right questions first. He finds the sore spots you did not mention. And he will often fit you in the same day.</p>
            <div className="actions">
              <a className="btn btn-sun" href={BOOK_URL}>Book with Chris</a>
              <a className="btn btn-line-dark" href={SOCIAL.chris}>Chris on Facebook</a>
            </div>
          </div>
        </div>
      </section>
      <section className="wide-photo" aria-hidden="true">
        <img src="/img/sunset.webp" alt="" width="1600" height="1067" loading="lazy" />
      </section>
    </>
  );
}
