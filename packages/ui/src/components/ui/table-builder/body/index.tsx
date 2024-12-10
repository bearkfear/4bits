"use client";
import { SortableContext } from "@dnd-kit/sortable";
import { Table } from "../../table";
import type {
  ClassNameCol,
  Columns,
  CommonPropsBodyHeader,
  Row,
  Rows,
} from "../types";
import { RowDraggable } from "./row-draggable";
import { RowEmpty } from "./row-empty";

export type BodyProps<C extends Columns> = CommonPropsBodyHeader<C> & {
  rows: Rows<C>;
  rowsChecked: Rows<C>;
  colsQuantity: number;
  classNameCol?: ClassNameCol<C>;
  checkRow: (row: Row<C>) => void;
};

export function Body<C extends Columns>(props: BodyProps<C>) {
  const { rows, rowsChecked, colsQuantity } = props;

  const rowIsChecked = (row: Row<C>) =>
    rowsChecked.some((rowChecked) => rowChecked.key === row.key);

  return (
    <Table.Body>
      {/** adiciona a linha de tabela com conteúdo vázio */}
      {rows.length === 0 && <RowEmpty colsQuantity={colsQuantity} />}

      {/** adiciona as linhas normais */}
      {rows.length > 0 && (
        <SortableContext items={rows.map((row) => row.key)}>
          {rows.map((row) => (
            <RowDraggable
              key={row.key}
              {...props}
              row={row}
              rowIsChecked={rowIsChecked(row)}
            />
          ))}
        </SortableContext>
      )}
    </Table.Body>
  );
}
