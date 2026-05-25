import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Our Mission & Story | Haven Recovery Support',
  description: 'Learn about Haven\'s commitment to building a safe, private community for separated and divorced women. Rebuild your life with professional career, legal, and financial planning.',
  keywords: 'divorce community, single mom support network, women separation team, rebuilding life after divorce',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/about',
    languages: {
      'en-US': 'https://haven-newbeginnings.org/about?country=us',
      'en-CA': 'https://haven-newbeginnings.org/about?country=ca',
      'en-GB': 'https://haven-newbeginnings.org/about?country=gb',
      'en-AU': 'https://haven-newbeginnings.org/about?country=au',
      'en-NZ': 'https://haven-newbeginnings.org/about?country=nz',
      'en-ZA': 'https://haven-newbeginnings.org/about?country=za',
      'en-IN': 'https://haven-newbeginnings.org/about?country=in',
    }
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
