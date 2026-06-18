import React, { useState } from 'react';
import { colors, typography, borderRadius, shadows, spacing } from '../tokens/index.js';
import { H2, Body, Label } from './Typography.jsx';
import { Button } from './Button.jsx';

/**
 * ServiceCard
 * Use for displaying a single service offering.
 *
 * Props:
 *   label       — eyebrow text e.g. "Retainer"
 *   title       — service name e.g. "Marketing Operations Partner"
 *   price       — display price e.g. "$1,800/mo"
 *   type        — "One-time" | "Retainer" | "Add-on"
 *   description — short paragraph
 *   includes    — string[] of bullet items
 *   cta         — button label, default "Learn more"
 *   onCta       — click handler
 *   featured    — bool, highlights as recommended tier
 */
export function ServiceCard({
  label,
  title,
  price,
  type,
  description,
  includes = [],
  cta = 'Learn more',
  onCta,
  featured = false,
  style,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: featured ? colors.navy : colors.white,
        borderRadius: borderRadius.lg,
        boxShadow: hovered ? shadows.xl : featured ? shadows.lg : shadows.md,
        border: featured ? 'none' : `1px solid ${colors.lightGray || '#E8E6E2'}`,
        padding: spacing[8],
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[4],
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'none',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Eyebrow + type badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {label && (
          <Label style={{ color: featured ? colors.granite : colors.slate }}>
            {label}
          </Label>
        )}
        {type && (
          <span
            style={{
              fontSize: typography.sizes.xs,
              fontWeight: typography.weights.medium,
              color: featured ? colors.granite : colors.granite,
              background: featured ? 'rgba(255,255,255,0.1)' : colors.offWhite,
              padding: '0.2em 0.6em',
              borderRadius: borderRadius.full,
            }}
          >
            {type}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        style={{
          margin: 0,
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.xl,
          fontWeight: typography.weights.bold,
          color: featured ? colors.white : colors.navy,
          lineHeight: typography.lineHeights.snug,
        }}
      >
        {title}
      </h3>

      {/* Price */}
      {price && (
        <div>
          <span
            style={{
              fontFamily: typography.fontFamily,
              fontSize: typography.sizes['2xl'],
              fontWeight: typography.weights.bold,
              color: featured ? colors.white : colors.navy,
            }}
          >
            {price}
          </span>
        </div>
      )}

      {/* Description */}
      {description && (
        <p
          style={{
            margin: 0,
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.base,
            color: featured ? 'rgba(255,255,255,0.8)' : colors.dark,
            lineHeight: typography.lineHeights.relaxed,
          }}
        >
          {description}
        </p>
      )}

      {/* Includes list */}
      {includes.length > 0 && (
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: spacing[2],
          }}
        >
          {includes.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: spacing[2],
                fontFamily: typography.fontFamily,
                fontSize: typography.sizes.sm,
                color: featured ? 'rgba(255,255,255,0.75)' : colors.dark,
                lineHeight: typography.lineHeights.normal,
              }}
            >
              <span
                style={{
                  color: featured ? colors.granite : colors.slate,
                  flexShrink: 0,
                  marginTop: '0.15em',
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <Button
          variant={featured ? 'secondary' : 'primary'}
          onClick={onCta}
          fullWidth
          style={{
            marginTop: 'auto',
            ...(featured && {
              border: `2px solid ${colors.white}`,
              color: colors.white,
            }),
          }}
        >
          {cta}
        </Button>
      )}
    </div>
  );
}
