import { Controller, type FieldPath, type FieldValues } from "react-hook-form";
import type { FormRenderProps } from "../../domain/form-render-props";
import type { FormConfig } from "../../domain/form-config";
import type { FormField } from "../../domain/entities/field.entity";

export type FieldControllerViewProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<FormConfig<TFieldValues>, "control" | "onChangeField"> & {
	RenderItem: (props: FormRenderProps<TFieldValues>) => React.ReactNode;
	validateField: any;
	fieldConfig: FormField<TFieldValues, TName>;
};

export function FieldControllerView<
	TFieldValues extends FieldValues = FieldValues,
>({
	fieldConfig,
	control,
	validateField,
	RenderItem,
	onChangeField,
}: FieldControllerViewProps<TFieldValues>) {
	return (
		<Controller
			key={fieldConfig.name}
			name={fieldConfig.name}
			control={control}
			rules={{ validate: (value) => validateField(value, fieldConfig) }}
			render={({ fieldState, field }) => (
				<RenderItem
					{...{ field, fieldState, fieldConfig, onChangeField, control }}
				/>
			)}
		/>
	);
}
