// Renders extracted page blocks (h2/h3/h4/p/li/img) as clean prose.
export const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
export const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function group(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.t === 'li') {
      const last = out[out.length - 1];
      if (last && last.t === 'ul') last.items.push(b.x); else out.push({ t: 'ul', items: [b.x] });
    } else out.push(b);
  }
  return out;
}

function Item({ b, i }) {
  switch (b.t) {
    case 'h2': return <h2 id={slugify(b.x)}>{cap(b.x)}</h2>;
    case 'h3': return <h3 id={slugify(b.x)}>{cap(b.x)}</h3>;
    case 'h4': return <h4>{cap(b.x)}</h4>;
    case 'ul': return <ul>{b.items.map((x, j) => {
      const m = x.match(/^([^:]{3,60}):\s*(.*)$/);
      return <li key={j}>{m ? <><strong>{m[1]}:</strong> {m[2]}</> : x}</li>;
    })}</ul>;
    case 'img': return <figure className="rich-fig"><img src={b.src} alt={b.alt || ''} loading="lazy" width="1200" height="800" /></figure>;
    case 'blockquote': return <blockquote>{b.x}</blockquote>;
    default: return <p>{b.x}</p>;
  }
}

export default function Rich({ blocks, className = 'prose' }) {
  return <div className={className}>{group(blocks).map((b, i) => <Item key={i} b={b} i={i} />)}</div>;
}

// Long-form with sticky "On this page" contents (desktop) / collapsible (mobile)
export function LongForm({ blocks, tocLevel = 'h3', title = 'On this page' }) {
  const heads = blocks.filter(b => b.t === 'h2' || (tocLevel === 'h3' && b.t === 'h3'));
  return (
    <div className="longform">
      {heads.length > 2 && (
        <aside className="toc">
          <details open>
            <summary>{title}</summary>
            <ol>{heads.map(h => <li key={h.x} className={h.t}><a href={`#${slugify(h.x)}`}>{cap(h.x)}</a></li>)}</ol>
          </details>
        </aside>
      )}
      <Rich blocks={blocks} />
    </div>
  );
}
