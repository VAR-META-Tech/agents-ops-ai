import { cn } from '@/lib/utils';
import React from 'react';

interface ICommonChip {
  children: React.ReactNode;
  className?: string;
}

export const CommonChip = ({ children, className }: ICommonChip) => {
  return (
    <div
      className={cn(
        'flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-full border border-[#E6E6E6] font-normal text-2xl text-[#1E1E1EDB] leading-9',
        className
      )}
    >
      {children}
    </div>
  );
};
