'use client';

import * as React from 'react';
import { cn } from '@haven/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  helperText?: string;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, errorMessage, helperText, maxLength, onChange, ...props }, ref) => {
    const [value, setValue] = React.useState(props.defaultValue || props.value || '');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      onChange?.(e);
    };

    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <div className="flex justify-between">
            <label className="text-body-sm font-medium text-charcoal dark:text-warm-ivory">{label}</label>
            {maxLength && (
              <span className={cn('text-caption', currentLength > maxLength ? 'text-error-red' : 'text-medium-gray')}>
                {currentLength}/{maxLength}
              </span>
            )}
          </div>
        )}
        <textarea
          ref={ref}
          onChange={handleChange}
          className={cn(
            'flex w-full rounded-md border bg-transparent px-4 py-3 text-body font-body transition-colors',
            'placeholder:text-medium-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50',
            'disabled:cursor-not-allowed disabled:opacity-50 resize-none',
            errorMessage ? 'border-error-red focus-visible:ring-error-red/50' : 'border-medium-gray/30',
            className
          )}
          {...props}
        />
        {errorMessage && <p className="text-caption text-error-red">{errorMessage}</p>}
        {helperText && !errorMessage && <p className="text-caption text-medium-gray">{helperText}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
