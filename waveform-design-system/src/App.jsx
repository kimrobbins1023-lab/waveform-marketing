import React from 'react';
import { Navigation, HeroSection, ServiceCard, PricingTable, H1, H2, Body, Note } from './components/index.js';
import { colors, spacing } from './tokens/index.js';

// ── Data ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
];

const services = [
  {
    label: 'One-time',
    title: 'Digital Presence Audit',
    price: '$750',
    type: 'One-time',
    description:
      'Website, Google Business Profile, SEO/AEO metadata, booking/lead flow reviewed and delivered as a PDF report with prioritized next steps.',
    includes: [
      'Screaming Frog crawl + GA4 analysis',
      'Written PDF report (5 business days)',
      'Prioritized findings with recommended actions',
      'Proposed site map, timeline & investment summary',
    ],
    cta: 'Start with an audit',
  },
  {
    label: 'Retainer',
    title: 'Marketing Operations Partner',
    price: '$1,800/mo',
    type: 'Retainer',
    featured: true,
    description:
      'Own the infrastructure, optimize lead flow, and get strategic thinking every month. Ideal for studios that have a working foundation and want it growing.',
    includes: [
      'Everything in Care Plan',
      'New sections within existing pages',
      'Monthly 30-min strategy call',
      'Lead workflow setup and optimization',
      'Monthly SEO/AEO monitoring report',
      'Email template assistance',
    ],
    cta: 'Let\'s talk',
  },
  {
    label: 'Retainer',
    title: 'Full Partner',
    price: '$2,800/mo',
    type: 'Retainer',
    description:
      'Kim embedded in your studio. New pages, blog management, email campaign management, and deeper monthly reporting. For owners who want to hand it off.',
    includes: [
      'Everything in Ops Partner',
      'New pages built',
      'Blog management + SEO/AEO per post',
      'Email campaign management',
      'Bi-monthly strategy sessions',
      'Combined website + email + lead reporting',
    ],
    cta: 'Learn more',
  },
];

const comparisonHeaders = ['Feature', 'Care Plan\n$500/mo', 'Ops Partner\n$1,800/mo', 'Full Partner\n$2,800/mo'];
const comparisonRows = [
  { feature: 'Text, image, schedule updates', values: ['Yes', 'Yes', 'Yes'] },
  { feature: 'Link fixes, form updates', values: ['Yes', 'Yes', 'Yes'] },
  { feature: 'New sections within existing pages', values: ['No', 'Yes', 'Yes'] },
  { feature: 'Promotional/seasonal page updates', values: ['No', 'Yes', 'Yes'] },
  { feature: 'New pages', values: ['No', 'No', 'Yes'] },
  { feature: 'Blog publishing + SEO/AEO', values: ['No', 'No', 'Yes'] },
  { feature: 'Monthly 30-min strategy call', values: ['No', 'Yes', 'Yes'] },
  { feature: 'Lead workflow setup + optimization', values: ['No', 'Yes', 'Yes'] },
  { feature: 'Monthly SEO/AEO report (PDF)', values: ['Yes', 'Yes', 'Yes'] },
  { feature: 'Email newsletter management', values: ['+$400/mo', '+$400/mo', 'Included'] },
];

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', background: colors.white }}>
      <Navigation
        links={navLinks}
        cta={{ label: 'Get in touch', href: '#contact' }}
      />

      <HeroSection
        eyebrow="South Shore MA · Boutique Fitness Studios"
        headline="Marketing that works as hard as your clients do."
        subheadline="Professional growth marketing, website management, and marketing operations for boutique fitness studios — backed by 10+ years of experience."
        primaryCta={{ label: 'Start with an audit →', href: '#contact' }}
        secondaryCta={{ label: 'See services', href: '#services' }}
      />

      {/* Services */}
      <section
        id="services"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: `${spacing[16]} ${spacing[8]}`,
        }}
      >
        <H1 style={{ marginBottom: spacing[4] }}>Services</H1>
        <Body style={{ maxWidth: '600px', marginBottom: spacing[10] }}>
          From a one-time audit to full embedded partnership — choose the level of support that fits where you are right now.
        </Body>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing[6],
            alignItems: 'start',
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section
        style={{
          background: colors.offWhite,
          padding: `${spacing[16]} ${spacing[8]}`,
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <H1 style={{ marginBottom: spacing[4] }}>Retainer Comparison</H1>
          <Note style={{ marginBottom: spacing[8] }}>
            All retainers are scope-based, not hours-based. If your needs consistently exceed the scope, we'll have an upgrade conversation.
          </Note>
          <PricingTable headers={comparisonHeaders} rows={comparisonRows} />
        </div>
      </section>
    </div>
  );
}
