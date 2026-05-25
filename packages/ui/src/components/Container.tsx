import { cn } from '@haven/utils';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'default' && 'max-w-content',
        size === 'wide' && 'max-w-[1440px]',
        size === 'narrow' && 'max-w-[800px]',
        className
      )}
    >
      {children}
    </div>
  );
}
