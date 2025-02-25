// Others exports for who is going to use the library
export { cn } from "./lib/utils";
export { AlertDialog } from "./elements/alert-dialog";
export { Button, buttonVariants } from "./elements/button";
export type { ButtonProps } from "./elements/button";
export { Command } from "./elements/command";
export { Loader } from "./elements/loader";
export type { LoaderProps } from "./elements/loader";
export { PageLoader } from "./elements/page-loader";
export { Popover } from "./elements/popover";
export { Toaster, toast } from "./elements/toaster";
export { Tooltip } from "./elements/tooltip";
export { Separator } from "./elements/separator";
export { Dialog } from "./elements/dialog";
export { Dropdown } from "./elements/dropdown";
export { Stepper } from "./elements/stepper";
export { Tabs } from "./elements/tabs";
export { Card } from "./elements/card";
export { Table } from "./elements/table";
export { Tag } from "./elements/tag";
export { Avatar } from "./elements/avatar";
export { Breadcrumb } from "./elements/breadcrumb";
export { Panel } from "./elements/panel";

export { Pagination } from "./elements/pagination";
export {
	CEP_MASK,
	CNPJ_MASK,
	CPF_CNPJ_MASK,
	CPF_MASK,
	PHONE_MASK,
} from "./lib/mask/common-masks";

/**
 * forms exports
 */
export { Checkbox } from "./elements/form/types/selectors/checkbox";
export { HelperText } from "./elements/form/item/helper-text";
export type { HelperTextProps } from "./elements/form/item/helper-text";
export { Input, inputVariants } from "./elements/form/types/inputs/input";
export { Switch } from "./elements/form/types/selectors/switch";
export type { InputProps } from "./elements/form/types/inputs/input";
export { Label } from "./elements/form/item/label";

export { Textarea } from "./elements/form/types/inputs/textarea";
export type { TextareaProps } from "./elements/form/types/inputs/textarea";
export {
	MultiSelector,
	SingleSelector,
} from "./elements/form/types/selectors/selector";
export type {
	MultiSelectorProps,
	SingleSelectorProps,
} from "./elements/form/types/selectors/selector";

/**
 * builders exports
 */
export {
	TableBuilder,
	TableBuilderActionButton,
	TableBuilderActionButtonVariants,
} from "./builders/table-builder";

export type { TableBuilderProps } from "./builders/table-builder/types";

export { FormBuilder } from "./builders/form-builder";

/**
 * tailwindcss preset exports
 */
export { tailwindcssPreset } from "./tailwindcss-preset";
