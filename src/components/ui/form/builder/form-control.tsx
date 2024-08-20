import type { FormRenderProps } from "@continha/formbuilder";
import { Calendar } from "../calendar";
import { Checkbox } from "../checkbox";
import { Input } from "../input";
import { Label } from "../label";
import { Money } from "../money";
import * as Radio from "../radio";
import { MultiSelector, SingleSelector } from "../selector";
import { Switch } from "../switch";
import { Textarea } from "../textarea";
import type { FieldPath, FieldValues } from "react-hook-form";

export function FormControl<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormRenderProps<TFieldValues, TName>) {
	const disabled = props.field.disabled || props.fieldConfig.disabled;

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
				id={props.field.name}
				required={props.fieldConfig.required}
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
				required={props.fieldConfig.required}
			/>
		);
	}

	if (["email", "password"].includes(props.fieldConfig.type)) {
		return (
			<Input
				{...props.field}
				type={props.fieldConfig.type}
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				id={props.field.name}
				required={props.fieldConfig.required}
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
				required={props.fieldConfig.required}
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
					empty: "Nenhuma opcao disponível",
					searchPlaceholder: "Pesquisar por um item",
				}}
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
					empty: "Nenhuma opcao disponível",
					searchPlaceholder: "Pesquisar por um item",
				}}
			/>
		);
	}

	if (props.fieldConfig.type === "checkbox") {
		return (
			<Checkbox {...props.field} id={props.field.name} disabled={disabled} />
		);
	}

	if (props.fieldConfig.type === "switch") {
		return (
			// TODO: Verificar porque nao está conseguindo animar o input quando tem o checked e o onCheckedChange
			<Switch
				{...props.field}
				id={props.field.name}
				disabled={disabled}
				checked={props.field.value}
				onCheckedChange={props.field.onChange}
			/>
		);
	}

	if (props.fieldConfig.type === "date") {
		return (
			<Calendar
				selected={props.field.value}
				onSelect={props.field.onChange}
				disabled={disabled}
				mode="single"
				required={props.fieldConfig.required}
				placeholder={props.fieldConfig.placeholder}
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
			>
				{props.fieldConfig.options?.map((option) => {
					const id = `radio-${props.fieldConfig.name}-option${option.value}`;
					return (
						<div className="flex space-x-2 items-center" key={option.value}>
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

	if (props.fieldConfig.type === "money") {
		return (
			<Money
				{...props.field}
				id={props.fieldConfig.name}
				placeholder={props.fieldConfig.placeholder}
				disabled={disabled}
				required={props.fieldConfig.required}
			/>
		);
	}

	return null;
}
