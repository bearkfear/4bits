import * as React from "react";

import { cn } from "~/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-8 w-full rounded-md border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 px-3 py-2 text-xs ring-offset-transparent file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-gray-11 dark:placeholder:text-graydark-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-7 dark:focus-visible:ring-bluedark-7 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black dark:text-white",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
