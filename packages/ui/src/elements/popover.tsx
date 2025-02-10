"use client";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import { cn } from "../lib/utils";

const Root = PopoverPrimitive.Root;

const Trigger = PopoverPrimitive.Trigger;

const Arrow = PopoverPrimitive.Arrow;

const Content = React.forwardRef<
	React.ComponentRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "start", sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"z-50 w-full rounded-md border border-gray-6 dark:border-graydark-6 dark:bg-graydark-1 bg-gray-1 p-4 text-gray-12 dark:text-graydark-12 shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				className,
			)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));
Content.displayName = PopoverPrimitive.Content.displayName;

export const Popover = { Root, Trigger, Arrow, Content };
