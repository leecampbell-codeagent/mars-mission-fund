# Tasks: Issue #4 — Build Homepage, About, and Contact pages

Brief: plan/ready/brief.md

## Checklist

- [x] TASK-01: Create HeroSection component
  - **Goal**: Full-viewport hero section with gradient background, Bebas Neue heading, subtext, primary CTA button, and ambient glow element
  - **Details**:
    - Create `src/components/HeroSection.tsx`
    - Background: `var(--gradient-hero)` spanning full viewport height (`min-h-screen`)
    - Heading: "FUND THE NEXT GIANT LEAP" in Bebas Neue — `text-5xl` (48px) mobile → `md:text-7xl` (72px) → `xl:text-9xl` (96px); colour `var(--color-text-primary)`
    - Subtext: "Mars Mission Fund channels collective capital toward the missions, technologies, and teams making interplanetary life possible."
    - Primary `<Button>` linking to `#` with text "Back a Mission"
    - Decorative ambient glow `<div>` with CSS animation using `var(--motion-ambient)`; animation must be disabled with `@media (prefers-reduced-motion: reduce)` using an inline style or a CSS class
    - All colours and motion values via `var(--…)` tokens only
  - **Files**: `src/components/HeroSection.tsx`
  - **Verify**: Component renders without TypeScript errors; visible gradient background, large heading, CTA button, and glow element present; glow animation plays in browser
  - **Brief ref**: Approach step 1

- [x] TASK-02: Create StatsSection component
  - **Goal**: Statistics section with a SectionLabel, heading, and four StatCard components in a responsive grid
  - **Details**:
    - Create `src/components/StatsSection.tsx`
    - Import and use `SectionLabel` and `StatCard` from `src/components/ui/`
    - `SectionLabel` text: "BY THE NUMBERS"
    - Section heading: "The Scale of Our Mission"
    - Four `StatCard` entries (use `var(--…)` accent colours):
      1. value="$2.4M" label="Total Raised" accent (pick a token colour)
      2. value="1,847" label="Mission Backers"
      3. value="12" label="Active Campaigns"
      4. value="94%" label="Milestone Success Rate"
    - Grid: 1 column → `sm:grid-cols-2` → `lg:grid-cols-4`
  - **Files**: `src/components/StatsSection.tsx`
  - **Verify**: Four stat cards display in a single row on wide screens and wrap on mobile; section label and heading visible
  - **Brief ref**: Approach step 2

- [x] TASK-03: Create HowItWorksSection component
  - **Goal**: Three-step explainer section using Card components with accent bars, section label, and heading
  - **Details**:
    - Create `src/components/HowItWorksSection.tsx`
    - Import `SectionLabel` and `Card` from the appropriate paths
    - `SectionLabel` text: "THE PROCESS"
    - Heading: "How It Works"
    - Three `Card` components (with accent bar variant if the Card component supports it) arranged in a responsive grid (1 → `md:grid-cols-3`):
      1. Step "01" — title: "Discover Missions", description: "Browse curated Mars-enabling projects, each vetted for scientific credibility and team capability."
      2. Step "02" — title: "Back a Project", description: "Commit capital starting from $50. Track milestones and funding progress in real time."
      3. Step "03" — title: "Watch History Happen", description: "Receive milestone updates as funded teams build the technologies that will take humanity to Mars."
    - Step numbers styled prominently using a design token for accent/muted colour
  - **Files**: `src/components/HowItWorksSection.tsx`
  - **Verify**: Three step cards render in a row on desktop and stack on mobile; step numbers, titles, and descriptions are visible
  - **Brief ref**: Approach step 3

- [x] TASK-04: Create MissionCard composite component
  - **Goal**: Reusable campaign card compositing Card, Badge, ProgressBar, and a ghost Button
  - **Details**:
    - Create `src/components/MissionCard.tsx`
    - Props interface: `{ title: string; category: string; description: string; raised: string; goal: string; progress: number; backers: number }`
    - Render a `Card` wrapping:
      - `Badge` showing the `category` prop
      - Mission `title` (heading element)
      - Short `description` text
      - `ProgressBar` with the `progress` prop; must include `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, and `aria-label`
      - Funding status line: "{raised} raised of {goal}" + "{backers} backers"
      - Ghost variant `Button` with text "View Mission" linking to `#`
    - All values via tokens; no hardcoded colours
  - **Files**: `src/components/MissionCard.tsx`
  - **Verify**: Component accepts all props and renders without TypeScript errors; ProgressBar ARIA attributes are present in the DOM
  - **Brief ref**: Approach step 4 (MissionCard sub-task)

- [x] TASK-05: Create FeaturedMissionsSection component
  - **Goal**: Grid of three MissionCard components with section label and heading
  - **Details**:
    - Create `src/components/FeaturedMissionsSection.tsx`
    - Import `SectionLabel` and `MissionCard`
    - `SectionLabel` text: "FEATURED MISSIONS"
    - Heading: "Current Campaigns"
    - Three `MissionCard` entries with static placeholder data:
      1. title="Helios Propulsion Array", category="Propulsion", description="Next-generation ion drive array designed for sustained Mars-transit velocity with 40% reduced fuel consumption.", raised="$840,000", goal="$1,200,000", progress=70, backers=412
      2. title="RedSoil Biotech Lab", category="Life Support", description="Closed-loop soil microbiome research enabling food production in Martian regolith with minimal water input.", raised="$310,000", goal="$500,000", progress=62, backers=287
      3. title="Orbital Relay Network", category="Communications", description="Low-latency relay satellite constellation providing continuous Earth-Mars data link for mission-critical telemetry.", raised="$1,250,000", goal="$2,000,000", progress=63, backers=891
    - Grid: 1 column → `md:grid-cols-2` → `lg:grid-cols-3`
  - **Files**: `src/components/FeaturedMissionsSection.tsx`
  - **Verify**: Three mission cards render; each card shows badge, progress bar, and ghost button
  - **Brief ref**: Approach step 4

- [x] TASK-06: Create ClosingCtaSection component
  - **Goal**: Closing section with deep background, heading, subtext, and secondary CTA button
  - **Details**:
    - Create `src/components/ClosingCtaSection.tsx`
    - Background: `var(--color-bg-surface)` or a deep/dark token — distinct from main page background
    - Heading: "Ready to Fund the Future?"
    - Subtext: "Join 1,847 backers already powering humanity's next chapter. Every contribution moves the mission forward."
    - Secondary variant `<Button>` with text "Explore All Missions" linking to `#`
    - Centred layout; generous vertical padding
    - This is NOT a primary CTA — use secondary button variant
  - **Files**: `src/components/ClosingCtaSection.tsx`
  - **Verify**: Section renders with visually distinct background; heading, subtext, and secondary button visible
  - **Brief ref**: Approach step 5

- [x] TASK-07: Create HomePage assembling all five sections
  - **Goal**: HomePage page file that imports and assembles all five homepage sections inside the Layout shell
  - **Details**:
    - Create `src/pages/HomePage.tsx`
    - Import `Layout` from `src/components/` and all five section components: `HeroSection`, `StatsSection`, `HowItWorksSection`, `FeaturedMissionsSection`, `ClosingCtaSection`
    - Render them in order inside `<Layout>`: Hero → Stats → HowItWorks → FeaturedMissions → ClosingCta
    - No inline copy or data in this file — all content is encapsulated in section components
    - Ensure the page compiles without TypeScript errors
  - **Files**: `src/pages/HomePage.tsx` (create), `src/pages/` directory if not present
  - **Verify**: File imports resolve; `npm run build` passes; visiting `/` in dev server shows all five sections stacked vertically
  - **Brief ref**: Files table row 1 + Approach step 1–5

- [x] TASK-08: Create AboutPage with four inline sections
  - **Goal**: AboutPage file with four sections (Mission, Problem/Solution, Principles, Who We Serve) built directly in the page file
  - **Details**:
    - Create `src/pages/AboutPage.tsx`
    - Import `Layout`, `Card`, `SectionLabel` (and `Badge` if useful)
    - No separate section component files — all four sections are inline JSX within the page
    - **Section 1 — Mission**: `SectionLabel` "OUR MISSION" + heading "Funding Humanity's Journey to Mars" + paragraph from L1-001 §1.1 vision statement + §2.1 mission statement
    - **Section 2 — Problem / Solution**: `SectionLabel` "THE CHALLENGE" + heading "Bridging the Funding Gap" + two-column layout (or stacked mobile) with "The Problem" and "Our Solution" as `Card` components; copy from L1-001 §1.2
    - **Section 3 — Principles**: `SectionLabel` "WHAT WE STAND FOR" + heading "Our Strategic Principles" + grid of 5 `Card` components, one per principle from L1-001 §1.4 (Security as Foundation, Transparency as Currency, Accessibility Over Exclusivity, Curation Over Volume, Bold but Responsible)
    - **Section 4 — Who We Serve**: `SectionLabel` "WHO WE SERVE" + heading "Built for Every Stakeholder" + grid of 4 `Card` components, one per persona from L1-001 §1.3 (Mission Backers, Project Creators, Institutional Partners, Platform Administrators)
    - Responsive grids: principles 1 → `sm:grid-cols-2` → `lg:grid-cols-3`; personas 1 → `sm:grid-cols-2`
    - All tokens via `var(--…)`; no forbidden language per L2-001 §4
  - **Files**: `src/pages/AboutPage.tsx`
  - **Verify**: `npm run build` passes; visiting `/about` shows four labelled sections; 5 principle cards and 4 persona cards visible
  - **Brief ref**: Approach step 6; Files table row 2

- [x] TASK-09: Create ContactPage with two inline sections
  - **Goal**: ContactPage file with contact info cards and social links sections built directly in the page file
  - **Details**:
    - Create `src/pages/ContactPage.tsx`
    - Import `Layout`, `Card`, `SectionLabel`
    - No separate section component files
    - **Section 1 — Contact Info**: `SectionLabel` "GET IN TOUCH" + heading "Contact Us" + grid of 3 `Card` components:
      1. Email — "hello@marsmissionfund.com" with label "General Enquiries"
      2. Address — "Mission Control, 1 Launchpad Way, Cape Canaveral, FL 32920" with label "Headquarters"
      3. Hours — "Monday – Friday, 09:00 – 18:00 EST" with label "Office Hours"
    - **Section 2 — Social Links**: `SectionLabel` "FOLLOW THE MISSION" + heading "Stay Connected" + row of social link items (Twitter/X, LinkedIn, YouTube, Discord) rendered as styled links (not a form); use icon placeholder text or emoji sparingly only if brief permits — otherwise use text labels only
    - No contact form — static info only
    - No hardcoded colours; tokens throughout
  - **Files**: `src/pages/ContactPage.tsx`
  - **Verify**: `npm run build` passes; visiting `/contact` shows two sections; three info cards and social links visible; no form element present
  - **Brief ref**: Approach step 7; Files table row 3

- [x] TASK-10: Update App.tsx to import pages and remove inline stubs
  - **Goal**: Replace the three inline page stub components in App.tsx with imports from src/pages/
  - **Details**:
    - Read `src/App.tsx` in full before editing
    - Identify the inline `HomePage`, `AboutPage`, and `ContactPage` stub definitions (functions returning minimal JSX)
    - Delete the inline stub definitions
    - Add import statements at the top of the file:
      ```ts
      import HomePage from './pages/HomePage'
      import AboutPage from './pages/AboutPage'
      import ContactPage from './pages/ContactPage'
      ```
    - The route `<Route>` / `<Switch>` elements should already reference these component names; confirm they still resolve correctly
    - Do not change routing logic, TitleUpdater, Header, Footer, or any other existing structure
  - **Files**: `src/App.tsx`
  - **Verify**: `npm run build` completes with zero TypeScript errors; `npm run dev` serves `/`, `/about`, `/contact` correctly; document title updates on navigation
  - **Brief ref**: Approach step 8; Files table — App.tsx modify

- [x] TASK-11: Visual and accessibility verification across all three pages
  - **Goal**: Confirm all pages meet the visual, responsive, and accessibility requirements from the brief
  - **Details**:
    - Run `npm run build` — must complete with no errors
    - Start `npm run dev` and open the browser
    - **Homepage** (`/`): Verify hero fills viewport with gradient + Bebas Neue heading; 4 stat cards in responsive grid; 3 how-it-works step cards; 3 mission cards with badge, progress bar, and ghost button; closing CTA section with secondary button
    - **About** (`/about`): Verify 4 labelled sections; 5 principle cards; 4 persona cards
    - **Contact** (`/contact`): Verify 3 info cards; social links section; no form element
    - **Navigation**: Click Header nav links — SPA transitions work; document title updates (check browser tab)
    - **Accessibility spot-checks**:
      - In DevTools, confirm ProgressBar elements have `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`
      - Confirm Badge decorative dot elements have `aria-hidden="true"` if dots are present
      - Tab through interactive elements on each page — all must show visible focus rings
    - **Token audit**: Grep for any hardcoded hex colours or px font sizes in newly created files; there should be none
    - Fix any issues found before marking complete
  - **Files**: Any files needing fixes identified during verification
  - **Verify**: All checks above pass; `npm run build` exits 0; no hardcoded visual values in new files
  - **Brief ref**: Verification section of brief
