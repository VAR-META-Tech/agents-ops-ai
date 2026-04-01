import type { InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface CommonInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: string;
  label?: string;
  description?: string;
  containerClassName?: string;
  required?: boolean;
}

export const CommonInput = ({
  name,
  label,
  description,
  containerClassName,
  className,
  required,
  ...props
}: CommonInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { ref: fieldRef, ...fieldProps } = field;

        return (
          <div className={cn('flex flex-col gap-2', containerClassName)}>
            {label && (
              <label className='font-medium text-[#7C89AE] text-sm' htmlFor={name}>
                {label} {required && <span className='text-red-500'>*</span>}
              </label>
            )}
            <Input
              id={name}
              ref={fieldRef}
              aria-invalid={fieldState.invalid}
              className={cn(
                'h-11 rounded-sm border border-[#FFFFFF33] bg-[#0B1D4E] text-white placeholder:text-white',
                className
              )}
              {...fieldProps}
              {...props}
            />
            {description && <p className='text-[#7C89AE] text-xs'>{description}</p>}
            {fieldState.error && <p className='text-red-500 text-xs'>{fieldState.error.message}</p>}
          </div>
        );
      }}
    />
  );
};
