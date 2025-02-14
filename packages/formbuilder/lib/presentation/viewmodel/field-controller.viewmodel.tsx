import type { FieldPath, FieldValues } from "react-hook-form";
import { useFieldControllerModel } from "../model/field-controller.model";
import { FieldControllerView } from "../view/field-controller.view";
import type { FormConfig } from "../../domain/form-config";
import {
	validateField,
	type FormField,
} from "../../domain/entities/field.entity";
import type { Store } from "../../use-form-store";

export type FieldControllerProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<FormConfig<TFieldValues>, "fields"> & {
	fieldConfig: FormField<TFieldValues, TName>;
	storeApi: Store;
};

function FieldControllerViewModel<
	TFieldValues extends FieldValues = FieldValues,
>({
	fieldConfig,
	requiredFields = {},
	control,
	onChangeField,
	render: RenderItem,
	storeApi,
}: FieldControllerProps<TFieldValues>) {
	const { fieldState } = useFieldControllerModel({
		fieldConfig,
		requiredFields,
		storeApi,
	});

	if (!fieldState || fieldState.active === false) return null;
	return (
		<FieldControllerView
			RenderItem={RenderItem}
			control={control}
			fieldConfig={fieldConfig}
			onChangeField={onChangeField}
			validateField={validateField}
		/>
	);
}

export const FieldController = FieldControllerViewModel;
