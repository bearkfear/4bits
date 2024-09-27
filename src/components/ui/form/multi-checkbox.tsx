"use client";
import { type HTMLProps, forwardRef } from "react";
import { cn } from "../../../lib/utils";

const Root = forwardRef<HTMLInputElement, HTMLProps<HTMLDivElement>>(
	({ children, className, ...props }, ref) => (
		<div {...props} ref={ref} className={cn("grid gap-2", className)}>
			{children}
		</div>
	),
);

const Item = forwardRef<
	HTMLInputElement,
	HTMLProps<Omit<HTMLInputElement, "type">>
>((props, ref) => <input {...props} ref={ref} type="checkbox" />);

export { Root, Item };
