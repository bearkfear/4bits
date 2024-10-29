import type { ReactNode } from "react";
import type { Option } from "./option";

type Tokens = Record<
	string,
	{
		pattern?: RegExp;
		transform?: (value: string) => string;
		escape?: boolean;
	}
>;

export type FieldSettingsByType =
	| {
			type: "text";
			masks?: string | string[];
			tokens?: Tokens;
			maxLength?: number;
			suffix?: ReactNode;
			prefix?: ReactNode;
	  }
	| {
			type: "email" | "password" | "textarea" | "editor";
			autoComplete?: string;
	  }
	| {
			type: "checkbox" | "switch";
			valueLabels?: {
				true: string;
				false: string;
			};
	  }
	| {
			type: "money" | "color";
	  }
	| {
			type: "hyperlink";
			formatText?: "upperCase" | "lowerCase" | "capitalized";
	  }
	| {
			type: "datetime" | "time" | "date" | "month";
			dateNow?: boolean;
			min?: Date;
			max?: Date;
	  }
	| {
			type: "number";
			min?: number;
			max?: number;
	  }
	| {
			type: "select";
			searchable?: boolean;
			onSearch?: (search: string) => void;
			disableOption?: ((option: Option) => boolean) | Option["value"][];
			extraActions?: React.ReactNode;
			options?: Option[];
			loadingOptions?: boolean;
			pagination?: {
				selectedOption: Option;
				page: number;
				onChangePage: (page: number) => void;
				totalItems?: number;
			};
			onCloseSelect?: () => void;
	  }
	| {
			type: "multi-select";
			checkAll?: boolean;
			/**
			 * Define a quantidade maxima de linhas que podem aparecer, padrão é 3
			 */
			lines?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "noLimit";
			/**
			 * Define o estilo dos objetos selecionado, "selected" fica igual ao padrão do popover
			 */
			color?: "default" | "selected";
			searchable?: boolean;
			onSearch?: (search: string) => void;
			disableOption?: ((option: Option) => boolean) | Option["value"][];
			extraActions?: React.ReactNode;
			options?: Option[];
			loadingOptions?: boolean;
			pagination?: {
				selectedOptions: Option[];
				page: number;
				onChangePage: (page: number) => void;
				totalItems?: number;
			};
			onCloseSelect?: () => void;
	  }
	| {
			type: "radio";
			options?: Option[];
			position?: "vertical" | "horizontal";
	  }
	| {
			type: "dynamic-checkbox";
			checklist?: boolean;
	  }
	| {
			type: "multi-checkbox";
			options?: Option[];
			checklist?: boolean;
			position?: "vertical" | "horizontal";
	  }
	| {
			type: "rate";
			max?: number;
	  }
	| {
			type: "file";
			multiple?: boolean;
	  };
