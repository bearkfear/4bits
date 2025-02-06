"use client";

import {
	type HTMLAttributes,
	type TdHTMLAttributes,
	type ThHTMLAttributes,
	forwardRef,
} from "react";
import { cn } from "../../lib/utils";

const Root = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
	({ className, ...props }, ref) => (
		<div className="relative w-full rounded-sm overflow-auto">
			<table
				ref={ref}
				className={cn("w-full caption-bottom text-xs", className)}
				{...props}
			/>
		</div>
	),
);
Root.displayName = "Root";

const Header = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn("dark:bg-graydark-3", className)} {...props} />
));
Header.displayName = "Header";

const Body = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody ref={ref} className={cn(className)} {...props} />
));
Body.displayName = "Body";

const Footer = forwardRef<
	HTMLTableSectionElement,
	HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn(
			"border-t border-gray-4 dark:border-graydark-5 dark:bg-graydark-3",
			className,
		)}
		{...props}
	/>
));
Footer.displayName = "Footer";

const Row = forwardRef<
	HTMLTableRowElement,
	HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cn(
			"border-b dark:even:bg-graydark-2 hover:opacity-75 even:bg-gray-2 last:border-b-0 border-gray-4 dark:border-graydark-4",
			className,
		)}
		{...props}
	/>
));
Row.displayName = "Row";

const Head = forwardRef<
	HTMLTableCellElement,
	ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			"h-8 px-4 text-left align-middle border-b text-gray-12 dark:text-graydark-12 dark:border-graydark-4 border-gray-4",
			className,
		)}
		{...props}
	/>
));
Head.displayName = "Head";

const Cell = forwardRef<
	HTMLTableCellElement,
	TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn(
			"px-4 py-1 align-middle h-10 dark:text-graydark-11 text-gray-11",
			className,
		)}
		{...props}
	/>
));
Cell.displayName = "Cell";

const Caption = forwardRef<
	HTMLTableCaptionElement,
	HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cn("text-sm mb-2 caption-top text-muted-foreground", className)}
		{...props}
	/>
));
Caption.displayName = "Caption";

export const Table = {
	Root,
	Header,
	Body,
	Footer,
	Head,
	Row,
	Cell,
	Caption,
};
