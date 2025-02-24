"use client";
import * as React from "react";

import { cn } from "../../../../lib/utils";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[80px] w-full rounded-md border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 px-3 py-2 ring-offset-transparent placeholder:text-gray-11 dark:placeholder:text-graydark-11 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-7 dark:focus-visible:ring-bluedark-7 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-blacka-12 dark:text-white text-sm",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
