"use client";

import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/utils";

const Root = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
	<CommandPrimitive
		ref={ref}
		className={cn(
			"flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
			className,
		)}
		{...props}
	/>
));
Root.displayName = CommandPrimitive.displayName;

const Input = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
	<div
		className="flex items-center border-b border-gray-6 dark:border-graydark-6 px-3"
		cmdk-input-wrapper=""
	>
		<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
		<CommandPrimitive.Input
			ref={ref}
			className={cn(
				"flex h-8 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-10 dark:placeholder:text-graydark-10 disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	</div>
));

Input.displayName = CommandPrimitive.Input.displayName;

const List = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
		{...props}
	/>
));

List.displayName = CommandPrimitive.List.displayName;

const Empty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className="py-6 text-center text-sm"
		{...props}
	/>
));

Empty.displayName = CommandPrimitive.Empty.displayName;

const Group = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cn(
			"overflow-hidden p-1 text-black dark:text-white [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-11 dark:[&_[cmdk-group-heading]]:text-graydark-11",
			className,
		)}
		{...props}
	/>
));

Group.displayName = CommandPrimitive.Group.displayName;

const Separator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 h-px bg-gray-6 dark:bg-graydark-6", className)}
		{...props}
	/>
));
Separator.displayName = CommandPrimitive.Separator.displayName;

const Item = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-gray-5 dark:data-[selected=true]:bg-graydark-5 data-[selected=true]:text-gray-12 dark:data-[selected=true]:text-graydark-12 data-[disabled=true]:opacity-50",
			className,
		)}
		{...props}
	/>
));

Item.displayName = CommandPrimitive.Item.displayName;

const Shortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn("ml-auto text-xs tracking-widest text-gray-11", className)}
			{...props}
		/>
	);
};
Shortcut.displayName = "CommandShortcut";

export const Command = {
	Root,
	Input,
	List,
	Empty,
	Group,
	Item,
	Shortcut,
	Separator,
};
