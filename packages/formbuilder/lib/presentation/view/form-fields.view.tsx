import { Controller, type FieldValues } from "react-hook-form";
import type {
	FormField,
	ValidateFieldResult,
} from "../../domain/entities/field.entity";
import type { FormConfig } from "../../domain/form-config";

export type FormFieldsViewProps<
	TFieldValues extends FieldValues = FieldValues,
> = Pick<FormConfig<TFieldValues>, "render"> & {
	control: any;
	validateField: (value: any, fieldConfig: FormField) => ValidateFieldResult;
	fieldConfig: any;
	onChangeField: any;
};

export function FormFieldsView({
	fieldConfig,
	control,
	validateField,
	render: RenderItem,
	onChangeField,
}: FormFieldsViewProps) {
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
