import { cn } from "@/lib/utils";
import { Root, type SeparatorProps } from "@radix-ui/react-separator";

export function Separator({ className, ...props }: SeparatorProps) {
  return <Root {...props} className={cn(className, "bg-gray-6 dark:bg-graydark-6")}  />;
}
