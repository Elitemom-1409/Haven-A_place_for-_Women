'use client';

import { motion } from 'framer-motion';
import {
  Container,
  BentoGrid,
  BentoCard,
  Avatar,
  Badge,
  Button,
  IconButton,
} from '@haven/ui';
import Link from 'next/link';

const upcomingEvents = [
  { id: 1, title: 'Sunset Hike - Red Rocks', date: 'Sat, Apr 26', attendees: 12, image: '/events/hike.jpg' },
  { id: 2, title: 'Career Workshop: Resume Review', date: 'Mon, Apr 28', attendees: 24, image: '/events/workshop.jpg' },
];

const suggestedConnections = [
  { name: 'Michelle R.', location: 'Denver, CO', interests: ['Hiking', 'Career'], avatar: '' },
  { name: 'Jennifer K.', location: 'Austin, TX', interests: ['Legal Support', 'Book Club'], avatar: '' },
  { name: 'Angela T.', location: 'Portland, OR', interests: ['Parenting', 'Wellness'], avatar: '' },
];

const quickStats = [
  { label: 'Groups Joined', value: 5, icon: '👥' },
  { label: 'Events Attended', value: 12, icon: '📅' },
  { label: 'Connections', value: 28, icon: '🤝' },
  { label: 'Messages', value: 3, icon: '💬', badge: true },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-8 pb-6">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-h2 text-charcoal dark:text-warm-ivory"
              >
                Good evening, Sarah
              </motion.h1>
              <p className="text-body text-medium-gray mt-1">Here's what's happening in your community</p>
            </div>
            <div className="flex items-center gap-3">
              <IconButton variant="ghost">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </IconButton>
              <Avatar name="Sarah Mitchell" size="md" online />
            </div>
          </div>
        </Container>
      </section>

      <section className="mb-8">
        <Container>
          <BentoGrid columns={4} gap="md">
            {quickStats.map((stat, i) => (
              <BentoCard key={stat.label} variant="stat" priority={i}>
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-heading text-h3 text-accent-gold">{stat.value}</div>
                <div className="text-caption text-medium-gray flex items-center gap-2">
                  {stat.label}
                  {stat.badge && <Badge variant="dot" color="error" />}
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </Container>
      </section>

      <Container>
        <BentoGrid columns={3} gap="lg">
          <BentoCard variant="feature" span={{ cols: 2, rows: 2 }} priority={0} href="/events/my">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory">Upcoming Events</h3>
                <Link href="/events/my" className="text-body-sm text-accent-gold hover:underline">View all</Link>
              </div>

              <div className="space-y-4 flex-1">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex gap-4 p-4 rounded-xl bg-white/50 dark:bg-dark-surface/50 hover:bg-white dark:hover:bg-dark-surface transition-colors cursor-pointer">
                    <div className="w-16 h-16 rounded-lg bg-dusty-rose/20 flex items-center justify-center text-2xl flex-shrink-0">
                      🗓️
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-charcoal dark:text-warm-ivory">{event.title}</h4>
                      <p className="text-body-sm text-medium-gray">{event.date}</p>
                      <div className="flex items-center gap-1 mt-1 text-caption text-medium-gray">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="affirmation" priority={1}>
            <div className="h-full flex flex-col justify-center items-center text-center p-4">
              <div className="text-4xl mb-4">✨</div>
              <blockquote className="font-heading text-h4 text-charcoal dark:text-warm-ivory italic leading-relaxed">
                "I am capable of creating a beautiful life on my own terms."
              </blockquote>
              <p className="text-caption text-medium-gray mt-4">Daily Affirmation</p>
            </div>
          </BentoCard>

          <BentoCard variant="profile" priority={2}>
            <h3 className="font-heading text-h4 text-charcoal dark:text-warm-ivory mb-4">Suggested Connections</h3>
            <div className="space-y-4">
              {suggestedConnections.map((person) => (
                <div key={person.name} className="flex items-center gap-3">
                  <Avatar name={person.name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm font-medium text-charcoal dark:text-warm-ivory truncate">{person.name}</p>
                    <p className="text-caption text-medium-gray">{person.location}</p>
                  </div>
                  <Button size="sm" variant="secondary">Connect</Button>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard variant="action" span={{ cols: 2 }} priority={3} href="/community">
            <div className="flex items-center justify-between h-full">
              <div>
                <h3 className="font-heading text-h4 text-charcoal dark:text-warm-ivory mb-1">Your Communities</h3>
                <p className="text-body-sm text-medium-gray">3 new posts in Denver Divorce Support</p>
              </div>
              <div className="flex -space-x-2">
                {['A', 'B', 'C'].map((letter, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-dusty-rose/20 border-2 border-white dark:border-dark-base flex items-center justify-center text-body-sm font-medium text-charcoal">
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="action" priority={4} href="/jobs">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 rounded-full bg-soft-sage/20 flex items-center justify-center mb-3 text-2xl">💼</div>
              <h3 className="font-heading text-h4 text-charcoal dark:text-warm-ivory mb-1">New Jobs</h3>
              <p className="text-caption text-medium-gray">24 matching your profile</p>
            </div>
          </BentoCard>

          <BentoCard variant="service" priority={5} href="/services">
            <div className="flex items-center gap-3">
              <Avatar name="Legal Aid Pro" size="sm" />
              <div className="flex-1">
                <h4 className="font-medium text-body-sm text-charcoal dark:text-warm-ivory">Legal Consultation</h4>
                <div className="flex items-center gap-1 text-accent-gold">
                  {'★'.repeat(5)}
                  <span className="text-caption text-medium-gray ml-1">(48 reviews)</span>
                </div>
              </div>
              <Badge color="success">$85/hr</Badge>
            </div>
          </BentoCard>

          <BentoCard variant="action" priority={6} href="/resources">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 rounded-full bg-info-blue/10 flex items-center justify-center mb-3 text-2xl">📚</div>
              <h3 className="font-heading text-h4 text-charcoal dark:text-warm-ivory mb-1">Resources</h3>
              <p className="text-caption text-medium-gray">Financial planning guide updated</p>
            </div>
          </BentoCard>

          <BentoCard variant="weather" priority={7}>
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-caption text-medium-gray mb-1">Denver, CO</p>
                <p className="font-heading text-h2 text-charcoal dark:text-warm-ivory">72°</p>
                <p className="text-body-sm text-medium-gray">Perfect for a hike!</p>
              </div>
              <div className="text-5xl">☀️</div>
            </div>
          </BentoCard>
        </BentoGrid>
      </Container>
    </main>
  );
}
