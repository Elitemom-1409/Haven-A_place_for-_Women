import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Secure Community & Recovery Support for Separated Women | Haven',
  description: 'Join a verified, private community of resilient women navigating separations. Access peer groups, expert webinars, job listings, and emotional recovery support. Begin your fresh start today.',
  keywords: 'divorced women community, single mother career portal, post divorce counseling, safe legal mediation, separation support groups',
  alternates: {
    canonical: 'https://haven-newbeginnings.org/lp/community',
  }
};

export default function PPCLandingPage() {
  return (
    <main className="min-h-screen bg-warm-ivory dark:bg-dark-base text-charcoal dark:text-warm-ivory py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Distraction-Free Header (No full nav links to keep high PPC conversion rate) */}
      <div className="max-w-content mx-auto mb-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-h3 text-dusty-rose font-bold hover:scale-[1.02] transition-transform">
          Haven
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-caption text-charcoal/50 dark:text-warm-ivory/50 font-mono hidden sm:inline">PPC Campaign Reference: 104-COM</span>
          <a href="tel:#" className="bg-charcoal text-warm-ivory dark:bg-dark-surface dark:hover:bg-dark-elevated hover:bg-dusty-rose text-body-sm font-semibold py-2 px-4 rounded-sm-md border border-light-gray dark:border-dark-elevated transition-all flex items-center gap-2">
            <svg className="w-4 h-4 text-dusty-rose animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Speak to a Support Coordinator
          </a>
        </div>
      </div>

      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Core Empathy & Pitch Column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="bg-soft-sage/10 text-soft-sage text-[11px] font-mono font-bold tracking-widest uppercase py-1.5 px-3 rounded-full-xl border border-soft-sage/20">
            A Safe Space for Your Fresh Start
          </span>
          <h1 className="font-heading text-h1 text-charcoal dark:text-warm-ivory leading-tight mt-2">
            You Are Not Alone. Connect, Rebuild, and Thrive.
          </h1>
          <p className="text-body-lg text-charcoal/80 dark:text-warm-ivory/80 leading-relaxed">
            Navigating a separation or divorce is emotionally draining and structurally complex. Haven is a verified, secure platform where women come together to support each other, access professional advisors, find sustainable careers, and protect their child wellness.
          </p>

          {/* Social Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-light-gray/60 dark:border-dark-elevated/60">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-dusty-rose/15 text-dusty-rose rounded-md-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">100% Private & Verified</h4>
                <p className="text-body-sm text-charcoal/60 dark:text-warm-ivory/60 mt-0.5">Strict multi-factor screening ensures a protected, secure networking space for women.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-soft-sage/15 text-soft-sage rounded-md-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-body-lg font-bold text-charcoal dark:text-warm-ivory">Transition Career Support</h4>
                <p className="text-body-sm text-charcoal/60 dark:text-warm-ivory/60 mt-0.5">Resume writing templates, remote-focused listings, and professional coaching workshops.</p>
              </div>
            </div>
          </div>
        </div>

        {/* High-Converting PPC Opt-in Form Column */}
        <div className="lg:col-span-5 bg-white dark:bg-dark-surface p-8 border border-light-gray dark:border-dark-elevated rounded-xl-2xl shadow-xl-2xl space-y-6">
          <div className="text-center">
            <h3 className="font-heading text-h3 text-charcoal dark:text-warm-ivory">Secure Free Access</h3>
            <p className="text-body-sm text-charcoal/60 dark:text-warm-ivory/60 mt-1">Get immediate entrance to our resource library & chat groups.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80 uppercase block mb-1">Your First Name</label>
              <input 
                type="text"
                placeholder="Sarah"
                className="w-full p-3 bg-warm-ivory/30 dark:bg-dark-elevated/20 border border-light-gray dark:border-dark-elevated focus:border-dusty-rose focus:ring-1 focus:ring-dusty-rose outline-hidden rounded-sm-md font-body text-body-sm font-semibold transition-all"
              />
            </div>
            <div>
              <label className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80 uppercase block mb-1">Your Email Address</label>
              <input 
                type="email"
                placeholder="sarah@example.com"
                className="w-full p-3 bg-warm-ivory/30 dark:bg-dark-elevated/20 border border-light-gray dark:border-dark-elevated focus:border-dusty-rose focus:ring-1 focus:ring-dusty-rose outline-hidden rounded-sm-md font-body text-body-sm font-semibold transition-all"
              />
            </div>
            <div>
              <label className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80 uppercase block mb-1">Your Current Primary Focus</label>
              <select className="w-full p-3 bg-warm-ivory/30 dark:bg-dark-elevated/20 border border-light-gray dark:border-dark-elevated focus:border-dusty-rose outline-hidden rounded-sm-md font-body text-body-sm font-semibold transition-all">
                <option>Emotional Recovery & Support Circles</option>
                <option>Transitioning Careers & Job Searches</option>
                <option>Co-Parenting Schedules & Child Wellness</option>
                <option>Asset Division & Spousal Support Advice</option>
              </select>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" id="ppc-agreement" className="mt-1 accent-dusty-rose cursor-pointer" defaultChecked />
              <label htmlFor="ppc-agreement" className="text-[11px] text-charcoal/50 dark:text-warm-ivory/50 leading-relaxed cursor-pointer select-none">
                I agree to the strict data privacy terms. My information is completely encrypted and never sold or shared.
              </label>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-dusty-rose hover:bg-charcoal dark:hover:bg-dark-elevated text-white text-body-sm font-bold uppercase tracking-wider rounded-sm-md transition-all duration-300 shadow-glow active:scale-98"
            >
              Request Free Invitation Code
            </button>
          </form>

          <div className="pt-4 border-t border-light-gray/40 dark:border-dark-elevated/40 text-center flex items-center justify-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-success-green rounded-full animate-ping"></span>
            <span className="text-[11px] font-mono font-bold text-charcoal/60 dark:text-warm-ivory/60">
              1,240 active members online in community support
            </span>
          </div>
        </div>

      </div>

      {/* Trust Testimonials Section */}
      <section className="max-w-content mx-auto mt-24 pt-12 border-t border-light-gray/60 dark:border-dark-elevated/60 text-center">
        <span className="text-xs font-semibold text-dusty-rose tracking-wider uppercase">Member Voices</span>
        <h3 className="font-heading text-h2 text-charcoal dark:text-warm-ivory mt-2 mb-8">What Our Verified Members Say</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark-surface p-6 rounded-md-lg border border-light-gray/60 dark:border-dark-elevated/60 text-left hover:border-dusty-rose/30 transition-all">
            <p className="text-body-sm text-charcoal/80 dark:text-warm-ivory/80 italic leading-relaxed">
              "Finding Haven was the turning point in my divorce. The emotional support circles gave me my dignity back, and the career roadmap helped me land a remote customer success role within three months."
            </p>
            <div className="mt-4 pt-4 border-t border-light-gray/30 flex items-center justify-between">
              <span className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80">— Monica S., Verified Member</span>
              <span className="text-accent-gold text-body-sm">★★★★★</span>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-surface p-6 rounded-md-lg border border-light-gray/60 dark:border-dark-elevated/60 text-left hover:border-dusty-rose/30 transition-all">
            <p className="text-body-sm text-charcoal/80 dark:text-warm-ivory/80 italic leading-relaxed">
              "I was terrified about how my kids would handle parallel parenting. The templates and counselors on Haven showed me how to draw clear boundaries and establish consistent rules. My kids are happy and thriving."
            </p>
            <div className="mt-4 pt-4 border-t border-light-gray/30 flex items-center justify-between">
              <span className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80">— Jessica L., Verified Member</span>
              <span className="text-accent-gold text-body-sm">★★★★★</span>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-surface p-6 rounded-md-lg border border-light-gray/60 dark:border-dark-elevated/60 text-left hover:border-dusty-rose/30 transition-all">
            <p className="text-body-sm text-charcoal/80 dark:text-warm-ivory/80 italic leading-relaxed">
              "The financial planners here literally saved me from an unfair asset division. Their spreadsheet calculators and checklist kept me organized during mediation and saved thousands in legal fees."
            </p>
            <div className="mt-4 pt-4 border-t border-light-gray/30 flex items-center justify-between">
              <span className="text-caption font-bold text-charcoal/80 dark:text-warm-ivory/80">— Elena K., Verified Member</span>
              <span className="text-accent-gold text-body-sm">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
