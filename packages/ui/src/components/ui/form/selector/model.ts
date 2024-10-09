import type { HTMLProps, ReactNode } from "react";

export type DefaultHTMLSelectInput = Omit<
	HTMLProps<HTMLSelectElement>,
	"prefix" | "value" | "onChange"
>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type TOption = Record<string, any>;

export type SelectorMessages = {
	empty: ReactNode;
	searchPlaceholder: string;
	optionSelected: ReactNode;
	optionUnselected: ReactNode;
};

export interface SelectorCommonProps extends DefaultHTMLSelectInput {
	disabled?: boolean;
	searchable?: boolean;
	extraActions?: React.ReactNode;
	hideFooter?: boolean;
	messages: Pick<SelectorMessages, "empty" | "searchPlaceholder">;
}
