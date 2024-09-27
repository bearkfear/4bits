"use client";
import type { ReactNode } from "react";
import type { Columns, Rows, SelectorRows, ToolbarActions } from "../types";
import { Tools } from "./tools";

export type ToolbarProps<C extends Columns> = ToolbarActions<C> &
	SelectorRows<C> & {
		title?: string | ReactNode;
		rows: Rows<C>;
		rowsChecked: Rows<C>;
		setRowsChecked: (rows: Rows<C>) => void;
	};

export function ToolBar<C extends Columns>(props: ToolbarProps<C>) {
	return (
		<div className="w-full flex items-end justify-between">
			{props.title}

			{(props.toolBar || props.selectable) && <Tools {...props} />}
		</div>
	);
}
