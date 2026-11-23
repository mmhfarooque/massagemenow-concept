import PageHead from '../../components/PageHead';
import Rich from '../../components/Rich';
import content from '../../lib/content.json';

export const metadata = { title: content.privacy.title };

export default function Page() {
  return (
    <>
      <PageHead title={content.privacy.title} />
      <section className="guide"><div className="wrap narrow"><Rich blocks={content.privacy.blocks.filter(b => b.x?.toLowerCase() !== content.privacy.title.toLowerCase())} /></div></section>
    </>
  );
}
