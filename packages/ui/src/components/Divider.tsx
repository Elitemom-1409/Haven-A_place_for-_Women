import { cn } from '@haven/utils';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}

export function Divider({ orientation = 'horizontal', label, className }: DividerProps) {
  if (orientation === 'vertical') {
    return <div className={cn('w-px h-full bg-medium-gray/20', className)} />;
  }

  if (label) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="flex-1 h-px bg-medium-gray/20" />
        <span className="text-caption text-medium-gray uppercase tracking-wider">{label}</span>
        <div className="flex-1 h-px bg-medium-gray/20" />
      </div>
    );
  }

  return <div className={cn('w-full h-px bg-medium-gray/20', className)} />;
}
