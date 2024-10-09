"use client";
import type { FormRenderProps } from "@continha/formbuilder";
import type { FieldPath, FieldValues } from "react-hook-form";
import { cn } from "../../../../lib/utils";
import { Checkbox } from "../checkbox";
import { InputDate } from "../date";
import { InputFile } from "../file";
import { Input } from "../input";
import { Label } from "../label";
import { Money } from "../money";
import * as MultiCheckbox from "../multi-checkbox";
import * as Radio from "../radio";
import { Rate } from "../rate";
import { MultiSelector, SingleSelector } from "../selector";
import { Switch } from "../switch";
import { Textarea } from "../textarea";

export function FormControl<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormRenderProps<TFieldValues, TName>) {
	const disabled = props.field.disabled || props.fieldConfig.disabled;

	function handleOnChange(newValue: any) {
		props.field.onChange(newValue);
		props.onChangeField?.(props.fieldConfig.name, newValue);
	}

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
				onChange={handleOnChange}
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
				onChange={handleOnChange}
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
				onChange={handleOnChange}
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
				onChange={handleOnChange}
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
				onChange={handleOnChange}
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
				onChange={(event) => {
					handleOnChange(event.target.value);
				}}
			/>
		);
	}

	if (props.fieldConfig.type === "select") {
		return (
			<SingleSelector
				options={props.fieldConfig.options || []}
				value={props.field.value}
				onChange={handleOnChange}
				onBlur={props.field.onBlur}
				disabled={disabled}
				labelPath="label"
				valuePath="value"
				placeholder={props.fieldConfig.placeholder}
				searchable={props.fieldConfig.searchable}
				onSearch={props.fieldConfig.onSearch}
				loadingOptions={props.fieldConfig.loadingOptions}
				page={props.fieldConfig.page}
				onChangePage={props.fieldConfig.onChangePage}
				onCloseSelect={props.fieldConfig.onCloseSelect}
				required={props.fieldConfig.required}
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
				onChange={handleOnChange}
				onBlur={props.field.onBlur}
				disabled={disabled}
				labelPath="label"
				valuePath="value"
				placeholder={props.fieldConfig.placeholder}
				searchable={props.fieldConfig.searchable}
				onSearch={props.fieldConfig.onSearch}
				loadingOptions={props.fieldConfig.loadingOptions}
				page={props.fieldConfig.page}
				onChangePage={props.fieldConfig.onChangePage}
				onCloseSelect={props.fieldConfig.onCloseSelect}
				messages={{
					empty: "Nenhuma opção disponível",
					searchPlaceholder: "Pesquisar por um item",
				}}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
				checkAll={props.fieldConfig.checkAll}
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
				onChange={(event) => {
					handleOnChange(event.currentTarget.checked);
				}}
			/>
		);
	}

	if (props.fieldConfig.type === "switch") {
		return (
			<div className="h-8 pt-1.5">
				<Switch
					{...props.field}
					id={props.field.name}
					disabled={disabled}
					checked={props.field.value}
					onCheckedChange={handleOnChange}
					className={props.fieldConfig.className}
					style={props.fieldConfig.style}
				/>
			</div>
		);
	}

	if (props.fieldConfig.type === "radio") {
		const options = props.fieldConfig.options || [];

		return (
			<Radio.Group
				{...props.field}
				value={`${props.field.value}`}
				onValueChange={(newValue) => {
					handleOnChange(
						options.find((option) => `${option.value}` === newValue)?.value,
					);
				}}
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
				handleOnChange(
					props.field.value.filter(
						(element: string | number) => element !== newValue,
					),
				);
				return;
			}

			handleOnChange([...props.field.value, newValue]);
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
				onChange={handleOnChange}
			/>
		);
	}

	if (props.fieldConfig.type === "hyperlink") {
		throw new Error("Not implemented");
	}

	if (props.fieldConfig.type === "dynamic-checkbox") {
		throw new Error("Not implemented");
	}

	if (props.fieldConfig.type === "rate") {
		return (
			<Rate
				ref={props.field.ref}
				id={props.fieldConfig.name}
				max={props.fieldConfig.max}
				className={props.fieldConfig.className}
				style={props.fieldConfig.style}
				value={props.field.value}
				onChange={handleOnChange}
			/>
		);
	}

	return null;
}
