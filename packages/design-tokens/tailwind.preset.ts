import type { Config } from 'tailwindcss';
import { colors, typography, borderRadius, shadows, breakpoints } from './src';

const preset: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dusty-rose': colors.dustyRose,
        'soft-sage': colors.softSage,
        'warm-ivory': colors.warmIvory,
        charcoal: colors.charcoal,
        'accent-gold': colors.accentGold,
        'light-gray': colors.lightGray,
        'medium-gray': colors.mediumGray,
        'error-red': colors.errorRed,
        'success-green': colors.successGreen,
        'info-blue': colors.infoBlue,
        'dark-base': colors.darkBase,
        'dark-surface': colors.darkSurface,
        'dark-elevated': colors.darkElevated,
      },
      fontFamily: {
        heading: typography.fontFamily.heading,
        body: typography.fontFamily.body,
        mono: typography.fontFamily.mono,
      },
      fontSize: {
        'h1': typography.fontSize.h1,
        'h2': typography.fontSize.h2,
        'h3': typography.fontSize.h3,
        'h4': typography.fontSize.h4,
        'body-lg': typography.fontSize.bodyLg,
        'body-sm': typography.fontSize.bodySm,
        caption: typography.fontSize.caption,
      },
      borderRadius: {
        'sm-md': borderRadius.sm,
        'md-lg': borderRadius.md,
        'lg-xl': borderRadius.lg,
        'xl-2xl': borderRadius.xl,
      },
      boxShadow: {
        'sm-md': shadows.sm,
        'md-lg': shadows.md,
        'lg-xl': shadows.lg,
        'xl-2xl': shadows.xl,
        glow: shadows.glow,
      },
      screens: {
        xs: breakpoints.sm,
        sm: breakpoints.md,
        md: breakpoints.lg,
        lg: breakpoints.xl,
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
};

export default preset;
