'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { useDebounce } from '@haven/utils';

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onSearch?: (value: string) => void;
  debounceMs?: number;
  loading?: boolean;
}

export function SearchInput({ className, onSearch, debounceMs = 300, loading, ...props }: SearchInputProps) {
  const [value, setValue] = React.useState('');
  const debouncedValue = useDebounce(value, debounceMs);

  React.useEffect(() => {
    onSearch?.(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className={cn('relative', className)}>
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-medium-gray" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          'w-full pl-10 pr-10 py-3 rounded-xl border border-medium-gray/30 bg-white dark:bg-dark-surface',
          'text-body text-charcoal dark:text-warm-ivory placeholder:text-medium-gray',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50',
          className
        )}
        {...props}
      />
      {value && (
        <button
          onClick={() => setValue('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray hover:text-charcoal"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
      {loading && (
        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          <div className="w-4 h-4 border-2 border-accent-gold/30 border-t-accent-gold rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
