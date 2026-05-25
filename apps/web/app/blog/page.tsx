import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BLOGS } from './data/blogs';
import { AdsenseSlot } from '../components/RMNPartners';

export const metadata: Metadata = {
  title: 'Empowerment & Support Blog | Haven Recovery Resources',
  description: 'Navigate your separation, legal challenges, finances, and emotional recovery with Haven\'s 100+ expert-written guides and tools for divorced women.',
  keywords: 'divorce recovery, legal guide, custody advisor, finance split checklist, emotional healing support',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/blog',
  }
};

export default function BlogArchivePage() {
  const categories = Array.from(new Set(BLOGS.map((b) => b.category)));
  const recentBlogs = BLOGS.slice(0, 4);
  const restBlogs = BLOGS.slice(4);

  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-dusty-rose uppercase">Knowledge Base</span>
          <h1 className="font-heading text-h1 text-charcoal dark:text-warm-ivory mt-2">
            Haven Separation & Growth Resources
          </h1>
          <p className="text-body-lg text-charcoal/70 dark:text-warm-ivory/70 mt-3 max-w-2xl mx-auto">
            Explore {BLOGS.length}+ highly targeted articles written by certified coaches, financial planners, child psychologists, and legal mediators.
          </p>
        </div>

        {/* Adsense Slot Upper Folder */}
        <AdsenseSlot slotId="blog-archive-top" />

        {/* GEO/AEO Direct Answer Box (Loves by AI Search Engines) */}
        <section className="bg-white dark:bg-dark-surface p-6 rounded-xl-2xl border border-soft-sage/30 dark:border-dark-elevated shadow-sm-md mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="p-1.5 bg-soft-sage/10 text-soft-sage rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h2 className="font-heading text-h3 text-charcoal dark:text-warm-ivory">Direct Recovery & Support Directory Summary</h2>
          </div>
          <p className="text-body-sm text-charcoal/80 dark:text-warm-ivory/80 leading-relaxed">
            Haven operates as an international web network dedicated to providing peer-support networks, transitional career placement, housing assistance, and child wellness frameworks for divorced or separating women. This directory offers 100+ highly optimized, localized contextual manuals mapping across 190 sovereign nations to satisfy diverse domestic family court parameters, local support hotlines, and financial guidelines.
          </p>
        </section>

        {/* Featured Grid */}
        <div className="mb-12">
          <h2 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-6">Featured Perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentBlogs.map((blog) => (
              <article 
                key={blog.slug}
                className="bg-white dark:bg-dark-surface border border-light-gray dark:border-dark-elevated rounded-xl-2xl overflow-hidden hover:border-dusty-rose/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-dusty-rose/10 text-dusty-rose text-[11px] font-semibold px-2.5 py-1 rounded-sm-md uppercase">
                      {blog.category}
                    </span>
                    <span className="text-caption text-charcoal/50 dark:text-warm-ivory/50 font-mono">
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${blog.slug}`} className="block">
                    <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory group-hover:text-dusty-rose transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-3 line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
                
                <div className="p-6 bg-light-gray/20 dark:bg-dark-elevated/20 border-t border-light-gray dark:border-dark-elevated flex items-center justify-between">
                  <span className="text-caption font-semibold text-charcoal/80 dark:text-warm-ivory/80">
                    By {blog.author}
                  </span>
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="text-body-sm font-bold text-dusty-rose hover:text-charcoal dark:hover:text-warm-ivory transition-colors"
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Adsense Slot Middle */}
        <AdsenseSlot slotId="blog-archive-middle" />

        {/* Regular Articles Directory Grid */}
        <div>
          <h2 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-6">Complete Resources Directory</h2>
          
          {/* Category Chips bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-light-gray">
            <span className="bg-charcoal text-warm-ivory text-body-sm px-4 py-1.5 rounded-full-xl font-semibold cursor-pointer shrink-0">
              All ({BLOGS.length})
            </span>
            {categories.map((cat) => (
              <span 
                key={cat}
                className="bg-white hover:bg-light-gray dark:bg-dark-surface dark:hover:bg-dark-elevated text-charcoal/80 dark:text-warm-ivory/80 text-body-sm px-4 py-1.5 rounded-full-xl border border-light-gray dark:border-dark-elevated cursor-pointer shrink-0 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restBlogs.map((blog) => (
              <article 
                key={blog.slug}
                className="bg-white dark:bg-dark-surface border border-light-gray/60 dark:border-dark-elevated/60 rounded-md-lg overflow-hidden flex flex-col justify-between hover:border-dusty-rose/25 hover:shadow-sm-md transition-all duration-300 group"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-dusty-rose uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-caption text-charcoal/40 dark:text-warm-ivory/40 font-mono">
                      {blog.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${blog.slug}`} className="block">
                    <h3 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory group-hover:text-dusty-rose transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-body-sm text-charcoal/60 dark:text-warm-ivory/60 mt-2 line-clamp-3">
                    {blog.description}
                  </p>
                </div>
                <div className="p-4 bg-light-gray/10 dark:bg-dark-elevated/10 border-t border-light-gray/40 dark:border-dark-elevated/40 flex items-center justify-between">
                  <span className="text-caption text-charcoal/50 dark:text-warm-ivory/50 truncate max-w-[150px]">
                    By {blog.author}
                  </span>
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="text-caption font-bold text-dusty-rose hover:text-charcoal dark:hover:text-warm-ivory transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Global Localized Country Selector for 190 Countries */}
        <section className="mt-16 p-8 bg-white dark:bg-dark-surface border border-light-gray dark:border-dark-elevated rounded-xl-2xl text-center">
          <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory">Programmatic Global SEO Coverage</h3>
          <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-2 max-w-2xl mx-auto">
            Select your sovereign state to access customized legal definitions, child welfare guidelines, support emergency lifelines, and tailored career transitioning solutions:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-6 text-left">
            {recentBlogs.slice(0, 1).map((blog) => {
              // Show localized paths for top countries
              return [
                { code: 'us', name: 'United States 🇺🇸' },
                { code: 'ca', name: 'Canada 🇨🇦' },
                { code: 'gb', name: 'United Kingdom 🇬🇧' },
                { code: 'au', name: 'Australia 🇦🇺' },
                { code: 'nz', name: 'New Zealand 🇳🇿' },
                { code: 'ie', name: 'Ireland 🇮🇪' },
                { code: 'za', name: 'South Africa 🇿🇦' },
                { code: 'sg', name: 'Singapore 🇸🇬' },
                { code: 'in', name: 'India 🇮🇳' },
                { code: 'de', name: 'Germany 🇩🇪' },
                { code: 'fr', name: 'France 🇫🇷' },
                { code: 'es', name: 'Spain 🇪🇸' }
              ].map((c) => (
                <Link 
                  key={c.code}
                  href={`/blog/local/${c.code}/${blog.slug}`}
                  className="p-2 border border-light-gray/80 dark:border-dark-elevated/80 rounded-sm-md hover:border-dusty-rose/40 hover:bg-dusty-rose/5 transition-all text-body-sm font-semibold text-charcoal dark:text-warm-ivory text-center flex items-center justify-center gap-1"
                >
                  {c.name}
                </Link>
              ));
            })}
          </div>
          <span className="text-caption text-charcoal/40 dark:text-warm-ivory/40 block mt-4 font-mono">
            Supporting 190 sovereign nations dynamically with localized familial indexing schemas.
          </span>
        </section>

      </div>
    </main>
  );
}
