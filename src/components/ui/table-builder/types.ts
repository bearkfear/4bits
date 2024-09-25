import type { ReactNode } from "react";
import type { ButtonProps } from "../button";

/** colunas */
export type Column = {
	title: string;
	id: string;
	className?: string;
	width?: number;
};

export type Columns = readonly Column[];

/** linhas */
export type Row<C extends Columns> = {
	[K in C[number]["id"]]: string | number | ReactNode;
} & {
	key: string | number;
	classNameRow?: string;
	classNameCell?: { [K in C[number]["id"]]?: string };
};

export type Rows<C extends Columns> = Row<C>[];

export type ClassNameCol<C extends Columns> = {
	[K in C[number]["id"]]?: string;
};

/** sortable */
type ColumnTitles<C extends Columns> = C[number]["id"];

export type SortableParams = {
	sortBy: string;
	sortDirection: string;
};

export type SortableType<C extends Columns> = {
	sortable?: SortableParams & {
		cols: ColumnTitles<C>[];
		onSort: (params: SortableParams) => void;
	};
};

export type CommonPropsBodyHeader<C extends Columns> = Actions<C> &
	DraggableType<C> &
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
		searchable?: {
			onSearch: (value: string) => void;
			search: string;
		};
		controlStatus?: {
			disabled?: boolean;
			status: string | number;
			options: { label: string; value: string | number }[];
			onChange: (value: string | number) => void;
		};
		extraActions?: ((params: ToolbarActionParams<C>) => ReactNode)[];
	};
};

/** table */
export type TableBuilderProps<C extends Columns> = ToolbarActions<C> &
	SortableType<C> &
	SelectorRows<C> &
	DraggableType<C> & {
		columns: C;
		rows: Rows<C>;
		actions?: Action<C>[];
		title?: string | ReactNode;
		classNameCol?: ClassNameCol<C>;
	};

/** action */
export type Action<C extends Columns> =
	| {
			label: string;
			icon?: React.ReactNode;
			disabled?: boolean;
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

export type DraggableParams<C extends Columns> = {
	rows: Rows<C>;
	from: number;
	to: number;
};

export type DraggableType<C extends Columns> = {
	draggable?: (params: DraggableParams<C>) => void;
};
