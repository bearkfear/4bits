import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/utils";

import {
	Group,
	Portal,
	Root,
	Sub,
	Trigger,
} from "@radix-ui/react-dropdown-menu";

const SubTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuPrimitive.SubTrigger
		ref={ref}
		className={cn(
			"flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none focus:bg-accent data-[state=open]:bg-accent",
			inset && "pl-8",
			className,
		)}
		{...props}
	>
		{children}
		<ChevronRight className="ml-auto h-4 w-4" />
	</DropdownMenuPrimitive.SubTrigger>
));
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const SubContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.SubContent
		ref={ref}
		className={cn(
			"z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
			className,
		)}
		{...props}
	/>
));
SubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const Content = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 py-1 text-black dark:text-white shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 mx-2",
				className,
			)}
			{...props}
		>
			{children}

			<DropdownMenuPrimitive.DropdownMenuArrow className="fill-gray-6 dark:fill-graydark-6" />
		</DropdownMenuPrimitive.Content>
	</DropdownMenuPrimitive.Portal>
));
Content.displayName = DropdownMenuPrimitive.Content.displayName;

const Item = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		className={cn(
			"relative text-xs flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none transition-colors focus:bg-gray-4 dark:focus:bg-graydark-4 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 active:bg-gray-5 dark:active:bg-graydark-5",
			inset && "pl-8",
			className,
		)}
		{...props}
	/>
));
Item.displayName = DropdownMenuPrimitive.Item.displayName;

const Label = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Label
		ref={ref}
		className={cn(
			"px-2 py-1.5 text-xs font-semibold",
			inset && "pl-8",
			className,
		)}
		{...props}
	/>
));
Label.displayName = DropdownMenuPrimitive.Label.displayName;

const Separator = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-gray-6 dark:bg-graydark-6", className)}
		{...props}
	/>
));
Separator.displayName = DropdownMenuPrimitive.Separator.displayName;

export const Dropdown = {
	Content,
	Item,
	Label,
	Separator,
	SubContent,
	SubTrigger,
	Root,
	Trigger,
	Group,
	Sub,
	Portal,
};
