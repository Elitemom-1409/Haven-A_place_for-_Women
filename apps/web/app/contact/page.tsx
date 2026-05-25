import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Our Support Team | Haven',
  description: 'Reach out to Haven\'s compassionate community and professional support staff. We are here to help you navigate divorce transition queries, professional partnerships, and site features.',
  keywords: 'contact divorce support, help single mom community, secure help separation, legal support coordination',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/contact',
    languages: {
      'en-US': 'https://haven-newbeginnings.org/contact?country=us',
      'en-CA': 'https://haven-newbeginnings.org/contact?country=ca',
      'en-GB': 'https://haven-newbeginnings.org/contact?country=gb',
      'en-AU': 'https://haven-newbeginnings.org/contact?country=au',
      'en-NZ': 'https://haven-newbeginnings.org/contact?country=nz',
      'en-ZA': 'https://haven-newbeginnings.org/contact?country=za',
      'en-IN': 'https://haven-newbeginnings.org/contact?country=in',
    }
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
