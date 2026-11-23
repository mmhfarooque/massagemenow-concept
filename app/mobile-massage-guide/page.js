import PageHead from '../../components/PageHead';
import CtaBand from '../../components/CtaBand';
import { LongForm } from '../../components/Rich';
import content from '../../lib/content.json';

export const metadata = { title: 'The complete guide to mobile massage in Airlie Beach', description: 'Techniques, treatments, benefits and how mobile massage works across Airlie Beach and the Whitsundays.' };

export default function Guide() {
  return (
    <>
      <PageHead title={<>Airlie Beach mobile <em>massage guide</em></>} sub="Everything about our techniques, treatments and how mobile massage works across the Whitsundays." img="/img/c/istock-27316814-xxxlarge.webp" />
      <section className="guide"><div className="wrap"><LongForm blocks={content.home.long.filter(b => b.x !== 'Airlie Beach Mobile Massage Services')} title="In this guide" /></div></section>
      <CtaBand />
    </>
  );
}
