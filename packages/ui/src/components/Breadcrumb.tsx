import Link from 'next/link';
import { cn } from '@haven/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn('flex items-center gap-2 text-body-sm', className)}>
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-medium-gray">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
          {item.href ? (
            <Link href={item.href} className="text-medium-gray hover:text-charcoal dark:hover:text-warm-ivory transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-charcoal dark:text-warm-ivory font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
