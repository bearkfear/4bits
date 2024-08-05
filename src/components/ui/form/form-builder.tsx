import {
  FormFields as FF,
  type FormRenderProps,
  type FormConfig,
} from "@continha/formbuilder";
import { Label } from "./label";

function FormItem(props: FormRenderProps) {
  return (
    <div>
      <Label required={props.fieldConfig.required}>
        {props.fieldConfig.label}
      </Label>
    </div>
  );
}

export const FormFields = (props: FormConfig) => {
  return (
    <FF
      {...props}
      render={(formRenderProps) => <FormItem {...formRenderProps} />}
    />
  );
};
