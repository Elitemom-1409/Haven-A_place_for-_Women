'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@haven/utils';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-3', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { label?: string; description?: string }
>(({ className, label, description, ...props }, ref) => (
  <div className="flex items-start gap-3">
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-5 w-5 mt-0.5 rounded-full border-2 border-medium-gray/30 text-accent-gold ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-accent-gold',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full bg-accent-gold" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    <div className="grid gap-1">
      {label && <label className="text-body-sm font-medium text-charcoal dark:text-warm-ivory cursor-pointer">{label}</label>}
      {description && <p className="text-caption text-medium-gray">{description}</p>}
    </div>
  </div>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
