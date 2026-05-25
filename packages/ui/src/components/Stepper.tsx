'use client';

import { motion } from 'framer-motion';
import { cn } from '@haven/utils';

interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-medium-gray/20 -translate-y-1/2" />

        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-accent-gold -translate-y-1/2"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2">
              <motion.div
                initial={false}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                  backgroundColor: isCompleted || isCurrent ? '#C9A96E' : '#F5F0EB',
                  borderColor: isCompleted || isCurrent ? '#C9A96E' : '#B8B0A8',
                }}
                className={cn(
                  'w-8 h-8 rounded-full border-2 flex items-center justify-center text-caption font-medium transition-colors',
                  isCompleted || isCurrent ? 'text-charcoal' : 'text-medium-gray'
                )}
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  index + 1
                )}
              </motion.div>
              <span
                className={cn(
                  'text-caption font-medium hidden sm:block',
                  isCurrent ? 'text-charcoal dark:text-warm-ivory' : 'text-medium-gray'
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
