import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Vetted Separation Professionals & Advisors | Haven Services',
  description: 'Book consultations with verified family law attorneys, certified post-divorce financial planners, and compassionate trauma therapists dedicated to women rebuilding lives.',
  keywords: 'divorce lawyers for women, certified divorce financial analysts, post divorce trauma therapy, family mediation counseling',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/services',
    languages: {
      'en-US': 'https://haven-newbeginnings.org/services?country=us',
      'en-CA': 'https://haven-newbeginnings.org/services?country=ca',
      'en-GB': 'https://haven-newbeginnings.org/services?country=gb',
      'en-AU': 'https://haven-newbeginnings.org/services?country=au',
      'en-NZ': 'https://haven-newbeginnings.org/services?country=nz',
      'en-ZA': 'https://haven-newbeginnings.org/services?country=za',
      'en-IN': 'https://haven-newbeginnings.org/services?country=in',
    }
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
