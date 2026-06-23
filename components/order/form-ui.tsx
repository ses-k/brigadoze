import type { ReactNode, SelectHTMLAttributes } from "react";

export const formLabelClass = "mb-2 block text-sm font-medium text-chocolate sm:text-base";
export const formHintClass = "mt-1.5 text-sm text-chocolate/55";

export const formInputClass =
  "w-full min-h-12 rounded-xl border border-chocolate/15 bg-white px-4 py-3.5 text-base text-chocolate outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

export const formSelectClass = `${formInputClass} appearance-none pr-11`;

export const formButtonClass =
  "min-h-12 rounded-xl border border-chocolate/15 bg-white px-4 py-3 text-base font-medium transition-colors active:scale-[0.98]";

type FormFieldProps = {
  label: string;
  optional?: string;
  hint?: string;
  children: ReactNode;
};

export function FormField({ label, optional, hint, children }: FormFieldProps) {
  return (
    <div>
      <label className={formLabelClass}>
        {label}
        {optional ? <span className="font-normal text-chocolate/50"> {optional}</span> : null}
      </label>
      {children}
      {hint ? <p className={formHintClass}>{hint}</p> : null}
    </div>
  );
}

type FormSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  optional?: string;
  hint?: string;
};

export function FormSelect({ label, optional, hint, children, className, ...props }: FormSelectProps) {
  return (
    <FormField label={label} optional={optional} hint={hint}>
      <div className="relative">
        <select className={className ?? formSelectClass} {...props}>
          {children}
        </select>
        <span
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-chocolate/45"
          aria-hidden
        >
          ▼
        </span>
      </div>
    </FormField>
  );
}

type StepperProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  disabled?: boolean;
};

export function Stepper({ label, value, min, max, onChange, disabled }: StepperProps) {
  return (
    <div>
      <p className={formLabelClass}>{label}</p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={disabled || value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-chocolate/15 bg-white text-xl font-medium text-chocolate transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={`${label} -`}
        >
          −
        </button>
        <span className="min-w-10 flex-1 text-center text-xl font-semibold tabular-nums text-chocolate">
          {value}
        </span>
        <button
          type="button"
          disabled={disabled || value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-chocolate/15 bg-white text-xl font-medium text-chocolate transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={`${label} +`}
        >
          +
        </button>
      </div>
    </div>
  );
}

type OptionPickerOption = {
  id: string;
  label: string;
};

type OptionPickerProps = {
  label: string;
  value: string;
  onChange: (id: string) => void;
  options: OptionPickerOption[];
  columns?: "1" | "2";
};

export function OptionPicker({
  label,
  value,
  onChange,
  options,
  columns = "2",
}: OptionPickerProps) {
  const gridClass =
    columns === "1" ? "grid grid-cols-1 gap-2" : "grid grid-cols-1 gap-2 sm:grid-cols-2";

  return (
    <div>
      <p className={`${formLabelClass} mb-3`}>{label}</p>
      <div className={gridClass} role="listbox" aria-label={label}>
        {options.map((option) => {
          const selected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => onChange(option.id)}
              className={`min-h-12 rounded-xl border px-4 py-3.5 text-left text-base leading-snug transition-colors active:scale-[0.99] ${
                selected
                  ? "border-gold bg-gold/10 font-medium text-chocolate ring-2 ring-gold/25"
                  : "border-chocolate/15 bg-white text-chocolate/85 hover:border-caramel/50"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
