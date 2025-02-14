import { useEffect } from "react";
import type { Store } from "../../use-form-store";
import type { FormField } from "../../domain/entities/field.entity";
import type { FormConfig } from "../../domain/form-config";
import type { FieldPath, FieldValues } from "react-hook-form";
import { validateRules } from "../../domain/entities/rule.entity";

export type UseFieldControllerArgs<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<FormConfig<TFieldValues>, "requiredFields"> & {
	fieldConfig: FormField<TFieldValues, TName>;
	storeApi: Store;
};

export function useFieldControllerModel<
	TFieldValues extends FieldValues = FieldValues,
>({
	fieldConfig,
	requiredFields = {},
	storeApi,
}: UseFieldControllerArgs<TFieldValues>) {
	useEffect(() => {
		const state = storeApi.getState();

		if (!state[fieldConfig.name]) {
			return;
		}

		const isActive =
			!fieldConfig.hidden && validateRules(fieldConfig, requiredFields, state);

		if (state[fieldConfig.name].active === isActive) {
			return;
		}
		storeApi.setState(() => {
			return {
				[fieldConfig.name]: { active: isActive },
			};
		});
	}, [fieldConfig, requiredFields, storeApi]);

	const fieldState = storeApi((selector) => selector[fieldConfig.name]);

	return { fieldState };
}
