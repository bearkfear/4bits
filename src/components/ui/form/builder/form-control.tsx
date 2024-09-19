import type { FormRenderProps } from "@continha/formbuilder";
import { Checkbox } from "../checkbox";
import * as MultiCheckbox from "../multi-checkbox";
import { Input } from "../input";
import { InputDate } from "../date";
import { Label } from "../label";
import { Money } from "../money";
import * as Radio from "../radio";
import { MultiSelector, SingleSelector } from "../selector";
import { Switch } from "../switch";
import { Textarea } from "../textarea";
import type { FieldPath, FieldValues } from "react-hook-form";
import { InputFile } from "../file";
import { cn } from "../../../../lib/utils";

export function FormControl<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormRenderProps<TFieldValues, TName>) {
	const disabled = props.field.disabled || props.fieldConfig.disabled;

	if (props.fieldConfig.type === "file") {
		return (
			<InputFile
				{...props.field}
				placeholder={props.fieldConfig.placeholder}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				disabled={disabled}
				multiple={props.fieldConfig.multiple}
				id={props.fieldConfig.name}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "text") {
		let masks = Array<string>();

		if (props.fieldConfig.masks) {
			masks = Array.isArray(props.fieldConfig.masks)
				? props.fieldConfig.masks
				: [props.fieldConfig.masks];
		}

		return (
			<Input
				{...props.field}
				type="text"
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				masks={masks}
				tokens={props.fieldConfig.tokens}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				id={props.field.name}
				required={props.fieldConfig.required}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "number") {
		return (
			<Input
				{...props.field}
				type="number"
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				id={props.field.name}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				required={props.fieldConfig.required}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (["email", "password", "color"].includes(props.fieldConfig.type)) {
		return (
			<Input
				{...props.field}
				type={props.fieldConfig.type}
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				id={props.field.name}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				required={props.fieldConfig.required}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (
		props.fieldConfig.type === "datetime" ||
		props.fieldConfig.type === "date" ||
		props.fieldConfig.type === "time" ||
		props.fieldConfig.type === "month"
	) {
		return (
			<InputDate
				{...props.field}
				type={
					props.fieldConfig.type === "datetime"
						? "datetime-local"
						: props.fieldConfig.type
				}
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				id={props.field.name}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				required={props.fieldConfig.required}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "textarea") {
		return (
			<Textarea
				{...props.field}
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				id={props.field.name}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				required={props.fieldConfig.required}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "select") {
		return (
			<SingleSelector
				options={props.fieldConfig.options || []}
				value={props.field.value}
				onChange={props.field.onChange}
				onBlur={props.field.onBlur}
				disabled={disabled}
				labelPath="label"
				valuePath="value"
				placeholder={props.fieldConfig.placeholder}
				searchable={props.fieldConfig.searchable}
				messages={{
					empty: "Nenhuma opção disponível",
					searchPlaceholder: "Pesquisar por um item",
				}}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "multi-select") {
		return (
			<MultiSelector
				options={props.fieldConfig.options || []}
				value={props.field.value}
				onChange={props.field.onChange}
				onBlur={props.field.onBlur}
				disabled={disabled}
				labelPath="label"
				valuePath="value"
				placeholder={props.fieldConfig.placeholder}
				searchable={props.fieldConfig.searchable}
				messages={{
					empty: "Nenhuma opção disponível",
					searchPlaceholder: "Pesquisar por um item",
				}}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "checkbox") {
		return (
			<Checkbox
				{...props.field}
				id={props.field.name}
				checked={props.field.value}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				disabled={disabled}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "switch") {
		return (
			<Switch
				{...props.field}
				id={props.field.name}
				disabled={disabled}
				checked={props.field.value}
				onCheckedChange={props.field.onChange}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "radio") {
		const options = props.fieldConfig.options || [];

		return (
			<Radio.Group
				{...props.field}
				value={`${props.field.value}`}
				onValueChange={(newValue) =>
					props.field.onChange(
						options.find((option) => `${option.value}` === newValue)?.value,
					)
				}
				disabled={disabled}
			>
				{options.map((option) => {
					const id = `radio-${props.fieldConfig.name}-option${option.value}`;
					return (
						<div
							className={cn(
								"flex space-x-2 items-center",
								props.fieldConfig.className,
							)}
							style={props.fieldConfig.style}
							key={option.value}
						>
							<Radio.Item id={id} value={`${option.value}`} />
							<Label htmlFor={id} className="font-medium">
								{option.label}
							</Label>
						</div>
					);
				})}
			</Radio.Group>
		);
	}

	if (props.fieldConfig.type === "multi-checkbox") {
		const options = props.fieldConfig.options || [];

		function handleChangeValue(newValue: string | number) {
			if (props.field.value.includes(newValue)) {
				props.field.onChange(
					props.field.value.filter(
						(element: string | number) => element !== newValue,
					),
				);
				return;
			}

			props.field.onChange([...props.field.value, newValue]);
		}

		return (
			<MultiCheckbox.Root>
				{options.map((option) => {
					const id = `checkbox-${props.fieldConfig.name}-option${option.value}`;
					return (
						<div
							className={cn(
								"flex space-x-2 items-center",
								props.fieldConfig.className,
							)}
							style={props.fieldConfig.style}
							key={option.value}
						>
							<MultiCheckbox.Item
								id={id}
								checked={(props.field.value as Array<string | number>).includes(
									option.value,
								)}
								value={option.value}
								onChange={() => handleChangeValue(option.value)}
								disabled={disabled}
							/>
							<Label htmlFor={id} className="font-medium">
								{option.label}
							</Label>
						</div>
					);
				})}
			</MultiCheckbox.Root>
		);
	}

	if (props.fieldConfig.type === "money") {
		return (
			<Money
				{...props.field}
				id={props.fieldConfig.name}
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				aria-label={props.fieldConfig.label}
				aria-description={props.fieldConfig.helperText}
				required={props.fieldConfig.required}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
			/>
		);
	}

	if (props.fieldConfig.type === "hyperlink") {
		throw new Error("Not implemented");
	}

	if (props.fieldConfig.type === "dynamic-checkbox") {
		throw new Error("Not implemented");
	}

	return null;
}
