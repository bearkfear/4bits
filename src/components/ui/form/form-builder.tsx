import {
	FormFields as FF,
	type FormConfig,
	type FormRenderProps,
} from "@continha/formbuilder";
import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";
import { HelperText } from "./helper-text";
import { Input } from "./input";
import { Label } from "./label";
import { MultiSelector, SingleSelector } from "./selector";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import * as Radio from "./radio";
import { Switch } from "./switch";

function FormControl(props: FormRenderProps) {
	const disabled = props.field.disabled || props.fieldConfig.disabled;

	if (props.fieldConfig.type === "text") {
		return (
			<Input
				{...props.field}
				type="text"
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

	return null;
}

/**
 *
 * col-span-12
 * col-span-11
 * col-span-10
 * col-span-9
 * col-span-8
 * col-span-7
 * col-span-6
 * col-span-5
 * col-span-4
 * col-span-3
 * col-span-2
 * col-span-1
 *
 * @param props
 * @returns
 */

function FormItem(props: FormRenderProps) {
	const FormItemLabel = (
		<Label
			required={props.fieldConfig.required}
			htmlFor={props.fieldConfig.name}
		>
			{props.fieldConfig.label}
		</Label>
	);

	const FormItemControl = <FormControl {...props} />;

	const FormItemHelperText = (
		<HelperText color={props.fieldState.invalid ? "danger" : "default"}>
			{props.fieldState.invalid
				? props.fieldState.error?.message
				: props.fieldConfig.helperText}
		</HelperText>
	);

	if (
		props.fieldConfig.type === "checkbox" ||
		props.fieldConfig.type === "switch"
	) {
		return (
			<div
				className={cn(
					"space-x-2 flex items-start",
					`col-span-${props.fieldConfig.size}`,
				)}
			>
				{FormItemControl}
				<div className="space-y-2">
					{FormItemLabel}
					{FormItemHelperText}
				</div>
			</div>
		);
	}

	return (
		<div className={cn("space-y-2", `col-span-${props.fieldConfig.size}`)}>
			{FormItemLabel}
			{FormItemControl}
			{FormItemHelperText}
		</div>
	);
}

const FormFields = (props: Omit<FormConfig, "render">) => {
	return (
		<FF
			{...props}
			render={(formRenderProps) => <FormItem {...formRenderProps} />}
		/>
	);
};

const Root = ({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) => {
	return (
		<div className={cn("grid grid-cols-12 grid-rows-1 gap-2", className)}>
			{children}
		</div>
	);
};

export const FormBuilder = {
	Root,
	FormFields,
};
