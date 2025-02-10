"use client";
import { type HTMLAttributes, forwardRef } from "react";

import { cn } from "../lib/utils";

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"rounded-lg border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 shadow-xs",
				className,
			)}
			{...props}
		/>
	),
);
Root.displayName = "Card.Root";

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex flex-col space-y-1.5 p-6", className)}
			{...props}
		/>
	),
);
Header.displayName = "CardHeader";

const Title = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			"text-2xl font-semibold leading-none tracking-tight text-blacka-12  dark:text-whitea-12",
			className,
		)}
		{...props}
	/>
));
Title.displayName = "CardTitle";

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
Description.displayName = "CardDescription";

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
	),
);
Content.displayName = "CardContent";

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex items-center p-6 pt-0", className)}
			{...props}
		/>
	),
);
Footer.displayName = "CardFooter";

export const Card = {
	Root,
	Header,
	Footer,
	Title,
	Description,
	Content,
};
