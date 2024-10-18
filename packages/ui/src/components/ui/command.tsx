"use client";
import { DialogContent, type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import * as React from "react";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "../../lib/utils";
import { Button } from "./button";

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

const Page = ({
	total,
	page,
	onClick,
}: {
	total: number;
	page: number;
	onClick: (page: number) => void;
}) => (
	<div
		className="flex items-center justify-between border-t border-gray-6 dark:border-graydark-6 px-1"
		cmdk-input-wrapper=""
	>
		<Button
			variant="link"
			className="flex gap-1 text-blue-11 dark:text-bluedark-11"
			onClick={() => onClick(page - 1)}
			disabled={page === 1}
		>
			<LuChevronLeft className="text-sm" />
			Anterior
		</Button>
		<span className="text-xs">Página {page}</span>
		<Button
			variant="link"
			className="flex gap-1 text-blue-11 dark:text-bluedark-11"
			onClick={() => onClick(page + 1)}
			disabled={total === 0}
		>
			Próximo
			<LuChevronRight />
		</Button>
	</div>
);

Page.displayName = CommandPrimitive.Input.displayName;

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

interface CommandDialogProps extends DialogProps {}

const Dialog = ({ children, ...props }: CommandDialogProps) => {
	return (
		<Dialog {...props}>
			<DialogContent className="overflow-hidden p-0 shadow-lg">
				<Root className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
					{children}
				</Root>
			</DialogContent>
		</Dialog>
	);
};

export const Command = {
	Root,
	Input,
	Page,
	List,
	Empty,
	Group,
	Item,
	Shortcut,
	Separator,
	Dialog,
};
