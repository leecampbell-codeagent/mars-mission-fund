import { Card } from '../components/ui/Card'
import { SectionLabel } from '../components/ui/SectionLabel'

const sectionStyle: React.CSSProperties = {
  padding: '5rem 1.5rem',
}

const altSectionStyle: React.CSSProperties = {
  padding: '5rem 1.5rem',
  background: 'var(--color-bg-surface)',
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

const bodyStyle: React.CSSProperties = {
  color: 'var(--color-text-secondary)',
  lineHeight: 1.7,
  margin: '1rem 0 0',
  maxWidth: '52rem',
}

const cardHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'var(--color-text-primary)',
  fontSize: '1.25rem',
  lineHeight: 1.2,
  margin: '0 0 0.75rem',
}

const cardBodyStyle: React.CSSProperties = {
  color: 'var(--color-text-secondary)',
  lineHeight: 1.6,
  margin: 0,
}

const cardLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  color: 'var(--color-text-tertiary)',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  margin: '0 0 0.5rem',
}

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Mission */}
      <section style={sectionStyle} aria-label="Our Mission">
        <div style={innerStyle}>
          <div style={headerStyle}>
            <SectionLabel number="01" title="Our Mission" />
            <h1 style={headingStyle}>Funding Humanity's Journey to Mars</h1>
          </div>
          <p style={bodyStyle}>
            Mars Mission Fund exists to become the world's most trusted platform for collectively
            funding humanity's journey to Mars — turning everyday backers into mission backers who
            power the engineering, science, and infrastructure that will make interplanetary life
            possible.
          </p>
          <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
            Our mission is to build and operate a secure, regulation-ready crowdfunding platform
            that enables vetted Mars-mission projects to raise capital from a global community of
            backers — with institutional-grade security, transparent governance, and an experience
            that makes complex financial participation feel as immediate as a countdown to launch.
          </p>
        </div>
      </section>

      {/* Section 2 — Problem / Solution */}
      <section style={altSectionStyle} aria-label="The Challenge">
        <div style={innerStyle}>
          <div style={headerStyle}>
            <SectionLabel number="02" title="The Challenge" />
            <h2 style={headingStyle}>Bridging the Funding Gap</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card accent>
              <p style={cardLabelStyle}>The Problem</p>
              <h3 style={cardHeadingStyle}>Brilliant Ideas, Blocked by Capital</h3>
              <p style={cardBodyStyle}>
                Space exploration has historically been the domain of nation-states and a handful
                of billionaire-backed ventures. The result is a bottleneck: brilliant teams with
                viable Mars-enabling technologies struggle to find funding, while millions of people
                who care deeply about humanity's future have no meaningful way to contribute capital
                toward specific missions.
              </p>
            </Card>
            <Card accent>
              <p style={cardLabelStyle}>Our Solution</p>
              <h3 style={cardHeadingStyle}>A Platform Built for the Mission</h3>
              <p style={cardBodyStyle}>
                Mars Mission Fund bridges this gap by creating a secure, transparent, and
                purpose-built crowdfunding platform exclusively focused on Mars-bound projects. We
                give capital a direction and give ambition a launchpad — connecting backers who
                care about humanity's future with the teams building it.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3 — Principles */}
      <section style={sectionStyle} aria-label="Our Strategic Principles">
        <div style={innerStyle}>
          <div style={headerStyle}>
            <SectionLabel number="03" title="What We Stand For" />
            <h2 style={headingStyle}>Our Strategic Principles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <h3 style={cardHeadingStyle}>Security as Foundation</h3>
              <p style={cardBodyStyle}>
                Every line of code, every workflow, every integration is built on a security-first
                architecture. In a financial platform, trust is not a feature — it is the product.
              </p>
            </Card>
            <Card>
              <h3 style={cardHeadingStyle}>Transparency as Currency</h3>
              <p style={cardBodyStyle}>
                Backers see exactly where their money goes. Projects report milestones publicly.
                The platform itself is auditable and explainable at every step.
              </p>
            </Card>
            <Card>
              <h3 style={cardHeadingStyle}>Accessibility Over Exclusivity</h3>
              <p style={cardBodyStyle}>
                A $50 contribution and a $50,000 institutional commitment both matter. The platform
                democratises access to space funding for backers everywhere.
              </p>
            </Card>
            <Card>
              <h3 style={cardHeadingStyle}>Curation Over Volume</h3>
              <p style={cardBodyStyle}>
                We are not a marketplace for everything. Every project is reviewed, vetted, and
                approved before going live. Quality over quantity, always.
              </p>
            </Card>
            <Card>
              <h3 style={cardHeadingStyle}>Bold but Responsible</h3>
              <p style={cardBodyStyle}>
                Our brand is bold and optimistic, but our financial systems are cautious and
                compliant. We speak like engineers who dream big and build carefully.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4 — Who We Serve */}
      <section style={altSectionStyle} aria-label="Who We Serve">
        <div style={innerStyle}>
          <div style={headerStyle}>
            <SectionLabel number="04" title="Who We Serve" />
            <h2 style={headingStyle}>Built for Every Stakeholder</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card accent>
              <h3 style={cardHeadingStyle}>Mission Backers</h3>
              <p style={cardBodyStyle}>
                Individuals who want to fund specific Mars projects with as little as $50. Their
                primary need: transparency, trust, and a tangible connection to the mission they
                back.
              </p>
            </Card>
            <Card accent>
              <h3 style={cardHeadingStyle}>Project Creators</h3>
              <p style={cardBodyStyle}>
                Engineers, scientists, and teams building Mars-enabling technology. Their primary
                need: a credible platform to raise capital, gain visibility, and prove viability.
              </p>
            </Card>
            <Card accent>
              <h3 style={cardHeadingStyle}>Institutional Partners</h3>
              <p style={cardBodyStyle}>
                Space agencies, research institutions, and corporate sponsors. Their primary need:
                due diligence, compliance, and aggregated deal flow for strategic co-investment.
              </p>
            </Card>
            <Card accent>
              <h3 style={cardHeadingStyle}>Platform Administrators</h3>
              <p style={cardBodyStyle}>
                The internal team responsible for curation, compliance, and platform integrity.
                Their primary need: efficient review workflows, robust access control, and audit
                trails.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
