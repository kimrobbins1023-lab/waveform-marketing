import React from 'react';
import { colors, typography } from '../tokens/index.js';

const baseStyle = {
  fontFamily: typography.fontFamily,
  margin: 0,
};

// ── Display headline (hero) ──────────────────────────────────────────────────
export function Display({ children, style }) {
  return (
    <h1
      style={{
        ...baseStyle,
        fontSize: typography.sizes['4xl'],
        fontWeight: typography.weights.bold,
        color: colors.navy,
        lineHeight: typography.lineHeights.tight,
        letterSpacing: '-0.02em',
        ...style,
      }}
    >
      {children}
    </h1>
  );
}

// ── Page / section title ─────────────────────────────────────────────────────
export function H1({ children, style }) {
  return (
    <h2
      style={{
        ...baseStyle,
        fontSize: typography.sizes['2xl'],
        fontWeight: typography.weights.bold,
        color: colors.navy,
        lineHeight: typography.lineHeights.snug,
        borderBottom: `2px solid ${colors.navy}`,
        paddingBottom: '0.4em',
        marginBottom: '0.6em',
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

// ── Sub-section heading ──────────────────────────────────────────────────────
export function H2({ children, style }) {
  return (
    <h3
      style={{
        ...baseStyle,
        fontSize: typography.sizes.xl,
        fontWeight: typography.weights.semibold,
        color: colors.slate,
        lineHeight: typography.lineHeights.snug,
        marginBottom: '0.4em',
        ...style,
      }}
    >
      {children}
    </h3>
  );
}

// ── Body text ────────────────────────────────────────────────────────────────
export function Body({ children, italic = false, muted = false, style }) {
  return (
    <p
      style={{
        ...baseStyle,
        fontSize: typography.sizes.base,
        fontWeight: typography.weights.normal,
        color: muted ? colors.granite : colors.dark,
        fontStyle: italic ? 'italic' : 'normal',
        lineHeight: typography.lineHeights.relaxed,
        marginBottom: '0.5em',
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Lead / intro text ────────────────────────────────────────────────────────
export function Lead({ children, style }) {
  return (
    <p
      style={{
        ...baseStyle,
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.normal,
        color: colors.slate,
        lineHeight: typography.lineHeights.relaxed,
        marginBottom: '0.75em',
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Caption / note ───────────────────────────────────────────────────────────
export function Note({ children, style }) {
  return (
    <p
      style={{
        ...baseStyle,
        fontSize: typography.sizes.sm,
        fontWeight: typography.weights.normal,
        color: colors.granite,
        fontStyle: 'italic',
        lineHeight: typography.lineHeights.normal,
        borderLeft: `3px solid ${colors.lightGray || '#E8E6E2'}`,
        paddingLeft: '0.75em',
        marginBottom: '0.5em',
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Label / eyebrow ──────────────────────────────────────────────────────────
export function Label({ children, style }) {
  return (
    <span
      style={{
        ...baseStyle,
        display: 'inline-block',
        fontSize: typography.sizes.xs,
        fontWeight: typography.weights.semibold,
        color: colors.slate,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
