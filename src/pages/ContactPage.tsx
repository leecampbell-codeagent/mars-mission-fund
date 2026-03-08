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

const cardLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  color: 'var(--color-text-tertiary)',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  margin: '0 0 0.5rem',
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

const socialLinkStyle: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-mono)',
  color: 'var(--color-text-accent)',
  fontSize: '0.875rem',
  fontWeight: 700,
  textDecoration: 'none',
  letterSpacing: '0.04em',
  padding: '0.75rem 1.5rem',
  border: '1px solid var(--color-border-subtle)',
  borderRadius: 'var(--radius-card)',
  background: 'var(--color-bg-elevated)',
}

export default function ContactPage() {
  return (
    <>
      {/* Section 1 — Contact Info */}
      <section style={sectionStyle} aria-label="Contact Us">
        <div style={innerStyle}>
          <div style={headerStyle}>
            <SectionLabel number="01" title="Get in Touch" />
            <h1 style={headingStyle}>Contact Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card accent>
              <p style={cardLabelStyle}>General Enquiries</p>
              <h2 style={cardHeadingStyle}>Email</h2>
              <p style={cardBodyStyle}>hello@marsmissionfund.com</p>
            </Card>
            <Card accent>
              <p style={cardLabelStyle}>Headquarters</p>
              <h2 style={cardHeadingStyle}>Address</h2>
              <p style={cardBodyStyle}>
                Mission Control
                <br />
                1 Launchpad Way
                <br />
                Cape Canaveral, FL 32920
              </p>
            </Card>
            <Card accent>
              <p style={cardLabelStyle}>Office Hours</p>
              <h2 style={cardHeadingStyle}>Hours</h2>
              <p style={cardBodyStyle}>Monday – Friday<br />09:00 – 18:00 EST</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2 — Social Links */}
      <section style={altSectionStyle} aria-label="Stay Connected">
        <div style={innerStyle}>
          <div style={headerStyle}>
            <SectionLabel number="02" title="Follow the Mission" />
            <h2 style={headingStyle}>Stay Connected</h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <a
              href="#"
              style={socialLinkStyle}
              aria-label="Follow Mars Mission Fund on X (Twitter)"
            >
              X / Twitter
            </a>
            <a
              href="#"
              style={socialLinkStyle}
              aria-label="Follow Mars Mission Fund on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              style={socialLinkStyle}
              aria-label="Subscribe to Mars Mission Fund on YouTube"
            >
              YouTube
            </a>
            <a
              href="#"
              style={socialLinkStyle}
              aria-label="Join the Mars Mission Fund Discord community"
            >
              Discord
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
