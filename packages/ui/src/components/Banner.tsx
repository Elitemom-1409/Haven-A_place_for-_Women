'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerProps {
  variant?: 'info' | 'warning' | 'promo';
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variantStyles = {
  info: 'bg-info-blue/10 text-info-blue border-info-blue/20',
  warning: 'bg-accent-gold/10 text-accent-gold border-accent-gold/20',
  promo: 'bg-soft-sage/20 text-charcoal dark:text-warm-ivory border-soft-sage/30',
};

export function Banner({ variant = 'info', children, dismissible, onDismiss, className }: BannerProps) {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className={cn(
        'w-full border-b px-4 py-3 flex items-center justify-between',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex-1 text-center text-body-sm font-medium">{children}</div>
      {dismissible && (
        <button
          onClick={() => { setVisible(false); onDismiss?.(); }}
          className="ml-4 opacity-60 hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </motion.div>
  );
}
