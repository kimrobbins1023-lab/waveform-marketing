import React from 'react';
import { colors, typography, spacing } from '../tokens/index.js';
import { Display, Lead } from './Typography.jsx';
import { Button } from './Button.jsx';

/**
 * HeroSection
 *
 * Props:
 *   eyebrow     — small label above the headline
 *   headline    — main hero text
 *   subheadline — supporting paragraph
 *   primaryCta  — { label, href }
 *   secondaryCta — { label, href }
 *   style
 */
export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  style,
}) {
  return (
    <section
      style={{
        background: colors.white,
        padding: `${spacing[24]} ${spacing[8]}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '860px',
        margin: '0 auto',
        ...style,
      }}
    >
      {eyebrow && (
        <span
          style={{
            display: 'inline-block',
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.xs,
            fontWeight: typography.weights.semibold,
            color: colors.slate,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: spacing[4],
            background: colors.offWhite,
            padding: `${spacing[1]} ${spacing[3]}`,
            borderRadius: '9999px',
          }}
        >
          {eyebrow}
        </span>
      )}

      <Display style={{ marginBottom: spacing[6] }}>{headline}</Display>

      {subheadline && (
        <Lead style={{ maxWidth: '600px', marginBottom: spacing[8] }}>
          {subheadline}
        </Lead>
      )}

      <div style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap', justifyContent: 'center' }}>
        {primaryCta && (
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
        )}
        {secondaryCta && (
          <Button href={secondaryCta.href} variant="secondary" size="lg">
            {secondaryCta.label}
          </Button>
        )}
      </div>
    </section>
  );
}
