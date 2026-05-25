import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { Navbar, MobileTabBar, PageTransition, ToastProvider } from '@haven/ui';
import { Footer } from './sections/Footer';
import { AIChatbot } from './components/AIChatbot';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Haven — A Safe Space for New Beginnings',
    template: '%s | Haven',
  },
  description: 'Haven connects divorced and separating women with community, employment, and support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased bg-warm-ivory text-charcoal dark:bg-dark-base dark:text-warm-ivory">
        <ToastProvider>
          <Navbar />
          <div className="pt-20 pb-24 md:pb-0">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <Footer />
          <MobileTabBar />
          <AIChatbot />
        </ToastProvider>
      </body>
    </html>
  );
}

