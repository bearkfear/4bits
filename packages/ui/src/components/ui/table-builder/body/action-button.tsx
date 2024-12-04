import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";
import { Dropdown } from "../../dropdown";

const actionVariants = cva(
  "space-x-1 cursor-pointer hover:opacity-95 px-3 rounded",
  {
    variants: {
      variant: {
        default: "",
        hidden: "hidden",
        info: "bg-blue-10 dark:bg-bluedark-10 hover:!bg-blue-11 dark:hover:!bg-bluedark-11 text-gray-2 dark:text-gray-11",
        success:
          "bg-green-10 dark:bg-greendark-10 hover:!bg-green-11 dark:hover:!bg-greendark-11 text-gray-2 dark:text-gray-11",
        danger:
          "bg-red-10 dark:bg-reddark-10 hover:!bg-red-11 dark:hover:!bg-reddark-11 text-gray-2 dark:text-gray-11",
      },
    },
  }
);

export type ActionVariants = VariantProps<typeof actionVariants>;

interface ActionButtonProps {
  onClick: () => void;
  icon: ReactNode;
  label: string;
  variant?: ActionVariants["variant"];
}

export function ActionButton({
  onClick,
  variant = "default",
  icon,
  label,
}: ActionButtonProps) {
  return (
    <Dropdown.Item className={actionVariants({ variant })} onClick={onClick}>
      <div className="w-4 flex items-center justify-center">{icon}</div>
      <span>{label}</span>
    </Dropdown.Item>
  );
}
