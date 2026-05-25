import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOGS, COUNTRIES } from '../../../data/blogs';
import { AdsenseSlot, RMNPartners } from '../../../../components/RMNPartners';

interface LocalPageProps {
  params: {
    country: string;
    slug: string;
  };
}

// Generate static params for the top countries to speed up compilation, 
// while letting Next.js dynamic routing fallback handle all 190 countries on the fly!
export async function generateStaticParams() {
  const params: { country: string; slug: string }[] = [];
  // Build a representative set of high priority entries for pre-rendering
  const priorityCountries = COUNTRIES.slice(0, 10);
  const priorityBlogs = BLOGS.slice(0, 5);

  priorityCountries.forEach((c) => {
    priorityBlogs.forEach((blog) => {
      params.push({
        country: c.code.toLowerCase(),
        slug: blog.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: LocalPageProps): Promise<Metadata> {
  const countryCode = params.country.toUpperCase();
  const country = COUNTRIES.find((c) => c.code === countryCode || c.code.toLowerCase() === params.country.toLowerCase());
  const blog = BLOGS.find((b) => b.slug === params.slug);

  if (!blog || !country) return {};

  return {
    title: `${blog.title} (${country.name} Edition) | Haven Support`,
    description: `Localized in ${country.name}: ${blog.description} Access ${country.name}-specific support channels, currencies, and family court parameters.`,
    keywords: `${blog.keywords.join(', ')}, ${country.name} divorce help, ${country.name} separation rules, domestic guidelines ${country.name}`,
    alternates: {
      canonical: `https://haven-newbeginnings.org/blog/local/${params.country.toLowerCase()}/${blog.slug}`,
      languages: {
        'en-US': `https://haven-newbeginnings.org/blog/local/us/${blog.slug}`,
        'en-CA': `https://haven-newbeginnings.org/blog/local/ca/${blog.slug}`,
        'en-GB': `https://haven-newbeginnings.org/blog/local/gb/${blog.slug}`,
        'en-AU': `https://haven-newbeginnings.org/blog/local/au/${blog.slug}`,
        'en-NZ': `https://haven-newbeginnings.org/blog/local/nz/${blog.slug}`,
        'en-IE': `https://haven-newbeginnings.org/blog/local/ie/${blog.slug}`,
        'en-ZA': `https://haven-newbeginnings.org/blog/local/za/${blog.slug}`,
        'en-IN': `https://haven-newbeginnings.org/blog/local/in/${blog.slug}`,
        'en-SG': `https://haven-newbeginnings.org/blog/local/sg/${blog.slug}`,
      }
    }
  };
}

export default function LocalizedBlogPostPage({ params }: LocalPageProps) {
  const countryCode = params.country.toUpperCase();
  const country = COUNTRIES.find((c) => c.code === countryCode || c.code.toLowerCase() === params.country.toLowerCase());
  const blog = BLOGS.find((b) => b.slug === params.slug);

  if (!blog || !country) {
    notFound();
  }

  // Schema.org structured markup for International Target (Geo-coordinates & Country targeting)
  const localArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': `${blog.title} (${country.name} Local Resource Guide)`,
    'description': `Custom localized guide for ${country.name}: ${blog.description}`,
    'datePublished': blog.date,
    'inLanguage': country.language,
    'spatialCoverage': {
      '@type': 'AdministrativeArea',
      'name': country.name,
    },
    'author': {
      '@type': 'Person',
      'name': blog.author,
    },
    'publisher': {
      '@type': 'Organization',
      'name': `Haven Support Network - ${country.name}`,
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://haven-newbeginnings.org/logo.png',
      }
    }
  };

  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Dynamic Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localArticleSchema) }}
      />

      <article className="max-w-content mx-auto">
        
        {/* Back Link */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <Link 
            href="/blog"
            className="text-body-sm font-semibold text-dusty-rose hover:text-charcoal dark:hover:text-warm-ivory flex items-center gap-1 transition-colors animate-pulse-gentle"
          >
            ← Back to Main Directory
          </Link>
          <div className="bg-soft-sage/10 text-soft-sage text-[11px] font-mono px-3 py-1 rounded-sm-md font-bold border border-soft-sage/30">
            Localized Country Edition: {country.name} ({country.code})
          </div>
        </div>

        {/* Localized Banner Notice */}
        <section className="bg-white dark:bg-dark-surface border border-dusty-rose/25 p-5 rounded-xl-2xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm-md">
          <div>
            <span className="text-[10px] text-dusty-rose tracking-wider uppercase font-bold font-mono">International Integration</span>
            <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory mt-0.5">
              Specific Resources for Citizens in {country.name}
            </h4>
            <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-1">
              Customized with local legislative framework details, support hotlines, and default monetary values.
            </p>
          </div>
          <div className="bg-dusty-rose/10 text-dusty-rose text-h3 font-serif rounded-xl-2xl px-4 py-2 shrink-0 font-semibold border border-dusty-rose/20">
            {country.currency} Mapped
          </div>
        </section>

        {/* Article Header */}
        <header className="mb-8 border-b border-light-gray dark:border-dark-elevated pb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-dusty-rose/15 text-dusty-rose text-[11px] font-semibold px-2.5 py-1 rounded-sm-md uppercase">
              {blog.category} - {country.name}
            </span>
            <span className="text-caption text-charcoal/50 dark:text-warm-ivory/50 font-mono">
              Last Updated: {blog.date}
            </span>
          </div>
          <h1 className="font-heading text-h1 text-charcoal dark:text-warm-ivory leading-tight mb-4">
            {blog.title} in {country.name}
          </h1>
          <p className="text-body-lg text-charcoal/80 dark:text-warm-ivory/80 italic leading-relaxed">
            {blog.description.replace('Learn how', `Learn how residents in ${country.name}`)}
          </p>
        </header>

        {/* Adsense Slot Top */}
        <AdsenseSlot slotId={`blog-local-top-${country.code}`} />

        {/* Localized Reference Table (Highly readable for AI search engines - GEO/AEO optimization) */}
        <section className="my-8 bg-white dark:bg-dark-surface p-6 rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md">
          <h4 className="font-heading text-h3 text-charcoal dark:text-warm-ivory mb-4">
            Quick Reference Sheet: {country.name} Divorce Support
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-light-gray dark:divide-dark-elevated text-left">
              <thead>
                <tr className="bg-warm-ivory/20 dark:bg-dark-elevated/20 text-caption font-bold text-charcoal dark:text-warm-ivory uppercase tracking-wider">
                  <th className="p-3">Parameter</th>
                  <th className="p-3">Country Guideline / Detail</th>
                  <th className="p-3">Action Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-gray/60 dark:divide-dark-elevated/60 text-body-sm text-charcoal dark:text-warm-ivory">
                <tr>
                  <td className="p-3 font-semibold text-dusty-rose">Sovereign State</td>
                  <td className="p-3">{country.name} ({country.code})</td>
                  <td className="p-3 font-mono text-caption text-charcoal/50">Primary Region Target</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-dusty-rose">National Currency</td>
                  <td className="p-3">Official Currency: {country.currency}</td>
                  <td className="p-3 font-mono text-caption text-charcoal/50">Transition Budgets</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-dusty-rose">Legal Framework</td>
                  <td className="p-3">{country.legalTerm}</td>
                  <td className="p-3">
                    <a href="#" className="text-dusty-rose hover:underline font-semibold">Review Statutes</a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-dusty-rose">Local Support Agency</td>
                  <td className="p-3 font-semibold">{country.supportAgency}</td>
                  <td className="p-3">
                    <a href="#" className="text-soft-sage hover:underline font-semibold">Contact Agency</a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-dusty-rose">Primary Language</td>
                  <td className="p-3">{country.language}</td>
                  <td className="p-3 font-mono text-caption text-charcoal/50">Translation Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* GEO/AEO Direct Answer Box */}
        <section className="my-8 p-6 bg-white dark:bg-dark-surface rounded-xl-2xl border-l-4 border-soft-sage shadow-sm-md">
          <span className="text-[10px] tracking-wider text-soft-sage uppercase font-mono font-bold block mb-1">
            Answer Engine Optimization (AEO) Custom Target
          </span>
          <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory mb-2">
            Regional Policy Overview
          </h4>
          <p className="text-body-sm text-charcoal/80 dark:text-warm-ivory/85 leading-relaxed font-semibold">
            For individuals separating in {country.name}, the domestic legal guideline relies on {country.legalTerm}. Recommended practice dictates establishing personal financial assets in {country.currency} instantly, and contacting the {country.supportAgency} to access state-approved local mediation, safe housing resources, and transition benefits.
          </p>
        </section>

        {/* YouTube Synergy Video Player Integration */}
        {blog.youtubeId && (
          <section className="my-8 p-6 bg-white dark:bg-dark-surface rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md animate-pulse-gentle">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div>
                <span className="text-[10px] text-dusty-rose tracking-wider uppercase font-bold font-mono">YouTube Synergy Integration</span>
                <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory mt-0.5">{blog.youtubeTitle} ({country.name} Edition)</h4>
              </div>
              <div className="bg-red-500/10 text-red-500 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-red-500/20">
                ▶ YouTube Channel Link Active
              </div>
            </div>
            <div className="relative w-full aspect-video rounded-md-lg overflow-hidden shadow-sm-md bg-light-gray/20 dark:bg-dark-elevated/40">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src={`https://www.youtube.com/embed/${blog.youtubeId}`}
                title={blog.youtubeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}

        {/* Main Body Content with programmatic local keyword injections */}
        <div className="bg-white dark:bg-dark-surface rounded-xl-2xl p-6 sm:p-10 border border-light-gray dark:border-dark-elevated shadow-sm-md">
          <div className="prose dark:prose-invert max-w-none text-charcoal dark:text-warm-ivory leading-relaxed text-body-sm sm:text-body-lg space-y-6">
            {blog.content.split('\n\n').map((paragraph, index) => {
              // Inject local references programmatically inside the handcrafted text
              let text = paragraph
                .replace(/divorce/g, `divorce under ${country.legalTerm}`)
                .replace(/budgets/g, `budgets in ${country.currency}`)
                .replace(/expenses/g, `expenses in ${country.currency}`)
                .replace(/household/g, `household in ${country.name}`)
                .replace(/mentorship groups/g, `mentorship groups supported by ${country.supportAgency}`);

              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-heading text-h3 text-charcoal dark:text-warm-ivory pt-4 mt-6 first:mt-0 border-b border-light-gray/40 dark:border-dark-elevated/40 pb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 font-body text-body-sm sm:text-body-lg">
                    {text.split('\n').map((item, key) => (
                      <li key={key} className="text-charcoal/80 dark:text-warm-ivory/80">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2 font-body text-body-sm sm:text-body-lg">
                    {text.split('\n').map((item, key) => (
                      <li key={key} className="text-charcoal/80 dark:text-warm-ivory/80">
                        {item.replace(/^\d+\.\s/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-charcoal/80 dark:text-warm-ivory/80 leading-relaxed">
                  {text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Adsense Slot Middle */}
        <AdsenseSlot slotId={`blog-local-mid-${country.code}`} />

        {/* Structured Local FAQ Accordion */}
        <section className="my-12 bg-white dark:bg-dark-surface p-6 sm:p-8 rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md">
          <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory mb-6 pb-2 border-b border-light-gray dark:border-dark-elevated">
            Frequently Asked Questions ({country.name} Edition)
          </h3>
          <div className="space-y-4">
            {blog.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-warm-ivory/20 dark:bg-dark-elevated/20 border border-light-gray/60 dark:border-dark-elevated/60 rounded-md-lg hover:border-dusty-rose/20 transition-all duration-200"
              >
                <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory flex items-start gap-2">
                  <span className="text-dusty-rose font-mono">Q.</span>
                  {faq.question.replace(/\?$/, ` in ${country.name}?`)}
                </h4>
                <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-2 pl-5 leading-relaxed border-l-2 border-dusty-rose/20">
                  {faq.answer.replace(/local jurisdiction/g, `${country.name} family court rules (${country.legalTerm})`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Localized Backlink Syndication & Sharing Generator (fuels organic backlink growth) */}
        <details className="my-8 bg-white dark:bg-dark-surface p-5 rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md cursor-pointer group">
          <summary className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="text-dusty-rose group-hover:rotate-12 transition-transform duration-300">🔗</span>
              <span>Syndicate This {country.name} Guide / Share & Embed Backlink</span>
            </span>
            <span className="text-caption font-mono font-semibold text-charcoal/40 group-hover:text-dusty-rose transition-colors uppercase">Click to open embed codes</span>
          </summary>
          <div className="mt-4 pt-4 border-t border-light-gray/40 dark:border-dark-elevated/40 text-body-sm text-charcoal/80 dark:text-warm-ivory/80 space-y-4 cursor-default" onClick={(e) => e.stopPropagation()}>
            <p className="leading-relaxed">
              Are you a blogger, legal advisor, support worker, or community coordinator based in {country.name}? You are welcome to syndicate, quote, or reference this localized {country.name} resource. Use the optimized anchors below to establish organic backlinks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-dusty-rose block">HTML Embed Code ({country.code})</span>
                <textarea 
                  readOnly 
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  value={`<a href="https://haven-newbeginnings.org/blog/local/${country.code.toLowerCase()}/${blog.slug}">${blog.title} (${country.name} Edition)</a>`}
                  className="w-full p-3 bg-warm-ivory/50 dark:bg-dark-elevated/40 border border-light-gray dark:border-dark-elevated rounded-sm-md font-mono text-caption text-charcoal dark:text-warm-ivory select-all outline-hidden h-20 resize-none"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-dusty-rose block">Markdown Embed Code ({country.code})</span>
                <textarea 
                  readOnly 
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  value={`[${blog.title} (${country.name} Edition)](https://haven-newbeginnings.org/blog/local/${country.code.toLowerCase()}/${blog.slug})`}
                  className="w-full p-3 bg-warm-ivory/50 dark:bg-dark-elevated/40 border border-light-gray dark:border-dark-elevated rounded-sm-md font-mono text-caption text-charcoal dark:text-warm-ivory select-all outline-hidden h-20 resize-none"
                />
              </div>
            </div>
            <p className="text-[10px] text-charcoal/40 dark:text-warm-ivory/40 font-mono italic text-center">
              Optimized for regional geo-indexing algorithms. Builds organic backlinks dynamically.
            </p>
          </div>
        </details>

        {/* Retail Media Placements */}
        <RMNPartners />

        {/* Adsense Slot Bottom */}
        <AdsenseSlot slotId={`blog-local-bottom-${country.code}`} />

      </article>
    </main>
  );
}
