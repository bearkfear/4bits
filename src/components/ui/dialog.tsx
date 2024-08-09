"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

import { buttonVariants } from "dist";
import { cn } from "~/lib/utils";
import { Separator } from "./separator";

const Root = DialogPrimitive.Root;

const Trigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const Close = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const Content = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(
				"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
				className,
			)}
			{...props}
		>
			{children}
		</DialogPrimitive.Content>
	</DialogPortal>
));
Content.displayName = DialogPrimitive.Content.displayName;

const Header = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<>
		<div
			className={cn(
				"flex flex-col space-y-1.5 text-center sm:text-left p-3",
				className,
			)}
			{...props}
		/>
		<Separator className="h-px w-full" />
	</>
);
Header.displayName = "DialogHeader";

const Footer = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<>
		<Separator className="h-px w-full" />
		<div
			className={cn(
				"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-3",
				className,
			)}
			{...props}
		/>
	</>
);
Footer.displayName = "DialogFooter";

const Title = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(
			"flex text-sm font-bold leading-none tracking-tight text-black dark:text-white",
			className,
		)}
		{...props}
	/>
));
Title.displayName = DialogPrimitive.Title.displayName;

const Description = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn("flex text-xs text-gray-11", className)}
		{...props}
	/>
));
Description.displayName = DialogPrimitive.Description.displayName;

const CloseX = React.forwardRef<
	React.ElementRef<typeof Close>,
	React.ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => (
	<Close
		ref={ref}
		className={cn(buttonVariants({ size: "icon" }), className)}
		{...props}
	>
		<X size={18} />
	</Close>
));
CloseX.displayName = "DialogCloseX";

const Body = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("text-xs text-black dark:text-white p-3", className)}
			{...props}
		/>
	),
);
Description.displayName = "DialogBody";

export {
	Root,
	Trigger,
	Content,
	Header,
	Footer,
	Title,
	Description,
	Body,
	Close,
	CloseX,
};
