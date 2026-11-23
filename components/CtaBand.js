import { BOOK_URL, PHONE, PHONE_LABEL } from '../lib/data';
export default function CtaBand({ title = <>Your massage is <em>one click away</em></>, text = 'Book online now and we will come to you.', img = '/img/reiki.webp' }) {
  return (
    <section className="cta-band">
      <img src={img} alt="" width="1600" height="1066" loading="lazy" />
      <div className="cta-shade" />
      <div className="wrap cta-in">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="actions center">
          <a className="btn btn-gold" href={BOOK_URL}>Book your massage</a>
          <a className="btn btn-ghost" href={`tel:${PHONE}`}>Call {PHONE_LABEL}</a>
        </div>
      </div>
    </section>
  );
}
