import React from 'react';
import { colors, typography, borderRadius, shadows, spacing } from '../tokens/index.js';

/**
 * PricingTable
 * Renders the retainer comparison chart from the strategy doc.
 *
 * Props:
 *   headers  — string[]
 *   rows     — Array<{ feature: string, values: string[] }>
 */
export function PricingTable({ headers = [], rows = [], style }) {
  return (
    <div
      style={{
        overflowX: 'auto',
        borderRadius: borderRadius.lg,
        boxShadow: shadows.md,
        border: `1px solid ${colors.lightGray || '#E8E6E2'}`,
        ...style,
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: typography.fontFamily,
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  background: colors.navy,
                  color: colors.white,
                  fontWeight: typography.weights.semibold,
                  fontSize: typography.sizes.sm,
                  padding: `${spacing[3]} ${spacing[4]}`,
                  textAlign: i === 0 ? 'left' : 'center',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.02em',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{
                background: ri % 2 === 0 ? colors.offWhite : colors.white,
              }}
            >
              <td
                style={{
                  padding: `${spacing[3]} ${spacing[4]}`,
                  fontSize: typography.sizes.sm,
                  color: colors.dark,
                  fontWeight: typography.weights.medium,
                  borderBottom: `1px solid ${colors.lightGray || '#E8E6E2'}`,
                }}
              >
                {row.feature}
              </td>
              {row.values.map((val, vi) => (
                <td
                  key={vi}
                  style={{
                    padding: `${spacing[3]} ${spacing[4]}`,
                    fontSize: typography.sizes.sm,
                    color: val === 'Yes' ? colors.slate : val === 'No' ? colors.granite : colors.dark,
                    fontWeight: val === 'Yes' ? typography.weights.semibold : typography.weights.normal,
                    textAlign: 'center',
                    borderBottom: `1px solid ${colors.lightGray || '#E8E6E2'}`,
                  }}
                >
                  {val === 'Yes' ? '✓' : val === 'No' ? '—' : val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
