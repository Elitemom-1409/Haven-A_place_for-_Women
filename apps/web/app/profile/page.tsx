'use client';

import { motion } from 'framer-motion';
import { Container, Button, Avatar, Badge } from '@haven/ui';

const activities = [
  { icon: '🥾', title: 'Sunset Hike - Red Rocks', date: 'April 15, 2025', type: 'Attended' },
  { icon: '💼', title: 'Product Manager at TechStart', date: 'April 10, 2025', type: 'Applied for' },
  { icon: '👥', title: 'Denver Divorce Support', date: 'March 2025', type: 'Joined' },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-24 pb-8">
        <Container>
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-surface rounded-2xl p-8 border border-medium-gray/10 mb-6"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar name="Sarah Mitchell" size="xl" />
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-heading text-3xl text-charcoal dark:text-warm-ivory">Sarah Mitchell</h1>
                <p className="text-medium-gray mt-1">Denver, CO • Member since 2024</p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  <Badge color="sage">Hiking</Badge>
                  <Badge color="gold">Career Development</Badge>
                  <Badge color="info">Book Club</Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm">Edit Profile</Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10">
                <h3 className="font-heading text-xl text-charcoal dark:text-warm-ivory mb-4">About</h3>
                <p className="text-charcoal/80 dark:text-warm-ivory/80 leading-relaxed">
                  Recently divorced mom of two amazing kids. Rediscovering myself through hiking, reading, and building a new career in tech. Grateful for this community and the incredible women I&apos;ve met here.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10">
                <h3 className="font-heading text-xl text-charcoal dark:text-warm-ivory mb-4">Activity</h3>
                <div className="space-y-4">
                  {activities.map((activity, i) => (
                    <div key={i} className="flex items-center gap-4 pb-4 border-b border-medium-gray/10 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-full bg-soft-sage/20 flex items-center justify-center text-sm">{activity.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm text-charcoal dark:text-warm-ivory">
                          {activity.type} <span className="font-medium">{activity.title}</span>
                        </p>
                        <p className="text-xs text-medium-gray">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10">
                <h3 className="font-heading text-lg text-charcoal dark:text-warm-ivory mb-4">Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Events Attended', value: 12 },
                    { label: 'Groups Joined', value: 5 },
                    { label: 'Connections', value: 28 },
                    { label: 'Posts', value: 34 },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-sm text-medium-gray">{stat.label}</span>
                      <span className="font-medium text-charcoal dark:text-warm-ivory">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
