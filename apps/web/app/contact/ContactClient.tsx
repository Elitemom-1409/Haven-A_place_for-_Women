'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Button, Input, Textarea } from '@haven/ui';

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base pb-24">
      <section className="pt-24 pb-12">
        <Container size="narrow" className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl text-charcoal dark:text-warm-ivory mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-medium-gray">We&apos;re here to help. Reach out anytime.</p>
        </Container>
      </section>

      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg-xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success-green/10 flex items-center justify-center text-3xl">✓</div>
              <h3 className="font-heading text-2xl text-charcoal dark:text-warm-ivory mb-2">Message Sent!</h3>
              <p className="text-medium-gray">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="First Name" placeholder="Jane" required />
                <Input label="Last Name" placeholder="Doe" required />
              </div>
              <Input label="Email" type="email" placeholder="you@example.com" required />
              <Input label="Subject" placeholder="How can we help?" required />
              <Textarea label="Message" placeholder="Tell us what's on your mind..." rows={5} required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          )}
        </motion.div>
      </Container>
    </main>
  );
}
