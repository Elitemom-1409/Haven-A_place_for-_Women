'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@haven/ui';

const testimonials = [
  {
    quote: "I was terrified to start over at 45. Haven connected me with women who became my lifeline. Six months later, I have a new job, a hiking group, and friends who truly get it.",
    author: "Michelle R.",
    since: "2023",
    location: "Denver, CO",
  },
  {
    quote: "The legal resources alone saved me thousands. But the community? That's priceless. I don't know where I'd be without these women.",
    author: "Jennifer K.",
    since: "2024",
    location: "Austin, TX",
  },
  {
    quote: "As a single mom, I thought I'd never have time for myself. Haven's childcare-friendly events changed everything. My kids made friends too!",
    author: "Angela T.",
    since: "2023",
    location: "Portland, OR",
  },
  {
    quote: "I went from isolated and ashamed to empowered and employed. The job board connected me with an employer who values my experience.",
    author: "Rachel S.",
    since: "2024",
    location: "Chicago, IL",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="py-24 bg-warm-ivory dark:bg-dark-base"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-h2 text-charcoal dark:text-warm-ivory text-center mb-16"
        >
          Hear From Our Community
        </motion.h2>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <blockquote className="font-heading text-h3 text-charcoal dark:text-warm-ivory leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-dusty-rose/30 flex items-center justify-center text-xl">
                  {testimonials[current].author[0]}
                </div>
                <div className="text-left">
                  <p className="font-medium text-charcoal dark:text-warm-ivory">{testimonials[current].author}</p>
                  <p className="text-body-sm text-medium-gray">
                    Member since {testimonials[current].since} • {testimonials[current].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-accent-gold w-6' : 'bg-medium-gray/30'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
