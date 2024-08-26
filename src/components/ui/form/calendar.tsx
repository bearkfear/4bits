"use client";

import { CalendarIcon } from "lucide-react";
import { DayPicker, type DayPickerProps } from "react-day-picker";

import { buttonVariants } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Popover } from "../popover";
import { inputVariants } from "./input";

export type CalendarProps = DayPickerProps;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: DayPickerProps & { placeholder?: string }) {
	return (
		<Popover.Root>
			<Popover.Trigger
				className={cn(
					inputVariants(),
					"text-left font-normal",
					props.mode === "single" && !props.selected && "text-gray-9",
				)}
			>
				{props.mode === "single" && props.selected ? (
					format(props.selected, "dd/MM/yyyy")
				) : (
					<span>{props.placeholder || "pick a date"}</span>
				)}
				<CalendarIcon className="ml-auto h-4 w-4 text-gray-9" />
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
						day: "text-sm",
						weekday: "text-xs uppercase text-gray-11 font-medium py-2",
					}}
					{...props}
				/>
				<Popover.Arrow className="fill-gray-6" />
			</Popover.Content>
		</Popover.Root>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
