'use client';

import { useMemo } from "react";
import { SingleValue } from "react-select";
import CreateableSelect from "react-select/creatable";

export default function Select({
  value,
  onChange,
  disabled,
  onCreate,
  options = [],
  placeholder,
}: {
  onChange: (value?: string) => void;
  onCreate?: (value: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
}) {
  const onSelect = (
    option: SingleValue<{ label: string, value: string }>
  ) => {
    onChange(option?.value);
  };

  const formattedValue = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <CreateableSelect 
      placeholder={placeholder}
      className="text-sm h-10"
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#e2e8f0",
          ":hover": {
            borderColor: "#e2e8f0"
          },
          "background": "#111827",
        }),
      }}
      value={formattedValue}
      onChange={onSelect}
      options={options}
      onCreateOption={onCreate}
      isDisabled={disabled}
    />
  )
}