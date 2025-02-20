import { Close } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Header = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col text-left items-center px-4 py-3 bg-gray-3 dark:bg-graydark-3",
			className,
		)}
		{...props}
	/>
);
Header.displayName = "DialogHeader";

export const Title = forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(
			"flex font-bold leading-none tracking-tight text-blacka-12 dark:text-whitea-12",
			className,
		)}
		{...props}
	/>
));
Title.displayName = DialogPrimitive.Title.displayName;

export const Description = forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn("flex text-sm text-gray-11 dark:text-graydark-11", className)}
		{...props}
	/>
));
Description.displayName = DialogPrimitive.Description.displayName;

export const CloseX = forwardRef<
	React.ComponentRef<typeof Close>,
	React.ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => (
	<Close
		ref={ref}
		className={cn(
			"text-whitea-11 rounded-full p-1 bg-blacka-11 dark:bg-blacka-10 hover:bg-gray-12 transition-colors dark:border-graydark-7 dark:border",
			className,
		)}
		{...props}
	>
		<X size={16} />
	</Close>
));
CloseX.displayName = "DialogCloseX";
