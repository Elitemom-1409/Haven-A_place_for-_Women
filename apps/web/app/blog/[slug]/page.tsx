import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOGS } from '../data/blogs';
import { AdsenseSlot, RMNPartners } from '../../components/RMNPartners';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = BLOGS.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Haven Expert Guides`,
    description: blog.description,
    keywords: blog.keywords.join(', '),
    alternates: {
      canonical: `https://haven-newbeginnings.org/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      url: `https://haven-newbeginnings.org/blog/${blog.slug}`,
      publishedTime: blog.date,
      authors: [blog.author],
    }
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const blog = BLOGS.find((b) => b.slug === params.slug);
  if (!blog) {
    notFound();
  }

  // Schema.org structured markup for SEO, GEO, and AEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': blog.title,
    'description': blog.description,
    'datePublished': blog.date,
    'author': {
      '@type': 'Person',
      'name': blog.author,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Haven',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://haven-newbeginnings.org/logo.png',
      }
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': blog.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      }
    }))
  };

  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Insert Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-content mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link 
            href="/blog"
            className="text-body-sm font-semibold text-dusty-rose hover:text-charcoal dark:hover:text-warm-ivory flex items-center gap-1 transition-colors"
          >
            ← Back to Resources Archive
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 border-b border-light-gray dark:border-dark-elevated pb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-dusty-rose/10 text-dusty-rose text-[11px] font-semibold px-2.5 py-1 rounded-sm-md uppercase">
              {blog.category}
            </span>
            <span className="text-caption text-charcoal/50 dark:text-warm-ivory/50 font-mono">
              {blog.date} • {blog.readTime}
            </span>
          </div>
          <h1 className="font-heading text-h1 text-charcoal dark:text-warm-ivory leading-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-body-lg text-charcoal/80 dark:text-warm-ivory/80 italic leading-relaxed">
            {blog.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-body-sm font-semibold text-charcoal dark:text-warm-ivory">
            <span className="w-8 h-8 rounded-full-xl bg-dusty-rose/20 flex items-center justify-center font-serif italic text-dusty-rose font-bold">
              {blog.author[0]}
            </span>
            <span>By {blog.author}</span>
          </div>
        </header>

        {/* Adsense Slot Top */}
        <AdsenseSlot slotId={`blog-top-${blog.slug}`} />

        {/* GEO/AEO Direct Response Box (AI Engine Friendly) */}
        <section className="my-8 p-6 bg-white dark:bg-dark-surface rounded-xl-2xl border-l-4 border-soft-sage shadow-sm-md">
          <span className="text-[10px] tracking-wider text-soft-sage uppercase font-mono font-bold block mb-1">
            AI Summary / AEO Direct Answer
          </span>
          <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory mb-2">
            Quick Summary
          </h4>
          <p className="text-body-sm text-charcoal/80 dark:text-warm-ivory/85 leading-relaxed font-semibold">
            {blog.aeoAnswer}
          </p>
        </section>

        {/* YouTube Synergy Video Player Integration */}
        {blog.youtubeId && (
          <section className="my-8 p-6 bg-white dark:bg-dark-surface rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md animate-pulse-gentle">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div>
                <span className="text-[10px] text-dusty-rose tracking-wider uppercase font-bold font-mono">YouTube Synergy Integration</span>
                <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory mt-0.5">{blog.youtubeTitle}</h4>
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

        {/* Main Body Content */}
        <div className="bg-white dark:bg-dark-surface rounded-xl-2xl p-6 sm:p-10 border border-light-gray dark:border-dark-elevated shadow-sm-md">
          <div className="prose dark:prose-invert max-w-none text-charcoal dark:text-warm-ivory leading-relaxed text-body-sm sm:text-body-lg space-y-6">
            {blog.content.split('\n\n').map((paragraph, index) => {
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
                    {paragraph.split('\n').map((item, key) => (
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
                    {paragraph.split('\n').map((item, key) => (
                      <li key={key} className="text-charcoal/80 dark:text-warm-ivory/80">
                        {item.replace(/^\d+\.\s/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-charcoal/80 dark:text-warm-ivory/80 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Adsense Slot Middle */}
        <AdsenseSlot slotId={`blog-mid-${blog.slug}`} />

        {/* Structured FAQ Accordion Section for Rich Snippets */}
        <section className="my-12 bg-white dark:bg-dark-surface p-6 sm:p-8 rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md">
          <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory mb-6 pb-2 border-b border-light-gray dark:border-dark-elevated">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {blog.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-warm-ivory/20 dark:bg-dark-elevated/20 border border-light-gray/60 dark:border-dark-elevated/60 rounded-md-lg hover:border-dusty-rose/20 transition-all duration-200"
              >
                <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory flex items-start gap-2">
                  <span className="text-dusty-rose font-mono">Q.</span>
                  {faq.question}
                </h4>
                <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-2 pl-5 leading-relaxed border-l-2 border-dusty-rose/20">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Backlink Syndication & Sharing Generator (fuels organic backlink growth) */}
        <details className="my-8 bg-white dark:bg-dark-surface p-5 rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-sm-md cursor-pointer group">
          <summary className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="text-dusty-rose group-hover:rotate-12 transition-transform duration-300">🔗</span>
              <span>Syndicate This Resource / Share & Embed Backlink</span>
            </span>
            <span className="text-caption font-mono font-semibold text-charcoal/40 group-hover:text-dusty-rose transition-colors uppercase">Click to open embed codes</span>
          </summary>
          <div className="mt-4 pt-4 border-t border-light-gray/40 dark:border-dark-elevated/40 text-body-sm text-charcoal/80 dark:text-warm-ivory/80 space-y-4 cursor-default" onClick={(e) => e.stopPropagation()}>
            <p className="leading-relaxed">
              Are you a blogger, legal representative, support worker, or community leader? You are welcome to syndicate, quote, or reference this resource. Use the pre-formatted HTML and Markdown templates below to establish high-authority backlinks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-dusty-rose block">HTML Embed Code</span>
                <textarea 
                  readOnly 
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  value={`<a href="https://haven-newbeginnings.org/blog/${blog.slug}">${blog.title}</a>`}
                  className="w-full p-3 bg-warm-ivory/50 dark:bg-dark-elevated/40 border border-light-gray dark:border-dark-elevated rounded-sm-md font-mono text-caption text-charcoal dark:text-warm-ivory select-all outline-hidden h-20 resize-none"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-dusty-rose block">Markdown Embed Code</span>
                <textarea 
                  readOnly 
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  value={`[${blog.title}](https://haven-newbeginnings.org/blog/${blog.slug})`}
                  className="w-full p-3 bg-warm-ivory/50 dark:bg-dark-elevated/40 border border-light-gray dark:border-dark-elevated rounded-sm-md font-mono text-caption text-charcoal dark:text-warm-ivory select-all outline-hidden h-20 resize-none"
                />
              </div>
            </div>
            <p className="text-[10px] text-charcoal/40 dark:text-warm-ivory/40 font-mono italic text-center">
              Optimized with keyword anchor tags. Builds high-quality domain authority backlinks automatically.
            </p>
          </div>
        </details>

        {/* Retail Media Placements sponsored resources grid */}
        <RMNPartners />

        {/* Adsense Slot Bottom */}
        <AdsenseSlot slotId={`blog-bottom-${blog.slug}`} />

      </article>
    </main>
  );
}
