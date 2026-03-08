import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { ProgressBar } from './ui/ProgressBar'
import { Button } from './ui/Button'

type Props = {
  title: string
  category: string
  description: string
  raised: string
  goal: string
  progress: number
  backers: number
}

export function MissionCard({ title, category, description, raised, goal, progress, backers }: Props) {
  return (
    <Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <Badge variant="active">{category}</Badge>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text-primary)',
            fontSize: '1.25rem',
            letterSpacing: '0.02em',
            margin: 0,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)',
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </p>

        <div>
          <ProgressBar
            value={progress}
            max={100}
            aria-label={`${title} funding progress: ${progress}%`}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-secondary)',
              fontSize: '0.875rem',
            }}
          >
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{raised}</span>
            {' raised of '}
            {goal}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-muted)',
              fontSize: '0.8125rem',
            }}
          >
            {backers.toLocaleString()} backers
          </span>
        </div>

        <div>
          <Button href="#" variant="ghost">
            View Mission
          </Button>
        </div>
      </div>
    </Card>
  )
}
