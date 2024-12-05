import {
	LucideCircle,
	LucideCircleCheckBig,
	LucideCircleDashed,
} from "lucide-react";
import { cn } from "../../lib/utils";
import type { HTMLProps } from "react";

export interface Step {
	label: string;
}

export type StepperRootProps = HTMLProps<HTMLDivElement> & {
	steps: Step[];
	currentStepIndex: number;
	/**
	 * @default "vertical"
	 */
	direction?: "horizontal" | "vertical";
	enumerate?: boolean;
};

export function Stepper({
	steps,
	currentStepIndex,
	direction = "vertical",
	enumerate,
	...props
}: StepperRootProps) {
	function handleSteps(index: number) {
		if (currentStepIndex === index) {
			if (enumerate) {
				return (
					<div className="relative">
						<LucideCircleDashed size={20} />
						<div className="absolute top-0 left-0 h-5 w-5 flex justify-center items-center">
							<span className="text-xs">{index + 1}</span>
						</div>
					</div>
				);
			}
			return <LucideCircleDashed size={20} />;
		}
		if (currentStepIndex < index) {
			if (enumerate) {
				return (
					<div className="relative">
						<LucideCircle size={20} />
						<div className="absolute top-0 left-0 h-5 w-5 flex justify-center items-center">
							<span className="text-xs">{index + 1}</span>
						</div>
					</div>
				);
			}
			return <LucideCircle size={20} />;
		}
		if (currentStepIndex > index) {
			if (enumerate) {
				return (
					<div className="relative">
						<LucideCircle size={20} />
						<div className="absolute top-0 left-0 h-5 w-5 flex justify-center items-center">
							<span className="text-xs">{index + 1}</span>
						</div>
					</div>
				);
			}
			return <LucideCircleCheckBig size={20} />;
		}
	}

	return (
		<div {...props}>
			<div
				className={cn(
					"flex gap-2",
					direction === "vertical" ? "items-center" : "flex-col items-start",
				)}
			>
				{steps.map(({ label }, index) => (
					<>
						{index > 0 && (
							<hr
								className={cn(
									"border-none",
									direction === "vertical"
										? "h-px w-16"
										: "w-px h-10 ml-[9.5px]",
									index <= currentStepIndex
										? "bg-blue-11 dark:bg-bluedark-11"
										: "bg-gray-9 dark:bg-graydark-9",
								)}
							/>
						)}
						<div
							className={cn(
								"flex items-center justify-center gap-2",
								index <= currentStepIndex
									? "text-blue-11 dark:text-bluedark-11"
									: "text-gray-9 dark:text-graydark-9",
							)}
							key={label}
						>
							{handleSteps(index)}
							<span className="text-xs">{label}</span>
						</div>
					</>
				))}
			</div>
		</div>
	);
}
