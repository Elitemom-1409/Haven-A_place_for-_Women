'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Container } from '@haven/ui';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-dark-base flex items-center justify-center px-4">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-2">Welcome Back</h1>
            <p className="text-body text-medium-gray">Sign in to your Haven account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-body-sm text-medium-gray">
                <input type="checkbox" className="rounded border-medium-gray/30" />
                Remember me
              </label>
              <Link href="/auth/forgot-password" className="text-body-sm text-accent-gold hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full" loading={loading}>
              Sign In
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-medium-gray/20" />
              </div>
              <div className="relative flex justify-center text-body-sm">
                <span className="bg-white dark:bg-dark-surface px-4 text-medium-gray">or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-medium-gray/20 rounded-md hover:bg-light-gray transition-colors text-body-sm text-charcoal dark:text-warm-ivory">
                <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-medium-gray/20 rounded-md hover:bg-light-gray transition-colors text-body-sm text-charcoal dark:text-warm-ivory">
                <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.04 3.95-.74 1.52.24 2.59.99 3.36 2.27-3.06 1.5-2.54 5.98.22 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                Apple
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-body-sm text-medium-gray">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-accent-gold hover:underline font-medium">
              Join Haven
            </Link>
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
