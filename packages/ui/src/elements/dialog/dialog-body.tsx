import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export const Body = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
	({ className, children, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"text-blacka-12 dark:text-whitea-12 overflow-auto p-4",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	),
);

Body.displayName = "DialogBody";
