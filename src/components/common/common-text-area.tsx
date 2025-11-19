import type { TextareaHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface CommonTextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name"> {
  name: string;
  label?: string;
  description?: string;
  containerClassName?: string;
  required?: boolean;
}

export const CommonTextArea = ({
  name,
  label,
  description,
  containerClassName,
  className,
  required,
  ...props
}: CommonTextAreaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <div className={cn("flex flex-col gap-2", containerClassName)}>
            {label && (
              <label
                className="text-sm font-medium text-[#7C89AE]"
                htmlFor={name}
              >
                {label} {required && <span className="text-red-500">*</span>}
              </label>
            )}
            <Textarea
              id={name}
              {...field}
              aria-invalid={fieldState.invalid}
              className={cn(
                "min-h-[120px] rounded-sm border border-[#FFFFFF33] bg-[#0B1D4E] text-white placeholder:text-white",
                className
              )}
              {...props}
            />
            {description && (
              <p className="text-xs text-[#7C89AE]">{description}</p>
            )}
            {fieldState.error?.message && (
              <p className="text-xs text-red-500">{fieldState.error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};
