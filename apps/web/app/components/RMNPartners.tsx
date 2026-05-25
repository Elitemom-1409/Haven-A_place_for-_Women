import React from 'react';

interface PartnerProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
  imageUrl: string;
  ctaText: string;
  link: string;
  sponsored: boolean;
}

const SPONSORED_PRODUCTS: PartnerProduct[] = [
  {
    id: 'our-family-wizard',
    name: 'OurFamilyWizard Co-Parenting App',
    category: 'Co-Parenting Support',
    description: 'The leading tool for managing custody schedules, secure parenting communication, and joint expense tracking.',
    price: '$99/year',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=200&auto=format&fit=crop&q=60',
    ctaText: 'Get 10% Off Now',
    link: '#',
    sponsored: true
  },
  {
    id: 'sterling-mediators',
    name: 'Sterling Separation Legal Mediators',
    category: 'Legal Solutions',
    description: 'Expert collaborative law and low-stress mediation support designed specifically for resolving separations amicably.',
    price: 'Free Consultation',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=200&auto=format&fit=crop&q=60',
    ctaText: 'Book Free Consultation',
    link: '#',
    sponsored: true
  },
  {
    id: 'mindful-healing',
    name: 'Inner Sanctuary Mindfulness Therapy',
    category: 'Well-being & Recovery',
    description: 'Professional online somatic counseling and emotional trauma integration therapies for women navigating life shifts.',
    price: '$65/session',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=60',
    ctaText: 'Claim Wellness Credit',
    link: '#',
    sponsored: true
  }
];

export function RMNPartners() {
  return (
    <div className="my-12 p-6 bg-white dark:bg-dark-surface rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <div>
          <span className="text-xs font-semibold tracking-widest text-dusty-rose uppercase">Curated Resources</span>
          <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory mt-1">Recommended Partner Solutions</h3>
        </div>
        <div className="bg-soft-sage/10 text-soft-sage text-caption px-3 py-1 rounded-sm-md font-mono border border-soft-sage/20">
          Retail Media Network Partner placements
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SPONSORED_PRODUCTS.map((partner) => (
          <div 
            key={partner.id}
            className="flex flex-col h-full bg-warm-ivory/30 dark:bg-dark-elevated/40 border border-light-gray/60 dark:border-dark-elevated/60 rounded-md-lg overflow-hidden hover:border-dusty-rose/40 hover:shadow-glow transition-all duration-300 group"
          >
            <div className="relative h-40 w-full overflow-hidden bg-light-gray/40">
              {/* Fallback pattern in case image fails to render */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dusty-rose/20 to-accent-gold/20 flex items-center justify-center text-charcoal/30 font-serif text-xl italic select-none">
                {partner.category}
              </div>
              <img 
                src={partner.imageUrl} 
                alt={partner.name}
                className="w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              {partner.sponsored && (
                <span className="absolute top-2 right-2 bg-charcoal/80 text-warm-ivory text-[10px] uppercase font-mono px-2 py-0.5 rounded tracking-wider backdrop-blur-xs">
                  Sponsored Partner
                </span>
              )}
            </div>
            
            <div className="flex flex-col flex-1 p-4">
              <span className="text-[11px] font-semibold text-dusty-rose uppercase tracking-wider mb-1">
                {partner.category}
              </span>
              <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory group-hover:text-dusty-rose transition-colors duration-200">
                {partner.name}
              </h4>
              <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-2 flex-grow line-clamp-3">
                {partner.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-light-gray/40 dark:border-dark-elevated/40 flex items-center justify-between">
                <div>
                  <span className="text-caption text-charcoal/50 dark:text-warm-ivory/50 block">Pricing</span>
                  <span className="text-body-sm font-semibold text-charcoal dark:text-warm-ivory">{partner.price}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-accent-gold">★</span>
                  <span className="text-body-sm font-mono font-bold text-charcoal dark:text-warm-ivory">{partner.rating}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 px-4 bg-charcoal hover:bg-dusty-rose dark:bg-dark-elevated dark:hover:bg-dusty-rose text-warm-ivory hover:text-white text-body-sm font-semibold rounded-sm-md transition-all duration-300 active:scale-98">
                {partner.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Adsense High-Revenue Ad Slot Placement component for easy ads.txt approval and high CPC clicks
export function AdsenseSlot({ slotId, format = 'auto', responsive = true }: { slotId: string, format?: string, responsive?: boolean }) {
  return (
    <div className="my-8 w-full overflow-hidden text-center">
      <span className="text-[10px] tracking-widest text-charcoal/30 dark:text-warm-ivory/30 uppercase block mb-1">Advertisement</span>
      <div className="mx-auto min-h-[90px] max-w-content bg-light-gray/20 dark:bg-dark-surface/40 border border-dashed border-light-gray dark:border-dark-elevated rounded-md-lg p-4 flex flex-col items-center justify-center hover:bg-light-gray/30 transition-all duration-200 group">
        <div className="flex items-center gap-2 text-charcoal/40 dark:text-warm-ivory/40">
          <svg className="w-5 h-5 text-dusty-rose group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-mono text-body-sm font-semibold">Google Adsense Container [Slot: {slotId}]</span>
        </div>
        <p className="text-[11px] text-charcoal/40 dark:text-warm-ivory/30 mt-1 max-w-md">
          Configured for Adsense High-Value CPC keywords optimization. (Auto-renders in production).
        </p>
        
        {/* Hidden active Adsense code that would activate in production */}
        {/*
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-0000000000000000"
             data-ad-slot={slotId}
             data-ad-format={format}
             data-full-width-responsive={responsive ? "true" : "false"}></ins>
        */}
      </div>
    </div>
  );
}
