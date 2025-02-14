"use client";
// this is necessary to compile with tailwindcss
`--ignore;
 * lg:col-span-12
 * lg:col-span-11
 * lg:col-span-10
 * lg:col-span-9
 * lg:col-span-8
 * lg:col-span-7
 * lg:col-span-6
 * lg:col-span-5
 * lg:col-span-4
 * lg:col-span-3
 * lg:col-span-2
 * lg:col-span-1
`;

import type { FormRenderProps } from "@4bits/formbuilder";
import type { FieldPath, FieldValues } from "react-hook-form";
import { cn } from "../../lib/utils";
import { HelperText } from "../../elements/form/helper-text";
import { Label } from "../../elements/form/label";
import { FormControl } from "./form-control";

export function FormAnatomy<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormRenderProps<TFieldValues, TName>) {
	const FormItemLabel = (
		<Label
			required={props.fieldConfig.required}
			htmlFor={props.fieldConfig.name}
		>
			{props.fieldConfig.label}
		</Label>
	);

	const ValueLabels = props.fieldConfig.type === "switch" &&
		props.fieldConfig.valueLabels && (
			<span className="text-gray-11 dark:text-graydark-11">
				{props.field.value === true && props.fieldConfig.valueLabels.true}

				{!props.field.value && props.fieldConfig.valueLabels.false}
			</span>
		);

	const FormItemControl = (
		<div className="flex items-center space-x-2 text-sm">
			<FormControl {...props} />
			{ValueLabels}
		</div>
	);

	const FormItemHelperText = (
		<HelperText color={props.fieldState.invalid ? "danger" : "default"}>
			{props.fieldState.invalid
				? props.fieldState.error?.message
				: props.fieldConfig.helperText}
		</HelperText>
	);

	if (
		props.fieldConfig.type === "checkbox" ||
		(props.fieldConfig.type === "switch" &&
			!props.fieldConfig.valueLabels?.true &&
			!props.fieldConfig.valueLabels?.false)
	) {
		return (
			<div
				className={cn(
					"flex justify-between",
					`col-span-${props.fieldConfig.size}`,
				)}
			>
				<div className="space-y-2">
					<div className="flex items-center space-x-2">
						{props.fieldConfig.leftAddon}
						{FormItemControl}
						{props.fieldConfig.label !== undefined && FormItemLabel}
					</div>
					{FormItemHelperText}
				</div>
				{props.fieldConfig.rightAddon}
			</div>
		);
	}

	return (
		<div
			className={cn(
				"space-y-2",
				`lg:col-span-${props.fieldConfig.size} col-span-12`,
			)}
		>
			{(props.fieldConfig.leftAddon !== undefined ||
				props.fieldConfig.label !== undefined ||
				props.fieldConfig.rightAddon !== undefined) && (
				<div className="flex justify-between">
					<div className="flex space-x-2">
						{props.fieldConfig.leftAddon}
						{props.fieldConfig.label !== undefined && FormItemLabel}
					</div>
					{props.fieldConfig.rightAddon}
				</div>
			)}
			{FormItemControl}
			{FormItemHelperText}
		</div>
	);
}
