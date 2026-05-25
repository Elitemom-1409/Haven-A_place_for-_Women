'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex w-full rounded-md border bg-transparent px-4 py-3 text-body font-body transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-medium-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      state: {
        default: 'border-medium-gray/30 text-charcoal dark:text-warm-ivory',
        error: 'border-error-red text-charcoal dark:text-warm-ivory focus-visible:ring-error-red/50',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, state, label, helperText, errorMessage, leftIcon, rightIcon, type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-body-sm font-medium text-charcoal dark:text-warm-ivory">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray">
              {leftIcon}
            </div>
          )}
          <input
            type={inputType}
            className={cn(
              inputVariants({ state: errorMessage ? 'error' : state }),
              leftIcon && 'pl-10',
              (rightIcon || isPassword) && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray hover:text-charcoal text-body-sm"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}
          {!isPassword && rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-gray">
              {rightIcon}
            </div>
          )}
        </div>
        {errorMessage && (
          <p className="text-caption text-error-red">{errorMessage}</p>
        )}
        {helperText && !errorMessage && (
          <p className="text-caption text-medium-gray">{helperText}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
