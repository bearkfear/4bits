"use client";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { LuAsterisk } from "react-icons/lu";
import { cn } from "../../../lib/utils";

const labelVariants = cva(
	"text-xs text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-bold",
);

const Label = React.forwardRef<
	React.ComponentRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants> & { required?: boolean }
>(({ className, required, ...props }, ref) => (
	<div className="space-x-1 flex items-center">
		<LabelPrimitive.Root
			ref={ref}
			className={cn(labelVariants(), className)}
			{...props}
		/>
		{required && (
			<LuAsterisk className="text-red-9 dark:text-reddark-9 text-xs" />
		)}
	</div>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
