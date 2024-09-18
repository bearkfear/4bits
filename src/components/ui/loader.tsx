import { LucideLoaderCircle } from "lucide-react";
import { cn } from "../../lib/utils";

export type LoaderProps = {
	className?: string;
};

export function Loader({ className }: LoaderProps) {
	return (
		<LucideLoaderCircle
			className={cn("animate-spin text-black dark:text-white", className)}
			size={18}
		/>
	);
}
