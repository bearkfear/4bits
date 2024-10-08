"use client";
import { Root, type SeparatorProps } from "@radix-ui/react-separator";
import { cn } from "../../lib/utils";

export function Separator({ className, ...props }: SeparatorProps) {
	return (
		<Root
			{...props}
			className={cn(className, "bg-gray-6 dark:bg-graydark-6")}
		/>
	);
}
