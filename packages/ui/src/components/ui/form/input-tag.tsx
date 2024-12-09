"use client";
import { cva } from "class-variance-authority";
import * as React from "react";
import { mergeRefs } from "react-merge-refs";

import { LuX } from "react-icons/lu";
import { cn } from "../../../lib/utils";
import type { Delimiter, TagType } from "@4bits/formbuilder/dist/model/tag";

export const selectInputVariants = cva(
  "flex w-full rounded-md border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 px-3 text-xs ring-offset-transparent file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-gray-11 dark:placeholder:text-graydark-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-7 dark:focus-visible:ring-bluedark-7 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black dark:text-white"
);

export type tagVariant =
  | "default"
  | "error"
  | "info"
  | "warning"
  | "success"
  | "disabled";

export const tagsVariants = cva("bg-red-10 dark:bg-red", {
  variants: {
    body: {
      default:
        "bg-gray-3 dark:bg-graydark-5 text-gray-12 dark:text-graydark-12",
      error: "bg-red-8 dark:bg-reddark-8 text-gray-2 dark:text-graydark-12",
      info: "bg-blue-8 dark:bg-bluedark-8 text-gray-2 dark:text-graydark-12",
      warning:
        "bg-yellow-10 dark:bg-yellowdark-10 text-gray-12 dark:text-graydark-2",
      success:
        "bg-green-10 dark:bg-greendark-10 text-gray-2 dark:text-graydark-12",
      disabled:
        "bg-gray-5 dark:bg-graydark-8 text-gray-12 dark:text-graydark-12",
    },
    removeButton: {
      default:
        "bg-gray-5 dark:bg-graydark-8 text-gray-12 dark:text-graydark-12",
      error:
        "bg-red-10 dark:bg-reddark-10 text-gray-2 dark:text-graydark-12 hover:bg-red-7 dark:hover:bg-reddark-9",
      info: "bg-blue-10 dark:bg-bluedark-10 text-gray-2 dark:text-graydark-12 hover:bg-blue-7 dark:hover:bg-bluedark-9",
      warning:
        "bg-yellow-8 text-gray-12 dark:text-graydark-2 hover:bg-yellow-7",
      success:
        "bg-green-8 dark:bg-greendark-8 text-gray-2 dark:text-graydark-12 hover:bg-green-7 dark:hover:bg-greendark-7",
      disabled:
        "bg-gray-5 dark:bg-graydark-8 text-gray-12 dark:text-graydark-12",
    },
  },
});

export const inputVariants = cva(cn(selectInputVariants(), "h-8 py-2"));

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  onChange?: (newValue: string[]) => void;
  value?: string[];
  disabledTags?: string[];
  variant?: tagVariant;
  delimiter?: Delimiter;
  defaultTags?: string[];
}

const InputTag = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      onChange = () => {},
      value = [],
      disabledTags = [],
      variant = "default",
      delimiter,
      defaultTags,
      ...props
    },
    ref
  ) => {
    const [localValue, setLocalValue] = React.useState<string>("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onRemove = (index: number) => {
      const isDisabled = disabledTags.includes(value[index]);
      if (isDisabled) return;

      const newValue = [...value];
      newValue.splice(index, 1);
      onChange(newValue);
    };

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (delimiter?.value && inputValue.includes(delimiter.value)) {
        const [newValue] = inputValue.split(delimiter.value);

        if (newValue === "") {
          setLocalValue(inputValue);
          return;
        }

        const updatedValue = delimiter.includeDelimiterAsTag
          ? [...value, newValue, delimiter.value]
          : [...value, newValue];

        onChange(updatedValue);
        setLocalValue("");
      } else {
        setLocalValue(inputValue);
      }
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "Backspace":
          if (localValue === "" && value.length > 0) {
            onRemove(value.length - 1);
          }
          break;
        case "Enter":
          event.preventDefault();
          if (localValue) {
            onChange([...value, localValue]);
            setLocalValue("");
          }
          break;
      }
    };

    return (
      <div className="flex w-full min-h-8 items-center p-1 flex-wrap gap-1 rounded border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 text-xs ring-offset-transparent file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-gray-11 dark:placeholder:text-graydark-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-7 dark:focus-visible:ring-bluedark-7 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black dark:text-white">
        {defaultTags?.map((tag, index) => (
          <Tag
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={tag + index}
            value={tag}
            disabled={true}
            variant={variant}
            onRemove={() => {}}
          />
        ))}
        {value?.map((tag, index) => (
          <Tag
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={tag + index}
            value={tag}
            disabled={disabledTags.includes(tag)}
            variant={disabledTags.includes(tag) ? "disabled" : variant}
            onRemove={() => onRemove(index)}
          />
        ))}

        <input
          {...props}
          type={type}
          className="p-1 flex flex-1 min-w-50 bg-gray-1 dark:bg-graydark-1"
          ref={mergeRefs([ref, inputRef])}
          value={localValue}
          onKeyDown={onKeyDown}
          onChange={onChangeValue}
        />
      </div>
    );
  }
);
InputTag.displayName = "InputTag";

export { InputTag };

function Tag({
  value,
  disabled,
  variant,
  onRemove,
}: TagType & {
  variant: tagVariant;
  onRemove: () => void;
}) {
  return (
    <div
      className={cn(
        "flex hover:opacity-95 rounded space-x-2 px-2 py-1",
        tagsVariants({ body: variant })
      )}
    >
      <span>{value}</span>
      {!disabled && (
        <button
          type="button"
          onClick={onRemove}
          className={cn(
            "p-[2px] rounded-full",
            tagsVariants({ removeButton: variant })
          )}
        >
          <LuX />
        </button>
      )}
    </div>
  );
}
