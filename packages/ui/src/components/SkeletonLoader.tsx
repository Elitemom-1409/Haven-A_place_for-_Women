import { cn } from '@haven/utils';

interface SkeletonLoaderProps {
  variant?: 'text' | 'avatar' | 'card' | 'table-row' | 'bento-card';
  className?: string;
  lines?: number;
}

export function SkeletonLoader({ variant = 'text', className, lines = 1 }: SkeletonLoaderProps) {
  const baseClass = 'animate-shimmer bg-gradient-to-r from-light-gray via-medium-gray/20 to-light-gray bg-[length:200%_100%] rounded-md';

  if (variant === 'text') {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={cn(baseClass, 'h-4', i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full')} />
        ))}
      </div>
    );
  }

  if (variant === 'avatar') {
    return <div className={cn(baseClass, 'w-10 h-10 rounded-full', className)} />;
  }

  if (variant === 'card') {
    return (
      <div className={cn('space-y-4 p-4', className)}>
        <div className={cn(baseClass, 'h-40 w-full rounded-lg')} />
        <div className={cn(baseClass, 'h-6 w-3/4')} />
        <div className={cn(baseClass, 'h-4 w-full')} />
        <div className={cn(baseClass, 'h-4 w-2/3')} />
      </div>
    );
  }

  if (variant === 'table-row') {
    return (
      <div className={cn('flex items-center gap-4 p-4', className)}>
        <div className={cn(baseClass, 'w-10 h-10 rounded-full')} />
        <div className="flex-1 space-y-2">
          <div className={cn(baseClass, 'h-4 w-1/3')} />
          <div className={cn(baseClass, 'h-3 w-1/4')} />
        </div>
        <div className={cn(baseClass, 'h-8 w-20 rounded-md')} />
      </div>
    );
  }

  if (variant === 'bento-card') {
    return (
      <div className={cn('p-6 rounded-xl space-y-4', className)}>
        <div className={cn(baseClass, 'h-8 w-1/2')} />
        <div className={cn(baseClass, 'h-4 w-full')} />
        <div className={cn(baseClass, 'h-4 w-3/4')} />
      </div>
    );
  }

  return null;
}
