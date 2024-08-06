"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "~/lib/utils";

const Checkbox = React.forwardRef<
  HTMLInputElement,
  Omit<React.HTMLProps<HTMLInputElement>, "ref">
>(({ className, ...props }, ref) => (
  <input type="checkbox" {...props} ref={ref} className={cn(className)} />
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
