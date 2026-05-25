'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { motion } from 'framer-motion';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'primary';
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'md', variant = 'default', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    };

    const variantClasses = {
      default: 'bg-light-gray text-charcoal hover:bg-medium-gray/20 dark:bg-dark-elevated dark:text-warm-ivory',
      ghost: 'text-charcoal hover:bg-light-gray dark:text-warm-ivory dark:hover:bg-dark-elevated',
      primary: 'bg-accent-gold text-charcoal hover:bg-accent-gold/90',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.92 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50 disabled:opacity-50',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
IconButton.displayName = 'IconButton';
