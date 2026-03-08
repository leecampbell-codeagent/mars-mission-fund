import { Button } from './ui/Button'

const sectionStyle: React.CSSProperties = {
  backgroundColor: 'var(--color-bg-surface)',
  padding: '6rem 1.5rem',
  textAlign: 'center',
}

const contentStyle: React.CSSProperties = {
  maxWidth: '48rem',
  margin: '0 auto',
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'var(--color-text-primary)',
  fontSize: '2.5rem',
  letterSpacing: '0.03em',
  lineHeight: 1.1,
  margin: '0 0 1.25rem',
}

const subtextStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  color: 'var(--color-text-secondary)',
  fontSize: '1.125rem',
  lineHeight: 1.7,
  margin: '0 auto 2.5rem',
  maxWidth: '36rem',
}

export function ClosingCtaSection() {
  return (
    <section style={sectionStyle} aria-label="Closing call to action">
      <div style={contentStyle}>
        <h2 style={headingStyle}>Ready to Fund the Future?</h2>
        <p style={subtextStyle}>
          Join 1,847 backers already powering humanity's next chapter. Every contribution moves the mission forward.
        </p>
        <Button href="#" variant="secondary">
          Explore All Missions
        </Button>
      </div>
    </section>
  )
}
