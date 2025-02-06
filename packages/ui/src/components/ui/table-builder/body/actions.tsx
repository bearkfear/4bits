"use client";

import { Fragment, useState, type ReactNode } from "react";
import { LuMoreHorizontal } from "react-icons/lu";
import { Button } from "../../button";
import { Dropdown } from "../../dropdown";
import type { Action, Columns, Row } from "../types";
import { TableBuilderActionButton } from "./action-button";

type ActionsProps<C extends Columns> = {
  actions: Action<C>[];
  row: Row<C>;
};

export function Actions<C extends Columns>(props: ActionsProps<C>) {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <Dropdown.Trigger asChild>
        <Button
          className="p-2 rounded-sm hover:bg-gray-3 dark:hover:bg-graydark-3"
          variant="link"
          size="icon"
        >
          <LuMoreHorizontal size={18} />
        </Button>
      </Dropdown.Trigger>
      <ActionContent {...props} close={() => setOpen(false)} />
    </Dropdown.Root>
  );
}

function ActionContent<C extends Columns>({
  actions,
  row,
  close,
}: ActionsProps<C> & { close: () => void }) {
  return (
    <Dropdown.Content
      className="w-[150px] m-0 p-1 space-y-1"
      side="left"
      align="start"
    >
      <Dropdown.Label className="flex space-x-3 items-center pb-0">
        <span>Ações</span>
      </Dropdown.Label>
      <Dropdown.Separator />
      {actions.map((action, index) => {
        let ActionOption: ReactNode = <Fragment />;

        if (typeof action === "function") {
          ActionOption = action(row, close);
        } else {
          ActionOption = (
            <TableBuilderActionButton
              variant={action.variant}
              icon={action.icon}
              label={action.label}
              onClick={() => {
                action.action(row, close);
              }}
            />
          );
        }
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Fragment key={index}>{ActionOption}</Fragment>
        );
      })}
    </Dropdown.Content>
  );
}
