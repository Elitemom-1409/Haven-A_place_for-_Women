'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { motion } from 'framer-motion';
import { transitions } from '@haven/design-tokens';

interface BentoGridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const gapMap = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
};

const colMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export function BentoGrid({ columns = 4, gap = 'md', children, className }: BentoGridProps) {
  return (
    <div className={cn('grid', colMap[columns], gapMap[gap], className)}>
      {children}
    </div>
  );
}

type CardVariant = 'feature' | 'stat' | 'action' | 'profile' | 'event' | 'story' | 'service' | 'ad' | 'affirmation' | 'weather' | 'map';

interface BentoCardProps {
  span?: {
    cols?: 1 | 2 | 3 | 4;
    rows?: 1 | 2 | 3;
  };
  variant: CardVariant;
  priority?: number;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const variantStyles: Record<CardVariant, string> = {
  feature: 'bg-gradient-to-br from-dusty-rose/10 to-warm-ivory relative overflow-hidden dark:from-dark-elevated dark:to-dark-surface',
  stat: 'bg-light-gray flex flex-col justify-center items-center text-center dark:bg-dark-elevated',
  action: 'bg-white border border-medium-gray/20 hover:border-accent-gold/50 cursor-pointer dark:bg-dark-surface dark:border-warm-ivory/10',
  profile: 'bg-white border border-medium-gray/20 dark:bg-dark-surface dark:border-warm-ivory/10',
  event: 'bg-white border border-medium-gray/20 dark:bg-dark-surface dark:border-warm-ivory/10',
  story: 'bg-soft-sage/10 border border-soft-sage/20 dark:bg-soft-sage/5',
  service: 'bg-white border border-medium-gray/20 dark:bg-dark-surface dark:border-warm-ivory/10',
  ad: 'bg-light-gray border-2 border-dashed border-medium-gray/30 relative dark:bg-dark-elevated',
  affirmation: 'bg-gradient-to-br from-accent-gold/10 to-dusty-rose/10 dark:from-accent-gold/5 dark:to-dusty-rose/5',
  weather: 'bg-info-blue/10 dark:bg-info-blue/5',
  map: 'bg-soft-sage/20 dark:bg-soft-sage/10',
};

const colSpanMap = {
  1: 'col-span-1',
  2: 'col-span-1 sm:col-span-2',
  3: 'col-span-1 sm:col-span-2 lg:col-span-3',
  4: 'col-span-1 sm:col-span-2 lg:col-span-4',
};

const rowSpanMap = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
};

export function BentoCard({
  span,
  variant,
  priority = 0,
  children,
  className,
  href,
  onClick,
}: BentoCardProps) {
  const Component = href ? motion.a : motion.div;
  const isAd = variant === 'ad';

  return (
    <Component
      href={href}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        ...transitions.spring,
        delay: priority * 0.06,
      }}
      whileHover={{ scale: 1.01, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-xl p-6 transition-shadow duration-300',
        variantStyles[variant],
        span?.cols && colSpanMap[span.cols],
        span?.rows && rowSpanMap[span.rows],
        !isAd && 'hover:shadow-lg-xl',
        className
      )}
      style={{ order: priority }}
    >
      {isAd && (
        <span className="absolute top-3 right-3 text-caption text-medium-gray bg-white/80 dark:bg-dark-base/80 px-2 py-0.5 rounded-full">
          Sponsored
        </span>
      )}
      {children}
    </Component>
  );
}
