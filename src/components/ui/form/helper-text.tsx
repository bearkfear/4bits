import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const helperText = cva("text-xs", {
  variants: {
    color: {
      default: "text-gray-11 dark:text-graydark-11",
      danger: "text-red-11 dark:text-reddark-11",
      success: "text-green-11 dark:text-greendark-11",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export type HelperTextProps = React.PropsWithChildren<
  VariantProps<typeof helperText>
>;

export function HelperText({ children, color, ...props }: HelperTextProps) {
  return (
    <p {...props} className={cn(helperText({ color }))}>
      {children}
    </p>
  );
}
