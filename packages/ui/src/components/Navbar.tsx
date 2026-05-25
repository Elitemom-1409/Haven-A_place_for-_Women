'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@haven/utils';
import Link from 'next/link';
import { Container } from './Container';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/stories', label: 'Stories' },
  { href: '/events', label: 'Events' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  const height = useTransform(scrollY, [0, 100], [80, 56]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  return (
    <motion.header
      style={{ height }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-warm-ivory/80 dark:bg-dark-base/80 border-b border-medium-gray/10"
      />

      <Container className="relative flex items-center justify-between h-full">
        <motion.div style={{ scale: logoScale }} className="origin-left">
          <Link href="/" className="font-heading text-h3 text-charcoal dark:text-warm-ivory">
            Haven
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm font-medium text-charcoal/80 dark:text-warm-ivory/80 hover:text-charcoal dark:hover:text-warm-ivory transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/auth/login">
            <span className="text-body-sm font-medium text-accent-gold hover:text-accent-gold/80">
              Sign In
            </span>
          </Link>
          <Link href="/auth/register">
            <span className="px-4 py-2 rounded-full bg-accent-gold text-charcoal text-body-sm font-medium hover:bg-accent-gold/90 transition-colors">
              Join Haven
            </span>
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-charcoal dark:text-warm-ivory"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-warm-ivory dark:bg-dark-base border-b border-medium-gray/10 md:hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-body font-medium text-charcoal dark:text-warm-ivory py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/auth/login" onClick={() => setMobileOpen(false)}>
                  <span className="block text-center py-3 rounded-md border border-charcoal dark:border-warm-ivory text-charcoal dark:text-warm-ivory">
                    Sign In
                  </span>
                </Link>
                <Link href="/auth/register" onClick={() => setMobileOpen(false)}>
                  <span className="block text-center py-3 rounded-md bg-accent-gold text-charcoal font-medium">
                    Join Haven
                  </span>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
