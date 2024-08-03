import { cn } from "~/lib/utils";
import { LoaderCircle } from "lucide-react";

export type LoaderProps = {
  className?: string;
};

export function Loader({ className }: LoaderProps) {
  return <LoaderCircle className={cn("animate-spin text-black dark:text-white", className)} size={18} />;
}
