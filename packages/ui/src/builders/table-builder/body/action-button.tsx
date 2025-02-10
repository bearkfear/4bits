"use client";

import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

const actionVariants = cva(
  "space-x-1 cursor-pointer w-full flex items-center text-sm py-1 px-3 rounded-sm text-gray-12 dark:text-graydark-12",
  {
    variants: {
      variant: {
        hidden: "hidden",
        default: "hover:bg-gray-3 dark:hover:bg-graydark-3",
        info: "bg-blue-9 dark:bg-bluedark-9 hover:bg-blue-10! dark:hover:bg-bluedark-9! text-graydark-12",
        success:
          "bg-green-9 dark:bg-greendark-9 hover:bg-green-10! dark:hover:bg-greendark-9! text-graydark-12",
        danger:
          "bg-red-9 dark:bg-reddark-9 hover:bg-red-10! dark:hover:bg-reddark-9! text-graydark-12",
      },
    },
  }
);

export type TableBuilderActionButtonVariants = VariantProps<
  typeof actionVariants
>;

interface TableBuilderActionButtonProps {
  onClick?: () => void;
  icon?: ReactNode;
  label: string;
  variant?: TableBuilderActionButtonVariants["variant"];
}

export function TableBuilderActionButton({
  onClick,
  variant = "default",
  icon,
  label,
}: TableBuilderActionButtonProps) {
  return (
    <button
      type="button"
      className={actionVariants({ variant })}
      onClick={onClick}
    >
      <div className="w-4 flex items-center justify-center">{icon}</div>
      <span>{label}</span>
    </button>
  );
}
