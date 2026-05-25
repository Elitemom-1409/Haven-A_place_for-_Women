'use client';

import * as React from 'react';
import { cn } from '@haven/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  maxSelections?: number;
  className?: string;
}

export function MultiSelect({ options, selected, onChange, placeholder = 'Select options...', maxSelections, className }: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = options.filter((o) => o.toLowerCase().includes(search.toLowerCase()));
  const canSelectMore = !maxSelections || selected.length < maxSelections;

  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else if (canSelectMore) {
      onChange([...selected, option]);
    }
  };

  return (
    <div ref={ref} className={cn('relative', className)}>
      <div
        onClick={() => setOpen(!open)}
        className="min-h-[44px] w-full rounded-md border border-medium-gray/30 bg-transparent px-4 py-2 text-body cursor-pointer flex flex-wrap gap-2 items-center"
      >
        {selected.length === 0 && <span className="text-medium-gray">{placeholder}</span>}
        {selected.map((s) => (
          <span key={s} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent-gold/10 text-body-sm text-charcoal dark:text-warm-ivory">
            {s}
            <button
              onClick={(e) => { e.stopPropagation(); toggle(s); }}
              className="hover:text-error-red"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute z-50 mt-1 w-full rounded-md border border-medium-gray/20 bg-white dark:bg-dark-elevated shadow-lg-xl max-h-60 overflow-auto"
          >
            <div className="p-2 sticky top-0 bg-white dark:bg-dark-elevated border-b border-medium-gray/10">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 text-body-sm rounded-md border border-medium-gray/20 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 bg-transparent"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            {filtered.map((option) => {
              const isSelected = selected.includes(option);
              const disabled = !isSelected && !canSelectMore;
              return (
                <div
                  key={option}
                  onClick={() => !disabled && toggle(option)}
                  className={cn(
                    'px-4 py-2.5 text-body-sm cursor-pointer flex items-center justify-between',
                    isSelected && 'bg-accent-gold/10 text-charcoal dark:text-warm-ivory',
                    !isSelected && !disabled && 'hover:bg-light-gray dark:hover:bg-dark-surface',
                    disabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {option}
                  {isSelected && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
