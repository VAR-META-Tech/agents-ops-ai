import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";
import Select, {
  createFilter,
  type Props as ReactSelectProps,
} from "react-select";

interface SelectOption {
  label: string;
  value: string;
}

interface CommonSelectProps extends ReactSelectProps {
  name: string;
  options: SelectOption[];
  label?: string;
  description?: string;
  placeholder?: string;
  containerClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  required?: boolean;
}

export function CommonSelect({
  name,
  options,
  label,
  description,
  placeholder = "Select an option",
  containerClassName,
  triggerClassName,
  contentClassName,
  required,
  ...selectProps
}: CommonSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className={cn("flex flex-col gap-2", containerClassName)}>
          {/* ---- LABEL ---- */}
          {label && (
            <label
              htmlFor={name}
              className="text-sm font-medium text-[#7C89AE]"
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          {/* ---- SELECT ---- */}
          <Select
            inputId={name}
            instanceId={name}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            classNames={{
              control: () =>
                cn(
                  "!min-h-[44px] rounded-sm border !border-[#FFFFFF33] !bg-[#0B1D4E] !text-white",
                  triggerClassName
                ),
              menu: () =>
                cn(
                  "max-h-72 overflow-y-hidden border !border-[#FFFFFF33] !bg-[#0B1D4E] !text-white",
                  contentClassName
                ),
              option: (state) => {
                return cn(
                  "!text-white hover:!bg-[#00154A] active:!bg-[#00154A] selected:!bg-[#00154A]",
                  {
                    "!bg-[#00154A]": state.isSelected,
                    "!bg-[#0B1D4E]": state.isFocused,
                  }
                );
              },
              singleValue(props) {
                return cn("!text-white", props.className);
              },
              indicatorSeparator: () => cn("!hidden"),
              placeholder: () => cn("!text-white"),
              input: () => cn("!text-white"),
            }}
            filterOption={createFilter({ ignoreAccents: false })}
            options={options}
            {...field}
            {...selectProps}
          />

          {/* ---- DESCRIPTION / ERROR ---- */}
          {description && (
            <p className="text-xs text-[#7C89AE]">{description}</p>
          )}
          {fieldState.error && (
            <p className="text-xs text-red-500">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
}
