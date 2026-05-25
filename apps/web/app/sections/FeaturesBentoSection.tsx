'use client';

import { BentoGrid, BentoCard, Container } from '@haven/ui';
import { motion } from 'framer-motion';

export function FeaturesBentoSection() {
  return (
    <section className="py-24 bg-light-gray dark:bg-dark-surface">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-h2 text-charcoal dark:text-warm-ivory text-center mb-16"
        >
          Everything You Need, In One Place
        </motion.h2>

        <BentoGrid columns={4} gap="lg">
          <BentoCard variant="feature" span={{ cols: 2, rows: 2 }} priority={0}>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="font-heading text-h3 text-charcoal mb-2">Community Groups</h3>
              <p className="text-body text-charcoal/70">Find your circle. Private, moderated groups for every stage of your journey.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-warm-ivory/90 to-transparent" />
          </BentoCard>

          <BentoCard variant="feature" span={{ cols: 2, rows: 1 }} priority={1}>
            <div className="flex items-center justify-between h-full">
              <div>
                <h3 className="font-heading text-h4 text-charcoal mb-1">Events & Hikes</h3>
                <p className="text-body-sm text-medium-gray">In-person and virtual gatherings</p>
              </div>
              <div className="text-4xl">🥾</div>
            </div>
          </BentoCard>

          <BentoCard variant="action" priority={2}>
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mb-3 text-2xl">💼</div>
              <h3 className="font-heading text-h4 text-charcoal mb-1">Job Board</h3>
              <p className="text-caption text-medium-gray">240+ open positions</p>
            </div>
          </BentoCard>

          <BentoCard variant="action" priority={3}>
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 rounded-full bg-soft-sage/20 flex items-center justify-center mb-3 text-2xl">🤝</div>
              <h3 className="font-heading text-h4 text-charcoal mb-1">Services</h3>
              <p className="text-caption text-medium-gray">Vetted providers</p>
            </div>
          </BentoCard>

          <BentoCard variant="story" span={{ cols: 2, rows: 1 }} priority={4}>
            <blockquote className="font-heading text-h4 text-charcoal italic leading-relaxed">
              "Haven gave me the courage to rebuild my career and my confidence. I found sisters I never knew I needed."
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dusty-rose/30" />
              <div>
                <p className="text-body-sm font-medium text-charcoal">Sarah M.</p>
                <p className="text-caption text-medium-gray">Member since 2024</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="affirmation" priority={5}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <p className="font-heading text-h4 text-charcoal italic mb-2">"I am stronger than my struggles."</p>
              <p className="text-caption text-medium-gray">Daily Affirmation</p>
            </div>
          </BentoCard>

          <BentoCard variant="action" priority={6}>
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 rounded-full bg-info-blue/10 flex items-center justify-center mb-3 text-2xl">📚</div>
              <h3 className="font-heading text-h4 text-charcoal mb-1">Resources</h3>
              <p className="text-caption text-medium-gray">6 categories</p>
            </div>
          </BentoCard>

          <BentoCard variant="stat" priority={7}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-heading text-h4 text-charcoal">100% Verified</h3>
              <p className="text-caption text-medium-gray mt-1">Safe & Private</p>
            </div>
          </BentoCard>
        </BentoGrid>
      </Container>
    </section>
  );
}
