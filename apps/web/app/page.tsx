import { Metadata } from 'next';
import { HeroSection } from './sections/HeroSection';
import { SocialProofSection } from './sections/SocialProofSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { FeaturesBentoSection } from './sections/FeaturesBentoSection';
import { ImpactStatsSection } from './sections/ImpactStatsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CTABannerSection } from './sections/CTABannerSection';

export const metadata: Metadata = {
  title: 'Haven — A Safe Space for New Beginnings',
  description: 'Haven connects divorced and separating women with community, employment, and the support you deserve.',
  keywords: 'divorce support, separating women community, single mom jobs, family law advice, emotional recovery divorce',
  alternates: {
    canonical: 'https://haven-newbeginnings.org',
    languages: {
      'en-US': 'https://haven-newbeginnings.org?country=us',
      'en-CA': 'https://haven-newbeginnings.org?country=ca',
      'en-GB': 'https://haven-newbeginnings.org?country=gb',
      'en-AU': 'https://haven-newbeginnings.org?country=au',
      'en-NZ': 'https://haven-newbeginnings.org?country=nz',
      'en-ZA': 'https://haven-newbeginnings.org?country=za',
      'en-IN': 'https://haven-newbeginnings.org?country=in',
    }
  }
};


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base">
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FeaturesBentoSection />
      <ImpactStatsSection />
      <TestimonialsSection />
      <CTABannerSection />
    </main>
  );
}
