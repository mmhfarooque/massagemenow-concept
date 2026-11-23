export default function PageHead({ title, sub, img, children }) {
  return (
    <section className={img ? 'page-hero' : 'page-head'}>
      {img && <><img className="ph-bg" src={img} alt="" width="1600" height="1000" /><div className="ph-shade" /></>}
      <div className="wrap ph-in">
        <h1>{title}</h1>
        {sub && <p className="ph-sub">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
