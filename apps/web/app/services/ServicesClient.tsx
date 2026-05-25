'use client';

import { motion } from 'framer-motion';
import { Container, Button, Badge, StarRating } from '@haven/ui';

const services = [
  {
    name: 'Lisa Chen, Esq.',
    title: 'Family Law Consultation',
    rating: 5,
    reviews: 48,
    price: '$150/hr',
    description: 'Specialized in divorce mediation and custody agreements. 15 years experience.',
    color: 'bg-dusty-rose/30',
    initial: 'L',
  },
  {
    name: 'Rachel Torres, CFP',
    title: 'Post-Divorce Financial Planning',
    rating: 5,
    reviews: 32,
    price: '$120/hr',
    description: 'Rebuild your financial foundation. Budgeting, retirement planning, and asset management.',
    color: 'bg-soft-sage/30',
    initial: 'R',
  },
  {
    name: 'Amanda Foster, LMFT',
    title: 'Therapy & Emotional Support',
    rating: 5,
    reviews: 64,
    price: '$100/hr',
    description: 'Individual and group therapy sessions. Sliding scale available.',
    color: 'bg-accent-gold/30',
    initial: 'A',
  },
];

export default function ServicesClient() {
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
                Services
              </motion.h1>
              <p className="text-medium-gray mt-1">Vetted professionals from our community</p>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm">Filters</Button>
              <Button size="sm">+ Offer Service</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-medium-gray/10 hover:border-accent-gold/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center text-lg font-medium text-charcoal`}>
                      {service.initial}
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal dark:text-warm-ivory">{service.name}</h3>
                      <StarRating value={service.rating} size="sm" readonly />
                    </div>
                  </div>
                  <Badge color="success">Verified</Badge>
                </div>
                <h4 className="font-heading text-lg text-charcoal dark:text-warm-ivory mb-2">{service.title}</h4>
                <p className="text-sm text-medium-gray mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent-gold font-medium">{service.price}</span>
                  <Button size="sm">Book Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
