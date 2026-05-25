'use client';

import { motion } from 'framer-motion';
import { Container } from '@haven/ui';

const values = [
  { icon: '💜', title: 'Safe & Private', desc: 'Verified members only. Your privacy is our highest priority.' },
  { icon: '🤝', title: 'Real Connections', desc: 'Meet women who truly understand your journey.' },
  { icon: '🚀', title: 'Thrive Forward', desc: 'Access career, legal, and emotional support.' },
];

const team = [
  { name: 'Emma Wilson', role: 'Co-Founder & CEO' },
  { name: 'Olivia Chen', role: 'Co-Founder & CTO' },
  { name: 'Sophia Martinez', role: 'Head of Community' },
  { name: 'Ava Johnson', role: 'Head of Partnerships' },
];

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-24 pb-16">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl text-charcoal dark:text-warm-ivory mb-6"
          >
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed"
          >
            Haven was born from a simple belief: no woman should navigate divorce or separation alone.
            We&apos;re building the world&apos;s most supportive community for women rebuilding their lives.
          </motion.p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dusty-rose/10 dark:bg-dusty-rose/5 flex items-center justify-center text-4xl">
                  {v.icon}
                </div>
                <h3 className="font-heading text-2xl text-charcoal dark:text-warm-ivory mb-3">{v.title}</h3>
                <p className="text-medium-gray">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-light-gray dark:bg-dark-surface">
        <Container>
          <h2 className="font-heading text-4xl text-charcoal dark:text-warm-ivory text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-dusty-rose/30 to-soft-sage/30" />
                <h4 className="font-heading text-xl text-charcoal dark:text-warm-ivory">{member.name}</h4>
                <p className="text-sm text-medium-gray">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
