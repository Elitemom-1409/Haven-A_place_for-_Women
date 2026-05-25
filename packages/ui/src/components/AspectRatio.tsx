import { cn } from '@haven/utils';
import { ReactNode } from 'react';

interface AspectRatioProps {
  ratio?: '16:9' | '4:3' | '1:1' | '3:2' | string;
  children: ReactNode;
  className?: string;
}

export function AspectRatio({ ratio = '16:9', children, className }: AspectRatioProps) {
  const ratioMap: Record<string, string> = {
    '16:9': '56.25%',
    '4:3': '75%',
    '1:1': '100%',
    '3:2': '66.66%',
  };

  const paddingBottom = ratioMap[ratio] || ratio;

  return (
    <div className={cn('relative w-full', className)} style={{ paddingBottom }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
