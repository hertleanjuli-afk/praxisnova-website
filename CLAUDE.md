# PraxisNova Website

## Project Overview
Marketing and service website for **praxisnovaai.com** - a German-language business automation service platform specializing in process automation for the construction and real estate sectors.

## Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **UI Library**: Geist, Framer Motion
- **CRM**: HubSpot (contact capture, lead scoring)
- **Email**: Brevo (transactional and marketing emails)
- **Calendar**: Calendly (meeting scheduling)

## Key Commands
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm start        # Run production build
npm run lint     # Run ESLint
```

## Brand Identity
- **Dark Background**: #0A0A0A
- **Primary Accent**: Coral #E8472A
- **Language**: German (de_DE)
- **Tone**: Professional, modern, automation-focused

## Skills
**Before starting ANY work, check `.claude/skills/` for auto-selected skills:**

**IMPORTANT: Before starting ANY task, scan .claude/skills/ and auto-select the most relevant skills. Always start with product-marketing-context to establish company context, then layer on task-specific skills.**

- `product-marketing-context` — establishes company/product context for all other skills
- `revops` — lead scoring, pipeline management, routing
- `sales-enablement` — pitch decks, objection handling, demo scripts
- `cold-email` — personalized outreach frameworks
- `pricing-strategy` — pricing models and optimization
- `email-sequence` — lifecycle, nurture, onboarding sequences
- `copywriting` — conversion-focused copy
- `copy-editing` — polish and refine content
- `social-content` — LinkedIn posts, carousels, engagement
- `content-strategy` — content planning and calendars
- `marketing-ideas` — brainstorm marketing campaigns
- `marketing-psychology` — persuasion and behavioral triggers
- `ad-creative` — ad copy and creative concepts
- `paid-ads` — paid advertising campaigns
- `launch-strategy` — product launches, PR, media outreach
- `seo-audit` — technical SEO analysis
- `ai-seo` — AI-optimized SEO strategies
- `programmatic-seo` — templated pages at scale
- `site-architecture` — information architecture
- `schema-markup` — structured data for search
- `page-cro` — landing page conversion optimization
- `signup-flow-cro` — registration flow optimization
- `form-cro` — form conversion optimization
- `onboarding-cro` — onboarding flow optimization
- `popup-cro` — popup conversion optimization
- `paywall-upgrade-cro` — upgrade flow optimization
- `customer-research` — customer interviews and insights
- `competitor-alternatives` — competitive analysis
- `ab-test-setup` — A/B testing frameworks
- `analytics-tracking` — measurement and tracking
- `lead-magnets` — lead generation assets
- `free-tool-strategy` — free tools for acquisition
- `referral-program` — referral system design
- `churn-prevention` — retention strategies
- `lead-research-assistant` — lead identification
- `artifacts-builder` — complex UI artifacts
- `brand-guidelines` — PraxisNova/PraxisAcademy brand colors and typography
- `competitive-ads-extractor` — competitor ad analysis
- `content-research-writer` — research-backed content

**To use a skill**: `Skill: artifacts-builder` or `Skill: content-research-writer`

## Key Features
- Service listings for construction/real estate automation
- Lead capture forms (HubSpot integration)
- Calendly booking integration
- Email nurture sequences (Brevo)
- Multi-language support (German primary)
- Performance optimized for conversion

## Directory Structure
- `/src` - Next.js app directory (pages, components, layouts)
- `/public` - Static assets
- `.claude/skills/` - Available skills for this project

## Development Notes
- HubSpot API keys in `.env.local` (not tracked)
- Brevo credentials for email templates
- Calendly embed configuration in environment
- Tailwind configured for brand colors
- Next.js 14+ using App Router
