"use client";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

import { cn } from "../../../lib/utils";

const Group = React.forwardRef<
	React.ComponentRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cn("grid gap-2", className)}
			{...props}
			ref={ref}
		/>
	);
});
Group.displayName = RadioGroupPrimitive.Root.displayName;

const Item = React.forwardRef<
	React.ComponentRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(
				"aspect-square h-4 w-4 rounded-full border border-gray-7 dark:border-graydark-7 text-primary ring-offset-gray-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-6 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
				<Circle className="h-2.5 w-2.5 fill-current text-current dark:text-bluedark-9 text-blue-9" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
});
Item.displayName = RadioGroupPrimitive.Item.displayName;

const Root = RadioGroupPrimitive.Root;

export { Group, Item, Root };
