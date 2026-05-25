import { Metadata } from 'next';
import StoriesClient from './StoriesClient';

export const metadata: Metadata = {
  title: 'Real Recovery Stories of Resilient Women | Haven',
  description: 'Read first-hand accounts and inspirational stories of stay-at-home mothers transitioning to CEOs, navigating parallel parenting with grace, and healing emotional trauma.',
  keywords: 'divorce recovery stories, resilient women separation narratives, single mothers job transitions, healing family law',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/stories',
    languages: {
      'en-US': 'https://haven-newbeginnings.org/stories?country=us',
      'en-CA': 'https://haven-newbeginnings.org/stories?country=ca',
      'en-GB': 'https://haven-newbeginnings.org/stories?country=gb',
      'en-AU': 'https://haven-newbeginnings.org/stories?country=au',
      'en-NZ': 'https://haven-newbeginnings.org/stories?country=nz',
      'en-ZA': 'https://haven-newbeginnings.org/stories?country=za',
      'en-IN': 'https://haven-newbeginnings.org/stories?country=in',
    }
  }
};

export default function StoriesPage() {
  return <StoriesClient />;
}
