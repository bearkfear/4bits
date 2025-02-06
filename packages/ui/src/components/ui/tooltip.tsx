"use client";
import {
	TooltipArrow,
	TooltipContent,
	type TooltipContentProps,
} from "@radix-ui/react-tooltip";

import { Provider, Root, Trigger } from "@radix-ui/react-tooltip";

function Content({ children, ...props }: TooltipContentProps) {
	return (
		<TooltipContent {...props}>
			{typeof children === "string" || typeof children === "number" ? (
				<div className="mx-2 bg-gray-12 dark:bg-graydark-1 text-white rounded-sm border-gray-12 dark:border-graydark-1 border text-xs py-1 px-1">
					{children}
				</div>
			) : (
				children
			)}
			<TooltipArrow className="fill-gray-12 dark:fill-graydark-1" />
		</TooltipContent>
	);
}

export const Tooltip = { Trigger, Root, Provider, Content };
