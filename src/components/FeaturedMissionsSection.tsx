import { SectionLabel } from './ui/SectionLabel'
import { MissionCard } from './MissionCard'

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

export function FeaturedMissionsSection() {
  return (
    <section style={sectionStyle} aria-label="Featured Missions">
      <div style={innerStyle}>
        <div style={headerStyle}>
          <SectionLabel number="04" title="Featured Missions" />
          <h2 style={headingStyle}>Current Campaigns</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MissionCard
            title="Helios Propulsion Array"
            category="Propulsion"
            description="Next-generation ion drive array designed for sustained Mars-transit velocity with 40% reduced fuel consumption."
            raised="$840,000"
            goal="$1,200,000"
            progress={70}
            backers={412}
          />
          <MissionCard
            title="RedSoil Biotech Lab"
            category="Life Support"
            description="Closed-loop soil microbiome research enabling food production in Martian regolith with minimal water input."
            raised="$310,000"
            goal="$500,000"
            progress={62}
            backers={287}
          />
          <MissionCard
            title="Orbital Relay Network"
            category="Communications"
            description="Low-latency relay satellite constellation providing continuous Earth-Mars data link for mission-critical telemetry."
            raised="$1,250,000"
            goal="$2,000,000"
            progress={63}
            backers={891}
          />
        </div>
      </div>
    </section>
  )
}
