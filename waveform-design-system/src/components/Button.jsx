import React, { useState } from 'react';
import { colors, typography, borderRadius, shadows } from '../tokens/index.js';

const variants = {
  primary: {
    background: colors.navy,
    color: colors.white,
    border: 'none',
    hoverBg: '#243347',
  },
  secondary: {
    background: 'transparent',
    color: colors.navy,
    border: `2px solid ${colors.navy}`,
    hoverBg: colors.offWhite,
  },
  ghost: {
    background: 'transparent',
    color: colors.slate,
    border: 'none',
    hoverBg: colors.offWhite,
  },
};

const sizes = {
  sm: { fontSize: typography.sizes.sm, padding: '0.5rem 1rem' },
  md: { fontSize: typography.sizes.base, padding: '0.75rem 1.5rem' },
  lg: { fontSize: typography.sizes.lg, padding: '1rem 2rem' },
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  href,
  style,
  disabled = false,
}) {
  const [hovered, setHovered] = useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: typography.fontFamily,
    fontWeight: typography.weights.semibold,
    fontSize: s.fontSize,
    padding: s.padding,
    borderRadius: borderRadius.md,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'background 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
    background: hovered && !disabled ? v.hoverBg : v.background,
    color: v.color,
    border: v.border || 'none',
    boxShadow: hovered && !disabled && variant === 'primary' ? shadows.md : 'none',
    ...style,
  };

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}
