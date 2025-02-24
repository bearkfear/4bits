"use client";
import {
	type ChangeEvent,
	type ForwardedRef,
	type HTMLProps,
	type KeyboardEvent,
	forwardRef,
	useCallback,
} from "react";
import { cn } from "../../../../../lib/utils";
import { inputVariants } from "../input";
import { humanFormat, machineFormat } from "./money-helpers";

const validNumbersOrKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-"];

export type InputMoneyProps = HTMLProps<
	Omit<HTMLInputElement, "value" | "onChange">
> & {
	value?: number;
	onChange?: (value?: number) => void;
	isError?: boolean;
	isSuccess?: boolean;
	isLoading?: boolean;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
};

const InputMoneyInner = (
	{
		value,
		onChange,
		className,
		prefix = "R$",
		isLoading = false,
		isError = false,
		isSuccess = false,
		suffix,
		...props
	}: InputMoneyProps,
	ref: ForwardedRef<HTMLInputElement>,
) => {
	const externalValue = humanFormat(value);

	const onChangeValue = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				if (event.target.value === "") {
					onChange(undefined);
					return;
				}

				const newValue = machineFormat(event.target.value);

				onChange(newValue);
			}
		},
		[onChange],
	);

	const onKeyDown = useCallback(
		(event: KeyboardEvent<HTMLInputElement>) => {
			if (event.key === "Backspace" && value === 0) {
				onChange?.(undefined);
			}

			if (
				validNumbersOrKeys.every((k) => String(k) !== String(event.key)) ||
				!onChange
			) {
				return;
			}

			if (value === undefined) return;
			if (event.key === "-") {
				onChange(value * -1);
			}
		},
		[onChange, value],
	);

	const onBlur: InputMoneyProps["onBlur"] = (event) => {
		// prevents values -0,00 to be used. If become 0 or -0 it will fire to 0;
		if (value === 0) {
			onChange?.(0);
		}

		props.onBlur?.(event);
	};

	return (
		<input
			{...props}
			ref={ref}
			onKeyDown={onKeyDown}
			className={cn(
				inputVariants,
				externalValue.length > 0 && "has-text-right",
				className,
			)}
			type="text"
			inputMode="numeric" // Permite que quando em dispositivos móveis, o telefone abra um campo numérico e não de texto.
			value={externalValue}
			onChange={onChangeValue}
			onBlur={onBlur}
		/>
	);
};

export const Money = forwardRef(InputMoneyInner);
