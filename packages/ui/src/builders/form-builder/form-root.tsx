import type { HTMLProps, PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

export function Root({
	className,
	...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
	return (
		<div
			{...props}
			className={cn("grid grid-cols-12 grid-rows-1 gap-2", className)}
		/>
	);
}
