"use client";

import { FormFields as FF, type FormConfig } from "@4bits/formbuilder";
import type { PropsWithChildren } from "react";
import type { FieldPath, FieldValues } from "react-hook-form";
import { cn } from "../../../lib/utils";
import { FormAnatomy } from "./form-anatomy";

function FormFields<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: Omit<FormConfig<TFieldValues, TName>, "render">) {
	return <FF {...props} render={FormAnatomy} />;
}

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
