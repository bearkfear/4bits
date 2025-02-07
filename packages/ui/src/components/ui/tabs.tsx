"use client";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "../../lib/utils";

const List = React.forwardRef<
	React.ComponentRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			"inline-flex h-10 items-center justify-center rounded-md bg-gray-3 dark:bg-graydark-3 p-1 text-gray-11 dark:text-graydark-11",
			className,
		)}
		{...props}
	/>
));
List.displayName = TabsPrimitive.List.displayName;

const Trigger = React.forwardRef<
	React.ComponentRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			"inline-flex items-center justify-center whitespace-nowrap rounded-xs px-3 py-1.5 text-sm font-medium ring-offset-gray-1 dark:ring-offset-graydark-1 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-7 dark:focus-visible:ring-graydark-7 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-1 dark:data-[state=active]:bg-graydark-1 data-[state=active]:text-gray-12 dark:data-[state=active]:text-graydark-12 data-[state=active]:shadow-xs",
			className,
		)}
		{...props}
	/>
));
Trigger.displayName = TabsPrimitive.Trigger.displayName;

const Content = React.forwardRef<
	React.ComponentRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			"mt-2 ring-offset-gray-1 dark:ring-offset-graydark-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-7 dark:focus-visible:ring-graydark-7 focus-visible:ring-offset-2 text-black dark:text-white text-sm",
			className,
		)}
		{...props}
	/>
));
Content.displayName = TabsPrimitive.Content.displayName;

export const Tabs = {
	Root: TabsPrimitive.Root,
	List,
	Trigger,
	Content,
};
