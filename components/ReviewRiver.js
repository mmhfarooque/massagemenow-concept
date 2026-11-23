import Stars from './Stars';
export default function ReviewRiver({ items }) {
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];
  return (
    <div className="river" aria-label="Client reviews">
      {rows.map((row, i) => (
        <div key={i} className={`river-row ${i ? 'rev' : ''}`}>
          <div className="river-track">
            {[...row, ...row].map((r, j) => (
              <figure key={j} className="rcard" aria-hidden={j >= row.length}>
                <Stars />
                <blockquote>{r.text.length > 230 ? r.text.slice(0, r.text.lastIndexOf(' ', 230)) + '…' : r.text}</blockquote>
                <figcaption><span className="avatar">{r.name[0]}</span>{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
