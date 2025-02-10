"use client";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "../lib/utils";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-gray-1 shadow-sm hover:bg-gray-4 text-gray-12 dark:bg-graydark-1 dark:hover:bg-graydark-4 dark:text-graydark-12 border border-gray-7 dark:border-graydark-7",
				danger:
					"bg-red-9 text-whitea-12 hover:bg-red-10 dark:hover:bg-reddark-10 dark:bg-reddark-9",
				danger__light:
					"bg-red-3 text-red-11 dark:text-reddark-11 hover:bg-red-4 dark:hover:bg-reddark-4 border border-red-7 dark:border-reddark-7 dark:bg-reddark-3",
				warning:
					"bg-yellow-9 text-blacka-12 hover:bg-yellow-10 dark:hover:bg-yellowdark-10 dark:bg-yellowdark-9",
				warning__light:
					"bg-yellow-3 text-yellow-11 dark:text-yellowdark-11 hover:bg-yellow-4 dark:hover:bg-yellowdark-4 border border-yellow-7 dark:border-yellowdark-7 dark:bg-yellowdark-3",
				success:
					"bg-green-9 text-whitea-12 hover:bg-green-10 dark:hover:bg-greendark-10 dark:bg-greendark-9",
				success__light:
					"bg-green-3 text-green-11 dark:text-greendark-11 hover:bg-green-4 dark:hover:bg-greendark-4 border border-green-7 dark:border-greendark-7 dark:bg-greendark-3",
				info: "bg-blue-9 text-whitea-12 hover:bg-blue-10 dark:hover:bg-bluedark-10 dark:bg-bluedark-9",
				info__light:
					"bg-blue-3 text-blue-11 dark:text-bluedark-11 hover:bg-blue-4 dark:hover:bg-bluedark-4 border border-blue-7 dark:border-bluedark-7 dark:bg-bluedark-3",

				link: "text-primary underline-offset-4 hover:underline",
				outline:
					"bg-transparent text-gray-12 dark:text-graydark-12 border border-gray-7 dark:border-graydark-7",
			},
			size: {
				default: "h-8 px-4 py-2 text-sm",
				sm: "h-6 rounded-md px-3 text-xs",
				lg: "h-9 rounded-md px-8",
				icon: "h-7 w-7",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, children, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{children}
			</Comp>
		);
	},
);

Button.displayName = "Button";
