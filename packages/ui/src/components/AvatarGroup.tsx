import { cn } from '@haven/utils';
import { Avatar } from './Avatar';

interface AvatarGroupProps {
  users: { name: string; src?: string }[];
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function AvatarGroup({ users, max = 4, size = 'sm', className }: AvatarGroupProps) {
  const visible = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className={cn('flex items-center -space-x-2', className)}>
      {visible.map((user, i) => (
        <div key={i} className="ring-2 ring-white dark:ring-dark-base rounded-full">
          <Avatar name={user.name} src={user.src} size={size} />
        </div>
      ))}
      {remaining > 0 && (
        <div className={cn(
          'rounded-full bg-light-gray dark:bg-dark-elevated flex items-center justify-center text-caption font-medium text-medium-gray ring-2 ring-white dark:ring-dark-base',
          size === 'xs' ? 'w-6 h-6' : size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'
        )}>
          +{remaining}
        </div>
      )}
    </div>
  );
}
