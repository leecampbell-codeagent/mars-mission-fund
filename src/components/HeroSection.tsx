import { Button } from './ui/Button'

const heroStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'var(--gradient-hero)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '6rem 1.5rem',
}

const contentStyle: React.CSSProperties = {
  maxWidth: '64rem',
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
}

const headingBaseStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'var(--color-text-primary)',
  letterSpacing: '0.03em',
  lineHeight: 1,
  margin: '0 0 1.5rem',
}

const subtextStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  color: 'var(--color-text-secondary)',
  fontSize: '1.125rem',
  lineHeight: 1.7,
  maxWidth: '42rem',
  margin: '0 auto 2.5rem',
}

const glowStyle: React.CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  background: 'radial-gradient(ellipse, var(--color-action-primary) 0%, transparent 70%)',
  opacity: 0.15,
  width: '40rem',
  height: '40rem',
  bottom: '-12rem',
  right: '-8rem',
  pointerEvents: 'none',
}

const ambientKeyframes = `
  @keyframes hero-ambient-float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-2rem) scale(1.05); }
  }
`

export function HeroSection() {
  return (
    <section style={heroStyle} aria-label="Hero">
      <style>{ambientKeyframes}</style>

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          ...glowStyle,
          animation: `hero-ambient-float var(--motion-ambient)`,
        }}
      />

      <div style={contentStyle}>
        <h1
          className="text-5xl md:text-7xl xl:text-9xl"
          style={headingBaseStyle}
        >
          FUND THE NEXT GIANT LEAP
        </h1>

        <p style={subtextStyle}>
          Mars Mission Fund channels collective capital toward the missions, technologies, and teams making interplanetary life possible.
        </p>

        <Button href="#" variant="primary">
          Back a Mission
        </Button>
      </div>
    </section>
  )
}
