import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const tagVariants = cva(
	"inline-flex items-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			size: {
				normal: "px-2.5 py-0.5 text-xs",
				md: "px-3 py-1 text-sm",
				lg: "px-4 py-1.5 text-normal",
			},
			variant: {
				light: "bg-gray-3 text-gray-12",
				white: "bg-whitea-12 text-blacka-12",
				black: "bg-blacka-12 text-whitea-12",
				info: "bg-blue-9 text-blue-1 dark:bg-bluedark-9 dark:text-bluedark-1",
				success:
					"bg-green-9 text-green-1 dark:bg-greendark-9 dark:text-greendark-1",

				warning:
					"bg-orange-9 text-orange-1 dark:bg-orangedark-9 dark:text-orangedark-1",
				danger: "bg-red-9 text-red-1 dark:bg-reddark-9 dark:text-reddark-1",
			},
		},
		defaultVariants: {
			variant: "light",
			size: "normal",
		},
	},
);

export interface TagProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof tagVariants> {}

function Tag({ className, variant, size, ...props }: TagProps) {
	return (
		<div className={cn(tagVariants({ variant, size }), className)} {...props} />
	);
}

export { Tag, tagVariants };
