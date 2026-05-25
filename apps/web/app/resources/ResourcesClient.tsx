'use client';

import { motion } from 'framer-motion';
import { Container } from '@haven/ui';

const resources = [
  { icon: '⚖️', title: 'Legal Resources', count: 12, desc: 'Understanding your rights, finding affordable legal aid, and navigating the court system.' },
  { icon: '💰', title: 'Financial Planning', count: 8, desc: 'Budgeting after divorce, rebuilding credit, retirement planning, and asset management.' },
  { icon: '🧠', title: 'Emotional Support', count: 15, desc: 'Therapy guides, coping strategies, mindfulness practices, and crisis resources.' },
  { icon: '💼', title: 'Career Resources', count: 10, desc: 'Resume building, interview prep, skill development, and returning to work.' },
  { icon: '👨‍👩‍👧', title: 'Parenting', count: 9, desc: 'Co-parenting strategies, helping children cope, and single parenting support.' },
  { icon: '🏠', title: 'Housing', count: 6, desc: 'Finding affordable housing, understanding leases, and relocation support.' },
];

export default function ResourcesClient() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-24 pb-12">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl text-charcoal dark:text-warm-ivory mb-4"
          >
            Resources
          </motion.h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Curated guides, tools, and support for every step of your journey.
          </p>
        </Container>
      </section>

      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-dark-surface rounded-2xl p-8 border border-medium-gray/10 hover:border-accent-gold/50 transition-colors cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-dusty-rose/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <h3 className="font-heading text-2xl text-charcoal dark:text-warm-ivory mb-2">{resource.title}</h3>
              <p className="text-medium-gray mb-4">{resource.desc}</p>
              <span className="text-accent-gold text-sm font-medium group-hover:underline">{resource.count} articles →</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </main>
  );
}
