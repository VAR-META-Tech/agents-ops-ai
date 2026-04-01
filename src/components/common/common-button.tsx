import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';
import { Button, type buttonVariants } from '../ui/button';

interface ICommonButton extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  buttonText?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const CommonButton = ({ children, className, ...props }: ICommonButton) => {
  return (
    <Button
      className={cn(
        '!border-[#7C89AE] hover:!bg-[#f5f5f5] h-10 cursor-pointer rounded-full border hover:text-[#1E1E1E]',
        className
      )}
      {...props}
      variant='outline'
    >
      {children}
    </Button>
  );
};
