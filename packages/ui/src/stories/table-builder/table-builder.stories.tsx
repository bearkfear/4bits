import type { Meta } from "@storybook/react";
import { useState } from "react";
import { LuFileEdit, LuTrash } from "react-icons/lu";
import { Button, TableBuilder } from "../../index";
import { TableBuilderActionButton } from "src/components/ui/table-builder/body/action-button";

const meta = {
  title: "Table-builder/Table",
  component: TableBuilder,
} satisfies Meta<typeof TableBuilder>;

export default meta;

export const Basic = () => {
  return (
    <TableBuilder
      columns={
        [
          { id: "name", title: "Name" },
          { id: "age", title: "Age" },
          { id: "sex", title: "Sex", position: "end" },
        ] as const
      }
      rows={[
        {
          key: 1,
          name: "John Doe",
          age: 30,
          sex: "Man",
        },
        { key: 2, name: "Jane Doe", age: 20, sex: "Woman" },
        { key: 3, name: "Alice Smith", age: 25, sex: "Woman" },
        { key: 4, name: "Bob Johnson", age: 40, sex: "Man" },
        { key: 5, name: "Charlie Brown", age: 35, sex: "Man" },
      ]}
      classNameCol={{
        sex: "flex items-center justify-end",
      }}
      sortable={{
        sortBy: "name",
        sortDirection: "ASC",
        cols: ["name", "age"],
        onSort: (params) => {
          alert(`Sort by: ${params.sortBy}, ${params.sortDirection}`);
        },
      }}
      hideFooter
    />
  );
};

export const Toolbar = () => {
  return (
    <TableBuilder
      title={<span className="text-gray-11 py-1">Table with toolbar</span>}
      toolBar={{
        controlStatus: [
          {
            status: "all",
            options: [
              { label: "All", value: "all" },
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ],
            onChange: (value) => alert(`Status: ${value}`),
          },
          {
            status: "all",
            options: [
              { label: "All", value: "all" },
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ],
            onChange: (value) => alert(`Status: ${value}`),
          },
        ],
        searchable: {
          onSearch: (value) => alert(`Search: ${value}`),
          search: "",
        },
        extraActions: [
          ({ rows }) => (
            <Button
              variant="outline"
              onClick={() => alert(`Rows: ${rows.length}`)}
            >
              Show quantity rows
            </Button>
          ),
        ],
      }}
      columns={
        [
          { id: "name", title: "Name" },
          { id: "age", title: "Age" },
          { id: "sex", title: "Sex" },
        ] as const
      }
      rows={[
        { key: 1, name: "John Doe", age: 30, sex: "Man" },
        { key: 2, name: "Jane Doe", age: 20, sex: "Woman" },
        { key: 3, name: "Alice Smith", age: 25, sex: "Woman" },
        { key: 4, name: "Bob Johnson", age: 40, sex: "Man" },
        { key: 5, name: "Charlie Brown", age: 35, sex: "Man" },
      ]}
    />
  );
};

export const Actions = () => {
  return (
    <TableBuilder
      title={<span className="text-gray-11 py-1">Table with actions</span>}
      columns={
        [
          { id: "name", title: "Name" },
          { id: "age", title: "Age" },
          { id: "sex", title: "Sex" },
        ] as const
      }
      rows={[
        { key: 1, name: "John Doe", age: 30, sex: "Man" },
        { key: 2, name: "Jane Doe", age: 20, sex: "Woman" },
        { key: 3, name: "Alice Smith", age: 25, sex: "Woman" },
        { key: 4, name: "Bob Johnson", age: 40, sex: "Man" },
        { key: 5, name: "Charlie Brown", age: 35, sex: "Man" },
      ]}
      actions={[
        {
          label: "Edit",
          icon: <LuFileEdit />,
          action: (row) => {
            alert(`Edit: ${row.name}`);
          },
        },
        {
          label: "Info",
          variant: "info",
          action: (row) => {
            alert(`Delete: ${row.name}`);
          },
        },
        {
          label: "Save",
          variant: "success",
          action: (row) => {
            alert(`Delete: ${row.name}`);
          },
        },
        (_, close) => (
          <TableBuilderActionButton
            label="remover"
            variant="danger"
            onClick={close}
          />
        ),
      ]}
    />
  );
};

export const Draggable = () => {
  const [rows, setRows] = useState([
    { key: 1, name: "John Doe", age: 30, sex: "Man" },
    { key: 2, name: "Jane Doe", age: 20, sex: "Woman" },
    { key: 3, name: "Alice Smith", age: 25, sex: "Woman" },
    { key: 4, name: "Bob Johnson", age: 40, sex: "Man" },
    { key: 5, name: "Charlie Brown", age: 35, sex: "Man" },
  ]);

  return (
    <TableBuilder
      title={<span className="text-gray-11 py-1">Table draggable</span>}
      columns={
        [
          { id: "name", title: "Name" },
          { id: "age", title: "Age" },
          { id: "sex", title: "Sex" },
        ] as const
      }
      rows={rows}
      draggable={({ rows }) => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        setRows(rows as any);
      }}
    />
  );
};

export const Selectable = () => {
  return (
    <TableBuilder
      title={
        <span className="text-gray-11 py-1">Table with selectable rows</span>
      }
      columns={
        [
          { id: "name", title: "Name" },
          { id: "age", title: "Age" },
          { id: "sex", title: "Sex" },
        ] as const
      }
      rows={[
        { key: 1, name: "John Doe", age: 30, sex: "Man" },
        { key: 2, name: "Jane Doe", age: 20, sex: "Woman" },
        { key: 3, name: "Alice Smith", age: 25, sex: "Woman" },
        { key: 4, name: "Bob Johnson", age: 40, sex: "Man" },
        { key: 5, name: "Charlie Brown", age: 35, sex: "Man" },
      ]}
      selectable={{
        onClick: ({ rowsChecked }) => {
          alert(`Rows checked: ${rowsChecked.length}`);
        },
        title: "Remove selected",
        variant: "danger__light",
        size: "sm",
      }}
    />
  );
};
