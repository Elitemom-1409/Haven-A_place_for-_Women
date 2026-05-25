import { Metadata } from 'next';
import EventsClient from './EventsClient';

export const metadata: Metadata = {
  title: 'Community Events & Support Meetups | Haven',
  description: 'Join local sunset hikes, HR resume reviews, coffee connections, and single mom support groups in your region. Connect with other resilient women near you today.',
  keywords: 'single mom coffee meetups, divorce support hikes, single mothers HR workshops, local female community gatherings',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/events',
    languages: {
      'en-US': 'https://haven-newbeginnings.org/events?country=us',
      'en-CA': 'https://haven-newbeginnings.org/events?country=ca',
      'en-GB': 'https://haven-newbeginnings.org/events?country=gb',
      'en-AU': 'https://haven-newbeginnings.org/events?country=au',
      'en-NZ': 'https://haven-newbeginnings.org/events?country=nz',
      'en-ZA': 'https://haven-newbeginnings.org/events?country=za',
      'en-IN': 'https://haven-newbeginnings.org/events?country=in',
    }
  }
};

export default function EventsPage() {
  return <EventsClient />;
}
