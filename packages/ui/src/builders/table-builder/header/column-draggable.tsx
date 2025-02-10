"use client";

import { LuUnfoldVertical } from "react-icons/lu";
import { Table } from "../../../elements/table";

export function ColumnDraggable() {
  return (
    <Table.Head className="w-12">
      <div className="flex justify-center ">
        <LuUnfoldVertical />
      </div>
    </Table.Head>
  );
}
