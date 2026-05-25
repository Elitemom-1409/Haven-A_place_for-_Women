'use client';

import { motion } from 'framer-motion';
import { Container } from '@haven/ui';

const stories = [
  {
    title: 'Finding Myself Again',
    category: 'Healing',
    excerpt: 'After 15 years of marriage, I had no idea who I was anymore. This is the story of how I rediscovered my passions...',
    author: 'Rebecca T.',
    readTime: '8 min',
    color: 'from-dusty-rose/30 to-accent-gold/20',
  },
  {
    title: 'From Stay-at-Home Mom to CEO',
    category: 'Career',
    excerpt: "The transition wasn't easy, but the support I found here made all the difference.",
    author: 'Lisa M.',
    readTime: '12 min',
    color: 'from-soft-sage/30 to-dusty-rose/20',
  },
  {
    title: 'Co-Parenting with Grace',
    category: 'Parenting',
    excerpt: 'Navigating shared custody while healing yourself is one of the hardest things...',
    author: 'Natalie K.',
    readTime: '6 min',
    color: 'from-info-blue/30 to-soft-sage/20',
  },
];

export default function StoriesClient() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-24 pb-12">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl text-charcoal dark:text-warm-ivory mb-4"
          >
            Stories
          </motion.h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Real stories from real women. Every journey is unique, and every voice matters.
          </p>
        </Container>
      </section>

      <Container>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {stories.map((story, i) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid bg-white dark:bg-dark-surface rounded-2xl overflow-hidden border border-medium-gray/10 hover:border-accent-gold/30 transition-colors cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${story.color}`} />
              <div className="p-6">
                <span className="px-2 py-1 rounded-full bg-soft-sage/20 text-charcoal dark:text-warm-ivory text-xs font-medium">
                  {story.category}
                </span>
                <h3 className="font-heading text-xl text-charcoal dark:text-warm-ivory mt-3 mb-2">{story.title}</h3>
                <p className="text-sm text-medium-gray mb-4">{story.excerpt}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-dusty-rose/30 flex items-center justify-center text-xs font-medium text-charcoal">
                    {story.author[0]}
                  </div>
                  <span className="text-sm text-medium-gray">{story.author} • {story.readTime} read</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </main>
  );
}
