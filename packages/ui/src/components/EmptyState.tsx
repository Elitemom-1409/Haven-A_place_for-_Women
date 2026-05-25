import { cn } from '@haven/utils';
import { Button } from './Button';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center text-center py-16 px-4', className)}>
      {icon && <div className="w-16 h-16 rounded-full bg-light-gray dark:bg-dark-elevated flex items-center justify-center text-3xl mb-4">{icon}</div>}
      <h3 className="font-heading text-h4 text-charcoal dark:text-warm-ivory mb-2">{title}</h3>
      <p className="text-body text-medium-gray max-w-sm mb-6">{description}</p>
      {action && <Button onClick={action.onClick}>{action.label}</Button>}
    </div>
  );
}
