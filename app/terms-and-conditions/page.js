import PageHead from '../../components/PageHead';
import Rich from '../../components/Rich';
import content from '../../lib/content.json';

export const metadata = { title: content.terms.title };

export default function Page() {
  return (
    <>
      <PageHead title={content.terms.title} />
      <section className="guide"><div className="wrap narrow"><Rich blocks={content.terms.blocks.filter(b => b.x?.toLowerCase() !== content.terms.title.toLowerCase())} /></div></section>
    </>
  );
}
