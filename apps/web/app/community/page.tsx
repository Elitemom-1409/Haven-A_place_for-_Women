'use client';

import { motion } from 'framer-motion';
import { Container, Button, Avatar, Badge } from '@haven/ui';

const myGroups = [
  { name: 'Denver Divorce Support', members: 1240, emoji: '👥', active: true },
  { name: 'Single Moms Hiking', members: 856, emoji: '🥾', active: false },
  { name: 'Career Reboot', members: 2340, emoji: '💼', active: false },
];

const suggestedGroups = [
  { name: 'Book Club', members: 432, emoji: '📚' },
  { name: 'Mindful Mornings', members: 567, emoji: '🧘' },
];

const posts = [
  {
    author: 'Michelle R.',
    initial: 'M',
    time: '2 hours ago',
    group: 'Denver Divorce Support',
    content: 'Just wanted to share a win today! I finally signed the lease on my own apartment. It's small but it's MINE. Thank you all for the encouragement during the hardest months. 💪',
    likes: 24,
    comments: 8,
    color: 'bg-soft-sage/30',
  },
  {
    author: 'Jennifer K.',
    initial: 'J',
    time: '5 hours ago',
    group: 'Career Reboot',
    content: 'Has anyone here transitioned from teaching to tech? I'd love to hear about your experience and what certifications helped you make the switch.',
    likes: 15,
    comments: 12,
    color: 'bg-accent-gold/30',
  },
];

export default function CommunityPage() {
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
                Community
              </motion.h1>
              <p className="text-medium-gray mt-1">Your groups and discussions</p>
            </div>
            <Button size="sm">+ Create Group</Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10">
                <h3 className="font-heading text-lg text-charcoal dark:text-warm-ivory mb-4">Your Groups</h3>
                <div className="space-y-2">
                  {myGroups.map((group) => (
                    <div
                      key={group.name}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                        group.active
                          ? 'bg-accent-gold/5 border border-accent-gold/20'
                          : 'hover:bg-light-gray dark:hover:bg-dark-elevated'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-dusty-rose/20 flex items-center justify-center text-sm">{group.emoji}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-charcoal dark:text-warm-ivory">{group.name}</p>
                        <p className="text-xs text-medium-gray">{group.members.toLocaleString()} members</p>
                      </div>
                      {group.active && <span className="w-2 h-2 rounded-full bg-accent-gold" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10">
                <h3 className="font-heading text-lg text-charcoal dark:text-warm-ivory mb-4">Suggested</h3>
                <div className="space-y-3">
                  {suggestedGroups.map((group) => (
                    <div key={group.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-info-blue/20 flex items-center justify-center text-sm">{group.emoji}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-charcoal dark:text-warm-ivory">{group.name}</p>
                        <p className="text-xs text-medium-gray">{group.members.toLocaleString()} members</p>
                      </div>
                      <button className="text-xs text-accent-gold font-medium hover:underline">Join</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Composer */}
              <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10">
                <div className="flex gap-4">
                  <Avatar name="Sarah Mitchell" size="md" />
                  <div className="flex-1">
                    <textarea
                      placeholder="Share something with your community..."
                      className="w-full p-3 rounded-xl border border-medium-gray/20 resize-none focus:outline-none focus:ring-2 focus:ring-accent-gold/50 text-charcoal dark:text-warm-ivory text-sm bg-transparent"
                      rows={3}
                    />
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg hover:bg-light-gray dark:hover:bg-dark-elevated transition-colors text-medium-gray">📎</button>
                        <button className="p-2 rounded-lg hover:bg-light-gray dark:hover:bg-dark-elevated transition-colors text-medium-gray">📷</button>
                        <button className="p-2 rounded-lg hover:bg-light-gray dark:hover:bg-dark-elevated transition-colors text-medium-gray">😊</button>
                      </div>
                      <Button size="sm">Post</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts */}
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${post.color} flex items-center justify-center font-medium text-charcoal`}>
                      {post.initial}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal dark:text-warm-ivory">{post.author}</p>
                      <p className="text-xs text-medium-gray">{post.time} • {post.group}</p>
                    </div>
                  </div>
                  <p className="text-charcoal dark:text-warm-ivory mb-4">{post.content}</p>
                  <div className="flex items-center gap-6 text-sm text-medium-gray">
                    <button className="flex items-center gap-2 hover:text-accent-gold transition-colors">❤️ {post.likes}</button>
                    <button className="flex items-center gap-2 hover:text-accent-gold transition-colors">💬 {post.comments} comments</button>
                    <button className="flex items-center gap-2 hover:text-accent-gold transition-colors">↗️ Share</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
