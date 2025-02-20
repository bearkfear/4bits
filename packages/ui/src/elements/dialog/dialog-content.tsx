import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	forwardRef,
} from "react";
import { cn } from "../../lib/utils";

export const dialogContentStyles = cva(
	"fixed left-[50%] top-[50%] z-50 w-full m-x translate-x-[-50%] translate-y-[-50%] gap-3 border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 shadow-lg sm:rounded-lg max-h-9/10 flex flex-col overflow-hidden",
	{
		variants: {
			openAnimation: {
				none: "",
				scaleFromLeft:
					"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
				scale:
					"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
			},
			closeAnimation: {
				none: "",
				scaleFromLeft:
					"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
				scale:
					"data-[state=closed]:animate-out data-[state=closed]:zoom-out-98 data-[state=closed]:fade-out-0",
			},
		},
		defaultVariants: {
			openAnimation: "scale",
			closeAnimation: "scale",
		},
	},
);

const DialogOverlay = forwardRef<
	ComponentRef<typeof DialogPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 z-50 bg-blacka-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const Content = forwardRef<
	ComponentRef<typeof DialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
		VariantProps<typeof dialogContentStyles>
>(({ className, children, closeAnimation, openAnimation, ...props }, ref) => (
	<DialogPrimitive.DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(
				dialogContentStyles({ openAnimation, closeAnimation }),
				className,
			)}
			{...props}
		>
			{children}
		</DialogPrimitive.Content>
	</DialogPrimitive.DialogPortal>
));
Content.displayName = DialogPrimitive.Content.displayName;
