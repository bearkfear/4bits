"use client";

import {
	CalendarIcon,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronUp,
} from "lucide-react";
import { DayPicker, type DayPickerProps } from "react-day-picker";

import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "~/components/ui/button";
import { Fragment } from "react";
import * as Popover from "../popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import "react-day-picker/style.css";

export type CalendarProps = DayPickerProps;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,

	...props
}: DayPickerProps) {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[240px] pl-3 text-left font-normal",
						props.mode === "single" && !props.selected && "text-gray-9",
					)}
				>
					{props.mode === "single" && props.selected ? (
						format(props.selected, "dd/MM/yyyy")
					) : (
						<span>Pick a date</span>
					)}
					<CalendarIcon className="ml-auto h-4 w-4 text-gray-9" />
				</Button>
			</Popover.Trigger>
			<Popover.Content className="w-auto p-0" align="start">
				<DayPicker
					showOutsideDays={showOutsideDays}
					className={cn("p-3", className)}
					locale={ptBR}
					classNames={{
						day_button: cn(
							"text-right text-sm",
							buttonVariants({ size: "icon", variant: "link" }),
						),
						selected: "text-blue-11 text-sm border rounded font-bold",
						today: "text-blue-9 text-sm",
						// caption_label: "text-xs uppercase",
						// month_caption: "flex text-sm font-bold py-1 text-gray-12",
						day: "text-sm",
						// focused: "border",
						weekday: "text-xs uppercase text-gray-11 font-medium py-2",
					}}
					// components={{
					// 	Chevron: ({ className, orientation, ...props }) => {
					// 		if (orientation === "left")
					// 			return (
					// 				<ChevronLeft
					// 					className={cn("h-4 w-4", className)}
					// 					{...props}
					// 				/>
					// 			);
					// 		if (orientation === "right")
					// 			return (
					// 				<ChevronRight
					// 					className={cn("h-4 w-4", className)}
					// 					{...props}
					// 				/>
					// 			);

					// 		if (orientation === "down")
					// 			return (
					// 				<ChevronDown
					// 					className={cn("h-4 w-4", className)}
					// 					{...props}
					// 				/>
					// 			);

					// 		if (orientation === "up")
					// 			return (
					// 				<ChevronUp className={cn("h-4 w-4", className)} {...props} />
					// 			);

					// 		return <Fragment />;
					// 	},
					// }}
					{...props}
				/>
				<Popover.Arrow className="fill-gray-6" />
			</Popover.Content>
		</Popover.Root>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
