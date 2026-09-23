interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 text-center">
        {label && <span className="section-label">{label}</span>}
        <h1
          className="font-display font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
