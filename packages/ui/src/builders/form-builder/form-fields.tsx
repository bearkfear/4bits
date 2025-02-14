import { FormFields as FF, type FormConfig } from "@4bits/formbuilder";
import type { FieldPath, FieldValues } from "react-hook-form";
import { FormAnatomy } from "./form-anatomy";

export function FormFields<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: Omit<FormConfig<TFieldValues, TName>, "render">) {
	return <FF {...props} render={FormAnatomy} />;
}
