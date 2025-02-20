import { cn } from "../../lib/utils";

export const Footer = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse lg:flex-row lg:justify-end gap-2 items-center dark:bg-graydark-3 bg-gray-3 px-4 py-3",
			className,
		)}
		{...props}
	/>
);
Footer.displayName = "DialogFooter";
