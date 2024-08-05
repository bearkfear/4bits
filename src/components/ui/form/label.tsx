"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import { LuAsterisk } from "react-icons/lu";

const labelVariants = cva(
  "text-xs text-black dark:text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & { required?: boolean }
>(({ className, required, ...props }, ref) => (
  <div className="space-x-1 flex items-center">
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
    {required && <LuAsterisk className="text-red-9 dark:text-reddark-9" />}
  </div>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
