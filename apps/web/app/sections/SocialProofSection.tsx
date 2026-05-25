'use client';

import { motion } from 'framer-motion';
import { Container } from '@haven/ui';

const partners = [
  "Women's Shelter Alliance",
  'Career Forward Nonprofit',
  'Wellness Collective',
  'Legal Aid Society',
  'New Beginnings Fund',
  'Sisterhood Network',
];

export function SocialProofSection() {
  return (
    <section className="py-12 bg-light-gray dark:bg-dark-surface border-y border-medium-gray/10">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="text-body-sm font-medium text-charcoal dark:text-warm-ivory whitespace-nowrap">
            Trusted by <span className="text-accent-gold font-semibold">10,000+</span> women
          </p>

          <div className="relative overflow-hidden flex-1 w-full">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((partner, i) => (
                <span
                  key={i}
                  className="text-body font-heading text-charcoal/40 dark:text-warm-ivory/40 hover:text-charcoal/80 dark:hover:text-warm-ivory/80 transition-colors duration-300 cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
