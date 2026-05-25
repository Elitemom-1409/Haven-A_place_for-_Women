'use client';

import { motion } from 'framer-motion';
import { Container, Button, Badge } from '@haven/ui';

const events = [
  {
    id: 1,
    title: 'Sunset Hike - Red Rocks',
    date: 'Sat, Apr 26',
    category: 'Hiking',
    attendees: 12,
    description: 'Join us for a beautiful sunset hike with other single moms. Trail is moderate difficulty.',
    color: 'bg-dusty-rose/20',
    emoji: '🥾',
  },
  {
    id: 2,
    title: 'Career Workshop: Resume Review',
    date: 'Mon, Apr 28',
    category: 'Workshop',
    attendees: 24,
    description: 'Get your resume reviewed by HR professionals. Bring copies and your laptop.',
    color: 'bg-soft-sage/20',
    emoji: '💼',
  },
  {
    id: 3,
    title: 'Coffee & Connection',
    date: 'Wed, Apr 30',
    category: 'Social',
    attendees: 8,
    description: 'Casual meetup at Roasted Bean. Great for first-timers!',
    color: 'bg-accent-gold/20',
    emoji: '☕',
  },
];

const categories = ['All Events', 'Hiking', 'Workshops', 'Social', 'Support Groups'];

export default function EventsClient() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-24 pb-8">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-5xl text-charcoal dark:text-warm-ivory"
              >
                Events
              </motion.h1>
              <p className="text-medium-gray mt-1">Find gatherings near you</p>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm">Map View</Button>
              <Button size="sm">+ Create Event</Button>
            </div>
          </div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? 'bg-accent-gold text-charcoal'
                    : 'bg-white dark:bg-dark-surface border border-medium-gray/20 text-medium-gray hover:border-accent-gold/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden border border-medium-gray/10 hover:border-accent-gold/30 transition-colors"
              >
                <div className={`h-48 ${event.color} flex items-center justify-center text-6xl`}>
                  {event.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge color="sage">{event.category}</Badge>
                    <span className="text-xs text-medium-gray">{event.date}</span>
                  </div>
                  <h3 className="font-heading text-xl text-charcoal dark:text-warm-ivory mb-2">{event.title}</h3>
                  <p className="text-sm text-medium-gray mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className={`w-6 h-6 rounded-full border-2 border-white dark:border-dark-surface bg-dusty-rose/${j * 10 + 20}`} />
                        ))}
                      </div>
                      <span className="text-xs text-medium-gray">{event.attendees} attending</span>
                    </div>
                    <Button size="sm">RSVP</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
