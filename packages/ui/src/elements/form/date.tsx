"use client";
import { format, parse } from "date-fns";
import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { inputVariants } from "./input";

export interface InputDateProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"onChange" | "value"
	> {
	type: "date" | "datetime-local" | "time" | "month";
	value?: Date;
	onChange?: (newValue?: Date) => void;
}

const InputDate = React.forwardRef<HTMLInputElement, InputDateProps>(
	({ className, type, value, onChange = () => {}, ...props }, ref) => {
		const [date, setDate] = useState("");

		useEffect(() => {
			let oldValue = "";
			if (value) {
				if (type === "date") {
					oldValue = format(value, "yyyy-MM-dd");
				} else if (type === "datetime-local") {
					oldValue = format(value, "yyyy-MM-dd HH:mm");
				} else if (type === "time") {
					oldValue = format(value, "HH:mm");
				} else if (type === "month") {
					oldValue = format(value, "yyyy-MM");
				}
			}

			setDate(oldValue);
		}, [value, type]);

		function handleOnBlur() {
			if (date === "") {
				onChange(undefined);
				return;
			}

			if (type === "date") {
				onChange(parse(date, "yyyy-MM-dd", new Date()));
			} else if (type === "datetime-local") {
				onChange(parse(date.replace("T", " "), "yyyy-MM-dd HH:mm", new Date()));
			} else if (type === "time") {
				onChange(parse(date, "HH:mm", new Date()));
			} else if (type === "month") {
				onChange(parse(date, "yyyy-MM", new Date()));
			}
		}

		return (
			<input
				{...props}
				type={type}
				className={cn(inputVariants, className)}
				ref={ref}
				value={date}
				onChange={(event) => setDate(event.target.value)}
				onBlur={handleOnBlur}
			/>
		);
	},
);
InputDate.displayName = "InputDate";

export { InputDate };
