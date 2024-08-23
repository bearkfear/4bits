import type { ButtonProps } from "../button";
import type { ReactNode } from "react";

/** colunas */
export type Column = {
	title: string;
	id: string;
	sortable?: boolean;
	className?: string;
	width?: number;
};

export type Columns = readonly Column[];

/** linhas */
export type Row<C extends Columns> = {
	[K in C[number]["id"]]: string | number | ReactNode;
} & {
	key: string | number;
};

export type Rows<C extends Columns> = Row<C>[];

/** sortable */
export type SortableType = {
	sortable?: {
		sortBy: string;
		sortDirection: string;
	};
};

export type CommonPropsBodyHeader<C extends Columns> = Actions<C> &
	ReorderType<C> &
	SelectorRows<C> & {
		columns: C;
	};

/** toolbar */
type ToolbarActionParams<C extends Columns> = {
	rows: Rows<C>;
	rowsChecked: Rows<C>;
	setRowsChecked: (rows: Rows<C>) => void;
};

export type ToolbarActions<C extends Columns> = {
	toolBar?: {
		searchable?: boolean;
		controlStatus?: {
			disabled?: boolean;
			default: string | number;
			options: { label: string; value: string | number }[];
		};
		extraActions?: ((params: ToolbarActionParams<C>) => ReactNode)[];
	};
};

/** table */
export type TableBuilderProps<C extends Columns> = ToolbarActions<C> &
	SortableType &
	SelectorRows<C> &
	ReorderType<C> & {
		columns: C;
		rows: Rows<C>;
		actions?: Action<C>[];
		title?: string | ReactNode;
	};

/** action */
export type Action<C extends Columns> =
	| {
			label: string;
			icon?: React.ReactNode;
			action: (value: Row<C>) => void;
	  }
	| ((props: Row<C>) => ReactNode);

export type Actions<C extends Columns> = {
	actions?: Action<C>[];
};
// typagem da opção de seleção de linhas
type SelectorRowsParams<C extends Columns> = {
	rowsChecked: Rows<C>;
	setRowsChecked: (rows: Rows<C>) => void;
};

export type SelectorRows<C extends Columns> = {
	selectable?: {
		title: string;
		onClick: (params: SelectorRowsParams<C>) => void;
		variant?: ButtonProps["variant"];
		size?: ButtonProps["size"];
	};
};

export type ReoderParams<C extends Columns> = {
	rows: Rows<C>;
	from: number;
	to: number;
};

export type ReorderType<C extends Columns> = {
	reorder?: (params: ReoderParams<C>) => void;
};
