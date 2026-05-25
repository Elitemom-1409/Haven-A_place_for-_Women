import { Container } from '@haven/ui';
import Link from 'next/link';

const footerLinks = {
  Platform: ['Community', 'Events', 'Services', 'Jobs', 'Resources', 'Blog'],
  Company: ['About', 'Contact', 'Careers', 'Press', 'Partners'],
  Legal: ['Terms', 'Privacy', 'Community Guidelines', 'Cookie Policy'],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-ivory pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-h3 mb-4">Haven</h3>
            <p className="text-body text-warm-ivory/70 mb-6 max-w-sm">
              A safe space for divorced and separating women to connect, heal, and thrive.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'X', 'LinkedIn', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-warm-ivory/10 flex items-center justify-center hover:bg-accent-gold/20 transition-colors text-caption"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-body-sm mb-4 text-warm-ivory/90">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-body-sm text-warm-ivory/60 hover:text-warm-ivory transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-warm-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-warm-ivory/50">
            © 2025 Haven. All rights reserved.
          </p>
          <p className="text-caption text-warm-ivory/50">
            Made with ❤️ for women everywhere
          </p>
        </div>
      </Container>
    </footer>
  );
}
