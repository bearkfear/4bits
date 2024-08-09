import {
	type ChangeEvent,
	type ForwardedRef,
	type HTMLProps,
	type KeyboardEvent,
	forwardRef,
	useCallback,
} from "react";
import { cn } from "~/lib/utils";
import { inputVariants } from "../input";
import { humanFormat, machineFormat } from "./money-helpers";

export type InputMoneyProps = HTMLProps<
	Omit<HTMLInputElement, "value" | "onChange">
> & {
	value?: number;
	onChange?: (value: number) => void;
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
				const newValue = machineFormat(event.target.value);
				onChange(newValue);
			}
		},
		[onChange],
	);

	const onKeyDown = useCallback(
		(event: KeyboardEvent<HTMLInputElement>) => {
			if (!value || !onChange) {
				return;
			}
			if (event.key === "-") {
				onChange(value * -1);
			}
		},
		[onChange, value],
	);

	return (
		<input
			{...props}
			ref={ref}
			onKeyDown={onKeyDown}
			className={cn(
				inputVariants(),
				externalValue.length > 0 && "has-text-right",
				className,
			)}
			type="text"
			inputMode="numeric" // Permite que quando em dispositivos móveis, o telefone abra um campo numérico e não de texto.
			value={externalValue}
			onChange={onChangeValue}
		/>
	);
};

export const Money = forwardRef(InputMoneyInner);
