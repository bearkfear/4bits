import type { FormRenderProps } from "@continha/formbuilder";
import { cn } from "~/lib/utils";
import { HelperText } from "../helper-text";
import { Label } from "../label";
import type { FieldPath, FieldValues } from "react-hook-form";
import { FormControl } from "./form-control";

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

	const ValueLabels = (
		<span className="text-gray-11 dark:text-graydark-11">
			{props.field.value === true &&
				props.fieldConfig.type === "switch" &&
				props.fieldConfig.valueLabels &&
				props.fieldConfig.valueLabels.true}

			{!props.field.value &&
				props.fieldConfig.type === "switch" &&
				props.fieldConfig.valueLabels &&
				props.fieldConfig.valueLabels.false}
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
		(props.fieldConfig.type === "switch" && !props.fieldConfig.valueLabels)
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
