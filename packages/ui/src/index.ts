// Others exports for who is going to use the library
export { cn } from "./lib/utils";
export { AlertDialog } from "./components/ui/alert-dialog";
export { Button, buttonVariants } from "./components/ui/button";
export type { ButtonProps } from "./components/ui/button";
export { Command } from "./components/ui/command";
export { Loader } from "./components/ui/loader";
export type { LoaderProps } from "./components/ui/loader";
export { PageLoader } from "./components/ui/page-loader";
export { Popover } from "./components/ui/popover";
export { Toaster, toast } from "./components/ui/toaster";
export { Tooltip } from "./components/ui/tooltip";
export { Separator } from "./components/ui/separator";
export { Dialog } from "./components/ui/dialog";
export { Dropdown } from "./components/ui/dropdown";
export { Stepper } from "./components/ui/stepper";
export { Tabs } from "./components/ui/tabs";
export { Card } from "./components/ui/card";
export { Table } from "./components/ui/table";
export { TableBuilder } from "./components/ui/table-builder/table";
export type { TableBuilderProps } from "./components/ui/table-builder/types";
export { Pagination } from "./components/ui/pagination";
export {
	CEP_MASK,
	CNPJ_MASK,
	CPF_CNPJ_MASK,
	CPF_MASK,
	PHONE_MASK,
} from "./lib/mask/common-masks";

// export forms

export { Checkbox } from "./components/ui/form/checkbox";
export { FormBuilder } from "./components/ui/form/builder";
export { HelperText } from "./components/ui/form/helper-text";
export type { HelperTextProps } from "./components/ui/form/helper-text";
export { Input, inputVariants } from "./components/ui/form/input";
export { Switch } from "./components/ui/form/switch";
export type { InputProps } from "./components/ui/form/input";
export { Label } from "./components/ui/form/label";
export { Textarea } from "./components/ui/form/textarea";
export type { TextareaProps } from "./components/ui/form/textarea";
export { MultiSelector, SingleSelector } from "./components/ui/form/selector";
export type {
	MultiSelectorProps,
	SingleSelectorProps,
} from "./components/ui/form/selector";

export { tailwindcssPreset } from "./tailwindcss-preset";
