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
					"bg-gray-1 hover:bg-gray-3 text-gray-12 dark:bg-graydark-1 dark:hover:bg-graydark-4 dark:text-graydark-12 border border-gray-7 dark:border-graydark-7 dark:hover:border-graydark-8 hover:border-gray-8",
				danger:
					"bg-red-9 text-whitea-12 hover:bg-red-10 dark:hover:bg-reddark-10 dark:bg-reddark-9",
				danger__light:
					"bg-red-3 text-red-11 dark:text-reddark-11 hover:bg-red-4 dark:hover:bg-reddark-4 border border-red-7 dark:border-reddark-7 dark:bg-reddark-3",
				warning:
					"bg-orange-9 text-orange-1 hover:bg-orange-10 dark:hover:bg-orangedark-10 dark:bg-orangedark-9",
				warning__light:
					"bg-orange-3 text-orange-11 dark:text-orangedark-11 hover:bg-orange-4 dark:hover:bg-orangedark-4 border border-orange-7 dark:border-orangedark-7 dark:bg-orangedark-3",
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
