export default function StorySection({ title, tag, emoji, children, tone = 'neutral' }) {
  const toneStyles = {
    neutral: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
    sad: 'linear-gradient(180deg, rgba(255,90,122,0.10), rgba(255,255,255,0.02))',
    hope: 'linear-gradient(180deg, rgba(0,209,255,0.10), rgba(255,255,255,0.02))',
    warm: 'linear-gradient(180deg, rgba(255,183,3,0.15), rgba(255,255,255,0.02))',
    cozy: 'linear-gradient(180deg, rgba(17,199,132,0.14), rgba(255,255,255,0.02))'
  };

  return (
    <section className="card section" style={{ background: toneStyles[tone] }}>
      <div className="viz" aria-hidden="true" style={{ display: 'grid', placeItems: 'center' }}>
        <div className="emoji" role="img" aria-label={title}>
          {emoji}
        </div>
      </div>
      <div>
        {tag && <span className="badge">{tag}</span>}
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </section>
  );
}

