'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { motion } from 'framer-motion';

interface SidebarProps {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  badge?: number;
}

export function Sidebar({ collapsed, onCollapse, children, className }: SidebarProps) {
  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 280 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'h-screen sticky top-0 bg-white dark:bg-dark-surface border-r border-medium-gray/10 flex flex-col',
        className
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && <span className="font-heading text-h4 text-charcoal dark:text-warm-ivory">Haven</span>}
        <button
          onClick={() => onCollapse?.(!collapsed)}
          className="w-8 h-8 rounded-lg hover:bg-light-gray dark:hover:bg-dark-elevated flex items-center justify-center text-medium-gray"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={collapsed ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} />
          </svg>
        </button>
      </div>
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">{children}</nav>
    </motion.aside>
  );
}

export function SidebarItem({ icon, label, active, onClick, badge }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-sm font-medium transition-colors',
        active
          ? 'bg-accent-gold/10 text-charcoal dark:text-warm-ivory'
          : 'text-medium-gray hover:bg-light-gray dark:hover:bg-dark-elevated hover:text-charcoal dark:hover:text-warm-ivory'
      )}
    >
      <span className="w-5 h-5 flex-shrink-0">{icon}</span>
      <motion.span
        initial={false}
        animate={{ opacity: 1 }}
        className="truncate"
      >
        {label}
      </motion.span>
      {badge !== undefined && badge > 0 && (
        <span className="ml-auto bg-error-red text-white text-caption px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
          {badge}
        </span>
      )}
    </button>
  );
}
