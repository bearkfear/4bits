import * as React from "react";
import { cn } from "../../lib/utils";

const Root = React.forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
	<div className="relative w-full border rounded border-gray-5 dark:border-graydark-5 overflow-auto">
		<table
			ref={ref}
			className={cn("w-full caption-bottom text-xs", className)}
			{...props}
		/>
	</div>
));
Root.displayName = "Root";

const Header = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead
		ref={ref}
		className={cn(
			"bg-gray-3 dark:bg-graydark-3 dark:text-graydark-11 text-gray-11",
			className,
		)}
		{...props}
	/>
));
Header.displayName = "Header";

const Body = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody ref={ref} className={cn(className)} {...props} />
));
Body.displayName = "Body";

const Footer = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn(
			"border-t border-gray-4 dark:border-graydark-5 dark:bg-graydark-3 bg-gray-3",
			className,
		)}
		{...props}
	/>
));
Footer.displayName = "Footer";

const Row = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cn(
			"border-b dark:even:bg-graydark-2 even:bg-gray-2 last:border-b-0 border-gray-4 dark:border-graydark-4 hover:dark:bg-graydark-2 hover:bg-gray-2 data-[state=selected]:bg-muted",
			className,
		)}
		{...props}
	/>
));
Row.displayName = "Row";

const Head = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			"h-8 px-4 text-left align-middle border-b border-r dark:border-graydark-4 border-gray-4 last:border-r-0 font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
			className,
		)}
		{...props}
	/>
));
Head.displayName = "Head";

const Cell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn(
			"px-4 py-1 align-middle border-r last:border-r-0 dark:border-graydark-4 dark:text-graydark-10 border-gray-4 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
			className,
		)}
		{...props}
	/>
));
Cell.displayName = "Cell";

const Caption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
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
