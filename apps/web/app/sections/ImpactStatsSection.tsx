'use client';

import { Container, AnimatedCounter } from '@haven/ui';
import { motion } from 'framer-motion';

const stats = [
  { value: 12500, suffix: '+', label: 'Women Connected' },
  { value: 3200, suffix: '+', label: 'Events Hosted' },
  { value: 850, suffix: '+', label: 'Women Employed' },
  { value: 200, suffix: '+', label: 'Cities Reached' },
];

export function ImpactStatsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-dusty-rose/20 to-soft-sage/20 dark:from-dark-elevated dark:to-dark-surface">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-heading text-h2 text-accent-gold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-body font-medium text-charcoal dark:text-warm-ivory">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-body-lg text-charcoal/80 dark:text-warm-ivory/80 max-w-3xl mx-auto mt-16"
        >
          Our mission is to ensure no woman walks through separation or divorce alone. 
          Haven is built by women who have been there, for women who are there now.
        </motion.p>
      </Container>
    </section>
  );
}
