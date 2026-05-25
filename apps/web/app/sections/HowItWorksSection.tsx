'use client';

import { motion, useInView } from 'framer-motion';
import { Container } from '@haven/ui';
import { useRef } from 'react';

const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Create Your Profile',
    description: 'Share your journey and interests in a safe, private space designed for you.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Find Your People',
    description: 'Connect with women who understand your experience and share your interests.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      </svg>
    ),
    title: 'Thrive Together',
    description: 'Access resources, events, and opportunities to build your next chapter.',
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-warm-ivory dark:bg-dark-base" ref={ref}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-h2 text-charcoal dark:text-warm-ivory text-center mb-16"
        >
          Three Steps to Your New Community
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-medium-gray/20">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-accent-gold origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-soft-sage/20 dark:bg-soft-sage/10 flex items-center justify-center text-charcoal dark:text-warm-ivory mb-6 relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-heading text-h4 text-charcoal dark:text-warm-ivory mb-3">
                  {step.title}
                </h3>
                <p className="text-body text-medium-gray dark:text-warm-ivory/70 max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
