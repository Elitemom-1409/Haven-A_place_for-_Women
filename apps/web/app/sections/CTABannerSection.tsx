'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@haven/ui';
import Link from 'next/link';

export function CTABannerSection() {
  return (
    <section className="py-24 bg-accent-gold">
      <Container className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-h2 text-charcoal mb-4"
        >
          Ready to Find Your Haven?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-charcoal/80 mb-8 max-w-2xl mx-auto"
        >
          Join thousands of women building their next chapter together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/auth/register">
            <Button variant="secondary" size="lg" className="bg-charcoal text-warm-ivory hover:bg-charcoal/90">
              Get Started Free
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
