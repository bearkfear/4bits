import type { HTMLProps } from "react";

export type DefaultHTMLSelectInput = Omit<
	HTMLProps<HTMLSelectElement>,
	"prefix" | "value" | "onChange"
>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type TOption = Record<string, any>;

export interface SelectorCommonProps extends DefaultHTMLSelectInput {
	disabled?: boolean;
	searchable?: boolean;
	extraActions?: React.ReactNode;
	hideFooter?: boolean;
}
