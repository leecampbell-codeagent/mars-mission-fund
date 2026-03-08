import { SectionLabel } from './ui/SectionLabel'
import { StatCard } from './ui/StatCard'

const sectionStyle: React.CSSProperties = {
  background: 'var(--color-bg-base)',
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

export function StatsSection() {
  return (
    <section style={sectionStyle} aria-label="Statistics">
      <div style={innerStyle}>
        <div style={headerStyle}>
          <SectionLabel number="02" title="By the Numbers" />
          <h2 style={headingStyle}>The Scale of Our Mission</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard value="$2.4M" label="Total Raised" variant="positive" />
          <StatCard value="1,847" label="Mission Backers" />
          <StatCard value="12" label="Active Campaigns" />
          <StatCard value="94%" label="Milestone Success Rate" variant="positive" />
        </div>
      </div>
    </section>
  )
}
