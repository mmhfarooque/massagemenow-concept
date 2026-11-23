export default function Wave({ top = '#fff', bottom = '#023e58', flip = false }) {
  return (
    <div className="wave" style={{ background: bottom }} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
        <path d="M0 0h1440v38c-120 30-260 46-420 30S700 18 540 30 220 86 0 60Z" fill={top} />
      </svg>
    </div>
  );
}
