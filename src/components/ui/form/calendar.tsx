"use client";

import { CalendarIcon } from "lucide-react";
import { DayPicker, type DayPickerProps } from "react-day-picker";

import { buttonVariants } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Popover } from "../popover";
import { inputVariants } from "./input";
import { useEffect } from "react";

export type CalendarProps = DayPickerProps;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	value,
	mode,
	...props
}: Omit<DayPickerProps, "selected"> & {
	placeholder?: string;
	value?: string | Date;
}) {
	const iso8601Regex = /^(\d{4})-(\d{2})-(\d{2})/;

	const isDate = value instanceof Date;
	const isISO8601 = typeof value === "string" && iso8601Regex.test(value);

	const isValid = isDate || isISO8601;

	const selected = isValid ? new Date(value) : undefined;

	useEffect(() => {
		if (isDate) {
			// @ts-ignore
			props.onSelect(value.toJSON());
		}
		// @ts-ignore
	}, [isDate, props.onSelect, value]);

	return (
		<Popover.Root>
			<Popover.Trigger
				className={cn(
					inputVariants(),
					"text-left font-normal",
					mode === "single" && !selected && "text-gray-9",
				)}
			>
				{mode === "single" && selected ? (
					format(selected, "dd/MM/yyyy")
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
					mode="single"
					selected={selected}
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					onSelect={(newdate: any) => {
						if (newdate instanceof Date && mode === "single") {
							// @ts-ignore
							props.onSelect(newdate.toJSON());
							return;
						}
						// @ts-ignore
						props.onSelect(null);
					}}
				/>
				<Popover.Arrow className="fill-gray-6" />
			</Popover.Content>
		</Popover.Root>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
