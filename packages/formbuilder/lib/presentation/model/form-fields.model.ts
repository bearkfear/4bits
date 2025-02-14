import { useEffect } from "react";
import { type FormStore, useFormStoreApi } from "../../use-form-store";
import type { FormConfig } from "../../domain/form-config";
import type { FieldValues } from "react-hook-form";

export function useFormFieldsModel<
	TFieldValues extends FieldValues = FieldValues,
>({ fields }: Pick<FormConfig<TFieldValues>, "fields">) {
	const storeApi = useFormStoreApi();

	useEffect(() => {
		const fieldsState = storeApi.getState();

		const fieldsNotInState = fields.filter(
			(fieldConfig) => !fieldsState[fieldConfig.name],
		);

		if (fieldsNotInState.length === 0) {
			return;
		}

		storeApi.setState(() => {
			return fieldsNotInState.reduce<FormStore>((acc, curr) => {
				acc[curr.name] = { active: true };

				return acc;
			}, {});
		});
	}, [storeApi, fields]);

	return {
		storeApi,
	};
}
