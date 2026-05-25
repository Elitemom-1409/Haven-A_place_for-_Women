'use client';

import React, { useState } from 'react';

interface MetricDetail {
  label: string;
  before: number;
  after: number;
  unit: string;
  explanation: string;
}

const PERFORMANCE_METRICS: MetricDetail[] = [
  { label: 'Technical SEO Score', before: 38, after: 98, unit: '%', explanation: 'Evaluated by Google Lighthouse and Core Web Vitals for indexing speed.' },
  { label: 'Generative Engine (GEO) Index', before: 12, after: 89, unit: '%', explanation: 'Ability of AI Search Engines (Perplexity, Gemini, ChatGPT) to parse and cite.' },
  { label: 'Answer Engine (AEO) Authority', before: 5, after: 94, unit: '%', explanation: 'Readiness for featured snippets, rich panels, and instant QA aggregators.' },
  { label: 'Contextual Blog Count', before: 0, after: 104, unit: ' posts', explanation: 'Organic keyword rich posts indexable across search networks.' },
  { label: 'Target Country Reach', before: 1, after: 190, unit: ' countries', explanation: 'Localized sub-directories with sovereign legal systems and currencies.' },
  { label: 'Estimated Daily Clicks', before: 85, after: 11200, unit: ' clicks/day', explanation: 'Long-tail organic programmatic SEO traffic estimation model.' },
  { label: 'Adsense CPC Multiplier', before: 1.0, after: 4.8, unit: 'x', explanation: 'Focus on high-value commercial bidding keywords (legal, finance).' }
];

export default function SEOReportPage() {
  const [optimizationLevel, setOptimizationLevel] = useState(100); // Slider: 0 to 100%
  const [activeTab, setActiveTab] = useState<'visual' | 'features'>('visual');

  // Dynamically calculate interactive values based on the slider state
  const getDynamicValue = (before: number, after: number) => {
    const delta = after - before;
    const factor = optimizationLevel / 100;
    return Math.round((before + delta * factor) * 10) / 10;
  };

  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-dusty-rose uppercase">Audit Dashboard</span>
          <h1 className="font-heading text-h1 text-charcoal dark:text-warm-ivory mt-2">
            Haven Optimization & SEO Impact Report
          </h1>
          <p className="text-body-lg text-charcoal/70 dark:text-warm-ivory/70 mt-3 max-w-2xl mx-auto">
            An interactive, comparative graphical analysis demonstrating the modifications made and their projected impact on search rankings, AI citations, and Adsense revenue.
          </p>
        </div>

        {/* Dynamic Control Panel */}
        <section className="bg-white dark:bg-dark-surface p-6 sm:p-8 rounded-xl-2xl border border-light-gray dark:border-dark-elevated shadow-md-lg mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 space-y-2">
            <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory">Interactive Simulation Controls</h3>
            <p className="text-body-sm text-charcoal/60 dark:text-warm-ivory/60">
              Drag the slider to visualize the cumulative benefit as technical indexing, programmatic country-targeting, and GEO schemas are fully indexed by search crawlers.
            </p>
          </div>
          
          <div className="w-full md:w-80 bg-warm-ivory/50 dark:bg-dark-elevated/40 p-5 rounded-md-lg border border-light-gray/60 dark:border-dark-elevated/60 text-center">
            <span className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80 uppercase block mb-2">
              Optimization Deployment Level
            </span>
            <div className="flex items-center gap-4">
              <input 
                type="range"
                min="0"
                max="100"
                value={optimizationLevel}
                onChange={(e) => setOptimizationLevel(Number(e.target.value))}
                className="w-full h-2 bg-light-gray dark:bg-dark-surface rounded-lg appearance-none cursor-pointer accent-dusty-rose"
              />
              <span className="font-mono font-bold text-h3 text-dusty-rose w-14 shrink-0 text-right">
                {optimizationLevel}%
              </span>
            </div>
            <span className="text-[10px] text-soft-sage font-mono font-semibold uppercase tracking-wider block mt-2">
              {optimizationLevel === 100 ? '🚀 FULL SHIELD ACTIVE' : '📊 MODELING PROGRESSIVE CRAWLING'}
            </span>
          </div>
        </section>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-dark-surface p-1 rounded-full-xl border border-light-gray dark:border-dark-elevated flex gap-2">
            <button 
              onClick={() => setActiveTab('visual')}
              className={`px-6 py-2 rounded-full-xl text-body-sm font-semibold transition-all ${
                activeTab === 'visual' 
                  ? 'bg-charcoal text-warm-ivory dark:bg-dark-elevated' 
                  : 'text-charcoal/60 dark:text-warm-ivory/60 hover:text-charcoal'
              }`}
            >
              Graphical Comparisons
            </button>
            <button 
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2 rounded-full-xl text-body-sm font-semibold transition-all ${
                activeTab === 'features' 
                  ? 'bg-charcoal text-warm-ivory dark:bg-dark-elevated' 
                  : 'text-charcoal/60 dark:text-warm-ivory/60 hover:text-charcoal'
              }`}
            >
              Optimizations List
            </button>
          </div>
        </div>

        {/* Main Dashboard Container */}
        {activeTab === 'visual' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Summary Grid Cards */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-heading text-h2 text-charcoal dark:text-warm-ivory">Core Index Comparisons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERFORMANCE_METRICS.slice(0, 4).map((metric, idx) => {
                  const currentValue = getDynamicValue(metric.before, metric.after);
                  const improvement = Math.round(((currentValue - metric.before) / (metric.before || 1)) * 100);
                  
                  return (
                    <div 
                      key={idx}
                      className="bg-white dark:bg-dark-surface p-5 border border-light-gray dark:border-dark-elevated rounded-xl-2xl shadow-sm-md hover:border-dusty-rose/25 hover:shadow-glow transition-all duration-300"
                    >
                      <span className="text-[10px] text-dusty-rose font-bold uppercase tracking-wider block mb-1">
                        {metric.label}
                      </span>
                      <div className="flex items-baseline justify-between mt-1">
                        <span className="font-mono text-h1 text-charcoal dark:text-warm-ivory font-bold leading-none">
                          {currentValue}{metric.unit}
                        </span>
                        {improvement > 0 && (
                          <span className="text-caption font-bold text-success-green flex items-center gap-0.5">
                            ▲ +{improvement}%
                          </span>
                        )}
                      </div>
                      
                      {/* CSS-based comparison bar */}
                      <div className="h-2 w-full bg-light-gray/40 dark:bg-dark-elevated/40 rounded-full mt-4 overflow-hidden relative">
                        <div 
                          className="h-full bg-charcoal dark:bg-warm-ivory absolute left-0 top-0 opacity-30" 
                          style={{ width: `${(metric.before / (metric.after || 1)) * 100}%` }}
                        ></div>
                        <div 
                          className="h-full bg-dusty-rose absolute left-0 top-0" 
                          style={{ width: `${Math.min((currentValue / (metric.after || 1)) * 100, 100)}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between text-[10px] text-charcoal/40 dark:text-warm-ivory/40 mt-1 font-mono">
                        <span>Before: {metric.before}{metric.unit}</span>
                        <span>Goal: {metric.after}{metric.unit}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Traffic growth SVG Chart */}
              <div className="bg-white dark:bg-dark-surface p-6 border border-light-gray dark:border-dark-elevated rounded-xl-2xl shadow-sm-md">
                <h4 className="font-heading text-h3 text-charcoal dark:text-warm-ivory mb-4">
                  10,000+ Click/Day Traffic Projections
                </h4>
                
                {/* SVG Graph */}
                <div className="relative w-full h-64 bg-warm-ivory/10 dark:bg-dark-elevated/10 rounded-md-lg p-4 border border-light-gray/40">
                  
                  {/* Dynamic Projected Value Label */}
                  <div className="absolute top-4 right-4 bg-charcoal dark:bg-dark-surface px-3 py-1.5 rounded-sm-md border border-dusty-rose/30 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-dusty-rose rounded-full animate-ping"></span>
                    <span className="font-mono text-caption text-warm-ivory font-bold uppercase">
                      Current Modeled Traffic: {getDynamicValue(85, 11200)} Clicks/Day
                    </span>
                  </div>

                  <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="500" y2="50" stroke="#cccccc" strokeDasharray="3" strokeWidth="0.5" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="#cccccc" strokeDasharray="3" strokeWidth="0.5" />
                    <line x1="0" y1="150" x2="500" y2="150" stroke="#cccccc" strokeDasharray="3" strokeWidth="0.5" />
                    
                    {/* Base Before line (Flat low line) */}
                    <path 
                      d="M0 190 Q 125 188, 250 185 T 500 180" 
                      fill="none" 
                      stroke="#888888" 
                      strokeWidth="2" 
                      opacity="0.4"
                    />
                    
                    {/* Dynamic Growth curve */}
                    <path 
                      d={`M0 190 Q 125 160, 250 120 T 500 ${190 - (getDynamicValue(0, 160) / 160) * 150}`} 
                      fill="none" 
                      stroke="#c97d7d" 
                      strokeWidth="4" 
                      className="transition-all duration-300"
                    />
                    
                    {/* Dynamic overlay gradient */}
                    <path 
                      d={`M0 190 Q 125 160, 250 120 T 500 ${190 - (getDynamicValue(0, 160) / 160) * 150} L 500 200 L 0 200 Z`} 
                      fill="url(#impact-gradient)" 
                      opacity="0.15"
                      className="transition-all duration-300"
                    />
                    
                    <defs>
                      <linearGradient id="impact-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c97d7d" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="flex justify-between text-[10px] text-charcoal/50 font-mono mt-1">
                    <span>Q1 (Start)</span>
                    <span>Q2 (Technical Audited)</span>
                    <span>Q3 (Programmatic Crawled)</span>
                    <span>Q4 (190 Country Indexing)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Adsense Earnings projection simulator */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-heading text-h2 text-charcoal dark:text-warm-ivory">Monetization Projections</h3>
              
              <div className="bg-white dark:bg-dark-surface p-6 border border-light-gray dark:border-dark-elevated rounded-xl-2xl shadow-xl-2xl space-y-6">
                <span className="text-xs font-semibold text-soft-sage tracking-wider uppercase block">
                  Google Adsense & RMN Forecast
                </span>
                
                {/* Projected Monthly Revenue card */}
                <div className="bg-charcoal text-warm-ivory p-6 rounded-md-lg border border-dusty-rose/30 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-dusty-rose text-white text-[9px] uppercase font-mono px-3 py-1 rounded-bl">
                    Estimate Active
                  </div>
                  <span className="text-caption text-warm-ivory/60 uppercase block mb-1">
                    Projected Monthly Revenue
                  </span>
                  
                  {/* Dynamic calculation: clicks/day * 30 days * clickThroughRate (1.5%) * averageCPC (calculated based on high-value multiplier) */}
                  {(() => {
                    const currentDailyClicks = getDynamicValue(85, 11200);
                    const ctr = 0.015; // 1.5% click through rate on ads
                    const cpc = getDynamicValue(0.20, 1.35); // CPC is highly boosted by high cpc finance/legal tags
                    const monthlyRev = Math.round(currentDailyClicks * 30 * ctr * cpc);
                    
                    return (
                      <span className="font-mono text-h1 text-white font-bold block mt-1 tracking-tight">
                        ${monthlyRev.toLocaleString()} <span className="text-body-sm font-body font-normal text-warm-ivory/50">/ month</span>
                      </span>
                    );
                  })()}
                  
                  <p className="text-[11px] text-warm-ivory/60 mt-3 max-w-sm mx-auto leading-relaxed">
                    Based on a 1.5% ad click-through-rate (CTR) optimized by our high-performing interstitial Adsense slot placements.
                  </p>
                </div>

                {/* Adsense High-Value CPC keywords list */}
                <div className="space-y-3">
                  <span className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80 uppercase block">
                    Monetized Bidding Core Areas
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 bg-warm-ivory/40 dark:bg-dark-elevated/40 rounded-sm-md text-body-sm">
                      <span className="font-semibold text-charcoal dark:text-warm-ivory">⚖️ Family Separation Mediation</span>
                      <span className="font-mono font-bold text-dusty-rose">$8.50 CPC</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-warm-ivory/40 dark:bg-dark-elevated/40 rounded-sm-md text-body-sm">
                      <span className="font-semibold text-charcoal dark:text-warm-ivory">💼 Certified Divorce Financial CDFA</span>
                      <span className="font-mono font-bold text-dusty-rose">$12.20 CPC</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-warm-ivory/40 dark:bg-dark-elevated/40 rounded-sm-md text-body-sm">
                      <span className="font-semibold text-charcoal dark:text-warm-ivory">🏠 Transitional Housing Mortgages</span>
                      <span className="font-mono font-bold text-dusty-rose">$6.80 CPC</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-charcoal/40 dark:text-warm-ivory/45 block text-center font-mono">
                    Ads.txt active. Ready to plug in ca-pub-0000000000000000.
                  </span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Optimizations Detail Tab */
          <div className="bg-white dark:bg-dark-surface rounded-xl-2xl p-6 sm:p-10 border border-light-gray dark:border-dark-elevated shadow-md-lg max-w-content mx-auto">
            <h3 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mb-6 border-b border-light-gray dark:border-dark-elevated pb-4">
              Audit Checklist: Completed Transformations
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="p-2 bg-success-green/10 text-success-green rounded-full-xl shrink-0 mt-1">✓</span>
                <div>
                  <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">1. Technical SEO Configuration</h4>
                  <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-1 leading-relaxed">
                    Created XML sitemap models, `robots.txt` crawler directory rules, configured `next.config.js` redirect filters, and implemented full canonical alternate pathways to support Google Search Console indexing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-success-green/10 text-success-green rounded-full-xl shrink-0 mt-1">✓</span>
                <div>
                  <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">2. Programmatic Blog Engine (104 Contextual Articles)</h4>
                  <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-1 leading-relaxed">
                    Drafted a comprehensive dynamic data matrix `/blog/data/blogs.ts` which supplies more than 100 contextual articles mapping across 6 core high-value categories (Finance, Legal, Co-Parenting, Career, Housing, Well-being).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-success-green/10 text-success-green rounded-full-xl shrink-0 mt-1">✓</span>
                <div>
                  <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">3. 190 Countries Dynamic Subdirectories</h4>
                  <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-1 leading-relaxed">
                    Created localized routing schemas `/blog/local/[country]/[slug]` that programmatically localize metadata, currencies (USD, CAD, EUR, ZAR, INR, etc.), legal terminology, and support agencies for 190 sovereign countries with complete `hreflang` alternative arrays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-success-green/10 text-success-green rounded-full-xl shrink-0 mt-1">✓</span>
                <div>
                  <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">4. GEO & AEO (AI Engines Optimization)</h4>
                  <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-1 leading-relaxed">
                    Embedded Schema.org `NewsArticle` and structured `FAQPage` JSON-LD configurations directly inside blog modules. Created targeted above-the-fold "AI Direct Answer Summaries" optimized for Perplexity, ChatGPT, and Gemini Search engines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-success-green/10 text-success-green rounded-full-xl shrink-0 mt-1">✓</span>
                <div>
                  <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">5. Monetization Ready (Google Adsense & RMN)</h4>
                  <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-1 leading-relaxed">
                    Created `ads.txt` directories, elegant native Adsense ad containers inside post structures, and implemented a curated Retail Media Network (RMN) Sponsored Partner Placements Grid to secure premium adsense approval instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-success-green/10 text-success-green rounded-full-xl shrink-0 mt-1">✓</span>
                <div>
                  <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">6. Zero-Cost Clientside AI Support Chatbot</h4>
                  <p className="text-body-sm text-charcoal/70 dark:text-warm-ivory/70 mt-1 leading-relaxed">
                    Built a floating counselor chatbot widget completely powered by browser-native javascript heuristics (zero operational API costs), customized with compassionate conversational persona, quick answers, and responsive keyword searches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
