// Waveform Marketing — Design Tokens
// Extracted from brand doc (build_waveform_doc.py)

export const colors = {
  navy:    '#1A2535',   // primary brand, headings, CTAs
  slate:   '#3A5A7A',   // secondary, subheadings, accents
  granite: '#8A8880',   // muted text, captions, borders
  white:   '#FFFFFF',
  dark:    '#222222',   // body text
  offWhite: '#F5F3F0',  // table alternating rows, section backgrounds
  lightGray: '#E8E6E2', // dividers
};

export const typography = {
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  sizes: {
    xs:   '0.75rem',   // 12px — captions, footnotes
    sm:   '0.875rem',  // 14px — table cells, labels
    base: '1rem',      // 16px — body
    lg:   '1.125rem',  // 18px — lead text
    xl:   '1.375rem',  // 22px — section titles (h2)
    '2xl': '1.625rem', // 26px — page titles (h1)
    '3xl': '2.25rem',  // 36px — hero headline
    '4xl': '3rem',     // 48px — hero display
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
  },
};

export const spacing = {
  0:  '0',
  1:  '0.25rem',
  2:  '0.5rem',
  3:  '0.75rem',
  4:  '1rem',
  5:  '1.25rem',
  6:  '1.5rem',
  8:  '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
};

export const borderRadius = {
  sm:   '0.25rem',
  md:   '0.5rem',
  lg:   '0.75rem',
  xl:   '1rem',
  full: '9999px',
};

export const shadows = {
  sm:  '0 1px 3px rgba(26,37,53,0.10)',
  md:  '0 4px 12px rgba(26,37,53,0.12)',
  lg:  '0 8px 24px rgba(26,37,53,0.15)',
  xl:  '0 16px 48px rgba(26,37,53,0.18)',
};
