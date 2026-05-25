'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@haven/utils';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  direction?: 'left' | 'right' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function Drawer({ open, onClose, direction = 'right', size = 'md', children, className }: DrawerProps) {
  const sizeClasses = {
    sm: direction === 'bottom' ? 'h-[40vh]' : 'w-80',
    md: direction === 'bottom' ? 'h-[60vh]' : 'w-96',
    lg: direction === 'bottom' ? 'h-[85vh]' : 'w-[32rem]',
  };

  const variants = {
    left: { x: '-100%', y: 0 },
    right: { x: '100%', y: 0 },
    bottom: { x: 0, y: '100%' },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[400] bg-charcoal/40 backdrop-blur-sm"
          />
          <motion.div
            initial={variants[direction]}
            animate={{ x: 0, y: 0 }}
            exit={variants[direction]}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={cn(
              'fixed z-[400] bg-white dark:bg-dark-surface shadow-xl',
              direction === 'bottom' ? 'bottom-0 left-0 right-0 rounded-t-2xl' : 'top-0 bottom-0',
              direction === 'left' ? 'left-0 rounded-r-2xl' : direction === 'right' ? 'right-0 rounded-l-2xl' : '',
              sizeClasses[size],
              className
            )}
          >
            <div className="h-full overflow-y-auto p-6">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
