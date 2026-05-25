import { cn } from '@haven/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'dot' | 'count';
  color?: 'default' | 'success' | 'error' | 'warning' | 'info';
  className?: string;
}

const colorMap = {
  default: 'bg-medium-gray/20 text-medium-gray',
  success: 'bg-success-green/10 text-success-green',
  error: 'bg-error-red/10 text-error-red',
  warning: 'bg-accent-gold/10 text-accent-gold',
  info: 'bg-info-blue/10 text-info-blue',
};

export function Badge({ children, variant = 'default', color = 'default', className }: BadgeProps) {
  if (variant === 'dot') {
    const dotColors = {
      default: 'bg-medium-gray',
      success: 'bg-success-green',
      error: 'bg-error-red',
      warning: 'bg-accent-gold',
      info: 'bg-info-blue',
    };
    return <span className={cn('inline-block w-2 h-2 rounded-full', dotColors[color], className)} />;
  }

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-caption font-medium',
      colorMap[color],
      className
    )}>
      {children}
    </span>
  );
}
