'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@haven/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/home', label: 'Home', icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )},
  { href: '/community', label: 'Community', icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )},
  { href: '/events', label: 'Events', icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )},
  { href: '/messages', label: 'Messages', icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )},
  { href: '/profile', label: 'Profile', icon: (active: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )},
];

export function MobileTabBar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    const idx = tabs.findIndex((t) => pathname?.startsWith(t.href));
    if (idx !== -1) setActiveTab(idx);
  }, [pathname]);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-dark-base/90 backdrop-blur-lg border-t border-medium-gray/10 z-50 pb-safe">
      <div className="flex items-center justify-around h-16 relative">
        {tabs.map((tab, i) => {
          const isActive = i === activeTab;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                'flex flex-col items-center justify-center w-full h-full relative z-10',
                isActive ? 'text-accent-gold' : 'text-medium-gray'
              )}
            >
              <motion.div
                animate={{ scale: isActive ? 1.15 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {tab.icon(isActive)}
              </motion.div>
              <span className={cn('text-[10px] mt-1 font-medium', isActive ? 'text-accent-gold' : 'text-medium-gray')}>
                {tab.label}
              </span>
            </Link>
          );
        })}

        <motion.div
          className="absolute bottom-2 h-1 bg-accent-gold rounded-full"
          animate={{
            left: `${(activeTab / tabs.length) * 100 + (100 / tabs.length / 2) - 10}%`,
            width: '20%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>
    </nav>
  );
}
