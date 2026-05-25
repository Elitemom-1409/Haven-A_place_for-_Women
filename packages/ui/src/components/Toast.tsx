'use client';

import * as React from 'react';
import { create } from 'zustand';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@haven/utils';

type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts.slice(-4), { ...toast, id: Math.random().toString(36).slice(2) }],
    })),
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

const variantStyles: Record<ToastVariant, string> = {
  success: 'bg-success-green/10 border-success-green/20 text-success-green',
  error: 'bg-error-red/10 border-error-red/20 text-error-red',
  warning: 'bg-accent-gold/10 border-accent-gold/20 text-accent-gold',
  info: 'bg-info-blue/10 border-info-blue/20 text-info-blue',
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast } = useToastStore();

  return (
    <>
      {children}
      <div className="fixed top-4 right-4 z-[500] flex flex-col gap-3 w-full max-w-sm">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onDismiss={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onDismiss, toast.duration || 5000);
    return () => clearTimeout(timer);
  }, [toast.duration, onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.95 }}
      className={cn(
        'relative rounded-lg border p-4 shadow-lg-xl backdrop-blur-sm overflow-hidden',
        variantStyles[toast.variant || 'info']
      )}
    >
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: (toast.duration || 5000) / 1000, ease: 'linear' }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-current opacity-20 origin-left"
      />

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium text-body-sm">{toast.title}</p>
          {toast.description && <p className="text-caption mt-1 opacity-80">{toast.description}</p>}
        </div>
        <button onClick={onDismiss} className="opacity-60 hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export function toast(props: Omit<Toast, 'id'>) {
  useToastStore.getState().addToast(props);
}
