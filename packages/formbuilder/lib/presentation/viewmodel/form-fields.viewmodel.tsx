import type { FieldValues } from "react-hook-form";
import type { FormConfig } from "../../domain/form-config";
import { useFormFieldsModel } from "../model/form-fields.model";
import { FieldController } from "./field-controller.viewmodel";

export function FormFields<TFieldValues extends FieldValues = FieldValues>({
	fields,
	...props
}: FormConfig<TFieldValues>) {
	const { storeApi } = useFormFieldsModel({ fields });
	return (
		<>
			{fields.map((fieldConfig) => (
				<FieldController
					{...props}
					key={fieldConfig.name}
					fieldConfig={fieldConfig}
					storeApi={storeApi}
				/>
			))}
		</>
	);
}
