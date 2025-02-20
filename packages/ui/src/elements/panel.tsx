import { type HTMLAttributes, forwardRef } from "react";

import { cn } from "../lib/utils";

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"rounded-lg border border-gray-7 dark:border-graydark-6 bg-gray-2 dark:bg-graydark-2 overflow-hidden",
				className,
			)}
			{...props}
		/>
	),
);
Root.displayName = "PanelRoot";

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"flex space-x-2 py-2 px-4 dark:bg-graydark-4  bg-gray-4 border-b border-gray-7 dark:border-graydark-7",
				className,
			)}
			{...props}
		/>
	),
);
Header.displayName = "PanelHeader";

const Title = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			"text-sm font-bold text-gray-12 dark:text-graydark-12",
			className,
		)}
		{...props}
	/>
));
Title.displayName = "PanelTitle";

const Description = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-sm text-gray-11 dark:text-graydark-11", className)}
		{...props}
	/>
));
Description.displayName = "PanelDescription";

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("p-4", className)} {...props} />
	),
);
Content.displayName = "PanelContent";

export const Panel = {
	Root,
	Header,
	Title,
	Description,
	Content,
};
