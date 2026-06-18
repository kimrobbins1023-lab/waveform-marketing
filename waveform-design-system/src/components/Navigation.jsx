import React, { useState } from 'react';
import { colors, typography, spacing } from '../tokens/index.js';

/**
 * Navigation
 * Top nav bar for the Waveform Marketing website.
 *
 * Props:
 *   links   — Array<{ label: string, href: string }>
 *   cta     — { label: string, href: string }
 */
export function Navigation({ links = [], cta, style }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colors.white,
        borderBottom: `1px solid ${colors.lightGray || '#E8E6E2'}`,
        padding: `${spacing[4]} ${spacing[8]}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: typography.fontFamily,
        ...style,
      }}
    >
      {/* Logo / wordmark */}
      <a
        href="/"
        style={{
          textDecoration: 'none',
          fontWeight: typography.weights.bold,
          fontSize: typography.sizes.lg,
          color: colors.navy,
          letterSpacing: '-0.01em',
        }}
      >
        Waveform
      </a>

      {/* Desktop links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing[8],
        }}
      >
        <div style={{ display: 'flex', gap: spacing[6] }}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={{
                textDecoration: 'none',
                fontSize: typography.sizes.base,
                fontWeight: typography.weights.medium,
                color: colors.slate,
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => (e.target.style.color = colors.navy)}
              onMouseLeave={e => (e.target.style.color = colors.slate)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {cta && (
          <a
            href={cta.href}
            style={{
              textDecoration: 'none',
              fontSize: typography.sizes.sm,
              fontWeight: typography.weights.semibold,
              color: colors.white,
              background: colors.navy,
              padding: `${spacing[2]} ${spacing[5]}`,
              borderRadius: '0.375rem',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={e => (e.target.style.background = '#243347')}
            onMouseLeave={e => (e.target.style.background = colors.navy)}
          >
            {cta.label}
          </a>
        )}
      </div>
    </nav>
  );
}
