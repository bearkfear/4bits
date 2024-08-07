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

	if (props.fieldConfig.type === "checkbox") {
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

const Root = ({ children }: PropsWithChildren<{ className?: string }>) => {
	return <div className="grid grid-cols-12 grid-rows-1">{children}</div>;
};

export const FormBuilder = {
	Root,
	FormFields,
};
