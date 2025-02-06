import React from "react";
import { forwardRef } from "react";
import { LuStar } from "react-icons/lu";
import { mergeRefs } from "react-merge-refs";
import { cn } from "../../../lib/utils";

export interface RateProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "value"> {
	max?: number;
	value: number;
	onChange: (newValue: number) => void;
}

const Rate = forwardRef<HTMLDivElement, RateProps>(
	({ max = 5, value, onChange = () => {}, ...props }, ref) => {
		const divRef = React.useRef<HTMLDivElement>(null);

		return (
			<div
				{...props}
				ref={mergeRefs([ref, divRef])}
				className={cn("flex gap-0.5 h-8 items-center", props.className)}
			>
				{Array.from({ length: max }, (_, i) => i + 1).map((element) => (
					<button
						key={element}
						type="button"
						className={cn(
							"rounded-sm p-1 hover:bg-gray-3 dark:hover:bg-graydark-3 text-base dark:text-white",
							element <= value && "text-yellow-10!",
						)}
						onClick={() => onChange(element)}
					>
						<LuStar />
					</button>
				))}
			</div>
		);
	},
);
Rate.displayName = "Rate";

export { Rate };
