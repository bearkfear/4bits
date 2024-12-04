import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";
import { Dropdown } from "../../dropdown";

const actionVariants = cva(
  "space-x-1 cursor-pointer hover:opacity-95 px-3 rounded text-gray-12 dark:text-graydark-12",
  {
    variants: {
      variant: {
        default: "",
        hidden: "hidden",
        info: "bg-blue-9 dark:bg-bluedark-8 hover:!bg-blue-10 dark:hover:!bg-bluedark-9 text-graydark-12",
        success:
          "bg-green-9 dark:bg-greendark-8 hover:!bg-green-10 dark:hover:!bg-greendark-9 text-graydark-12",
        danger:
          "bg-red-9 dark:bg-reddark-8 hover:!bg-red-10 dark:hover:!bg-reddark-9 text-graydark-12",
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
    <Dropdown.Item className={actionVariants({ variant })} onClick={onClick}>
      <div className="w-4 flex items-center justify-center">{icon}</div>
      <span>{label}</span>
    </Dropdown.Item>
  );
}
