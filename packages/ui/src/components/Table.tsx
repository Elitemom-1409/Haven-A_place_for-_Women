import { cn } from '@haven/utils';
import { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn('w-full caption-bottom text-body-sm', className)}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children, className }: TableProps) {
  return <thead className={cn('border-b border-medium-gray/10', className)}>{children}</thead>;
}

export function TableBody({ children, className }: TableProps) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)}>{children}</tbody>;
}

export function TableRow({ children, className, selected }: TableProps & { selected?: boolean }) {
  return (
    <tr className={cn(
      'border-b border-medium-gray/10 transition-colors hover:bg-light-gray/50 dark:hover:bg-dark-elevated/50 data-[state=selected]:bg-accent-gold/5',
      selected && 'bg-accent-gold/5',
      className
    )}>
      {children}
    </tr>
  );
}

export function TableHead({ children, className }: TableProps) {
  return (
    <th className={cn('h-12 px-4 text-left align-middle font-medium text-medium-gray', className)}>
      {children}
    </th>
  );
}

export function TableCell({ children, className }: TableProps) {
  return (
    <td className={cn('p-4 align-middle', className)}>
      {children}
    </td>
  );
}
