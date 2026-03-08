import { SectionLabel } from './ui/SectionLabel'
import { Card } from './ui/Card'

const sectionStyle: React.CSSProperties = {
  background: 'var(--color-bg-surface)',
  padding: '5rem 1.5rem',
}

const innerStyle: React.CSSProperties = {
  maxWidth: '72rem',
  margin: '0 auto',
}

const headerStyle: React.CSSProperties = {
  marginBottom: '3rem',
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'var(--color-text-primary)',
  fontSize: '2.25rem',
  lineHeight: 1.1,
  margin: '0.75rem 0 0',
}

const stepNumberStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'var(--color-text-accent)',
  fontSize: '3rem',
  lineHeight: 1,
  marginBottom: '0.75rem',
}

const stepTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'var(--color-text-primary)',
  fontSize: '1.25rem',
  margin: '0 0 0.5rem',
}

const stepDescStyle: React.CSSProperties = {
  color: 'var(--color-text-secondary)',
  fontSize: '0.9375rem',
  lineHeight: 1.6,
  margin: 0,
}

const steps = [
  {
    number: '01',
    title: 'Discover Missions',
    description:
      'Browse curated Mars-enabling projects, each vetted for scientific credibility and team capability.',
  },
  {
    number: '02',
    title: 'Back a Project',
    description:
      'Commit capital starting from $50. Track milestones and funding progress in real time.',
  },
  {
    number: '03',
    title: 'Watch History Happen',
    description:
      'Receive milestone updates as funded teams build the technologies that will take humanity to Mars.',
  },
]

export function HowItWorksSection() {
  return (
    <section style={sectionStyle} aria-label="How It Works">
      <div style={innerStyle}>
        <div style={headerStyle}>
          <SectionLabel number="03" title="The Process" />
          <h2 style={headingStyle}>How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.number} accent>
              <div style={stepNumberStyle} aria-hidden="true">
                {step.number}
              </div>
              <h3 style={stepTitleStyle}>{step.title}</h3>
              <p style={stepDescStyle}>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
