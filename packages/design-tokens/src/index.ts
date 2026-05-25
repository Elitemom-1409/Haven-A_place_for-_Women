export const colors = {
  dustyRose: '#D4A0A0',
  softSage: '#A8BFA0',
  warmIvory: '#FFF8F0',
  charcoal: '#2D2D2D',
  accentGold: '#C9A96E',
  lightGray: '#F5F0EB',
  mediumGray: '#B8B0A8',
  errorRed: '#C45B5B',
  successGreen: '#6B9E78',
  infoBlue: '#7BA3C4',
  darkBase: '#1E1225',
  darkSurface: '#2A1D33',
  darkElevated: '#352640',
} as const;

export const typography = {
  fontFamily: {
    heading: '"Instrument Serif", Georgia, serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  fontWeight: {
    heading: { normal: 400, semibold: 600 },
    body: { light: 300, normal: 400, medium: 500, semibold: 600, bold: 700 },
    mono: { normal: 400, medium: 500 },
  },
  fontSize: {
    h1: 'clamp(2.25rem, 4vw, 3.5rem)',
    h2: 'clamp(1.75rem, 3vw, 2.5rem)',
    h3: 'clamp(1.375rem, 2.5vw, 1.875rem)',
    h4: 'clamp(1.125rem, 2vw, 1.5rem)',
    bodyLg: 'clamp(1.0625rem, 1.5vw, 1.1875rem)',
    body: '1rem',
    bodySm: '0.875rem',
    caption: '0.75rem',
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacing = {
  base: 8,
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128] as const,
} as const;

export const borderRadius = {
  sm: '6px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(45,45,45,0.06)',
  md: '0 4px 12px rgba(45,45,45,0.08)',
  lg: '0 8px 30px rgba(45,45,45,0.12)',
  xl: '0 20px 60px rgba(45,45,45,0.16)',
  glow: '0 0 20px rgba(201,169,110,0.15)',
} as const;

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const maxContentWidth = '1280px';

export const transitions = {
  spring: { stiffness: 120, damping: 14 },
  springFast: { stiffness: 300, damping: 30 },
  pageEnter: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  pageExit: { duration: 0.2 },
} as const;

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
} as const;
