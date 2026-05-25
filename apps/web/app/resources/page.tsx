import { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
  title: 'Free Empowerment & Growth Resource Guides | Haven',
  description: 'Access curated articles, checklists, and calculators for managing separation. Includes professional legal directories, post-divorce financial budgets, emotional self-care prompts, and co-parenting models.',
  keywords: 'divorce checklists, child custody apps, spousal assets calculation, emotional recovery somatic exercises, solo renting guides',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/resources',
    languages: {
      'en-US': 'https://haven-newbeginnings.org/resources?country=us',
      'en-CA': 'https://haven-newbeginnings.org/resources?country=ca',
      'en-GB': 'https://haven-newbeginnings.org/resources?country=gb',
      'en-AU': 'https://haven-newbeginnings.org/resources?country=au',
      'en-NZ': 'https://haven-newbeginnings.org/resources?country=nz',
      'en-ZA': 'https://haven-newbeginnings.org/resources?country=za',
      'en-IN': 'https://haven-newbeginnings.org/resources?country=in',
    }
  }
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
