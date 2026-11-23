import PageHead from '../../components/PageHead';
import Rich from '../../components/Rich';
import { EMAIL, PHONE, PHONE_LABEL } from '../../lib/data';
import content from '../../lib/content.json';

export const metadata = { title: 'Join the team', description: 'Qualified massage practitioner? Join Massage Me Now in Airlie Beach and the Whitsundays.' };

export default function Join() {
  const blocks = content.join.blocks.filter(b => !/join massage me now/i.test(b.x || ''));
  return (
    <>
      <PageHead title={<>Join <em>the team</em></>} sub="Flexible work, competitive pay and a steady stream of clients across the Whitsundays." img="/img/c/couple-1.webp" />
      <section className="guide">
        <div className="wrap narrow">
          <Rich blocks={blocks} className="prose prose-imgs" />
          <div className="join-cta">
            <h2>Ready to <em>join us</em>?</h2>
            <p>Send Chris your details, qualifications and availability and he will be in touch.</p>
            <div className="actions">
              <a className="btn btn-gold" href={`mailto:${EMAIL}?subject=Join%20the%20team`}>Email your details</a>
              <a className="btn btn-line-dark" href={`tel:${PHONE}`}>Call {PHONE_LABEL}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
