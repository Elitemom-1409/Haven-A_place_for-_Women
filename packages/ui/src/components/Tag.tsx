import { cn } from '@haven/utils';

interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  color?: 'default' | 'sage' | 'rose' | 'gold' | 'blue';
  className?: string;
}

const colorMap = {
  default: 'bg-light-gray text-charcoal dark:bg-dark-elevated dark:text-warm-ivory',
  sage: 'bg-soft-sage/20 text-charcoal',
  rose: 'bg-dusty-rose/20 text-charcoal',
  gold: 'bg-accent-gold/20 text-charcoal',
  blue: 'bg-info-blue/20 text-charcoal',
};

export function Tag({ children, onRemove, onClick, color = 'default', className }: TagProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-body-sm font-medium',
        onClick && 'cursor-pointer hover:opacity-80',
        colorMap[color],
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="opacity-60 hover:opacity-100 ml-0.5"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
}
