import { cn } from "~/lib/utils";
import { Button } from "../button";
import * as Popover from "../popover";
import * as Command from "../command";
import { Check, ChevronsUpDown } from "lucide-react";
import type { HTMLProps } from "react";
import type { FieldPath } from "react-hook-form";
import get from "lodash.get";
import isEqual from "lodash.isequal";

export type DefaultHTMLSelectInput = Omit<
  HTMLProps<HTMLSelectElement>,
  "prefix" | "value" | "onChange"
>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TOption = Record<string, any>;

export interface SelectorCommonProps extends DefaultHTMLSelectInput {
  disabled?: boolean;
  searchable?: boolean;
  extraActions?: React.ReactNode;
  hideFooter?: boolean;
}

export interface SelectorProps<
  O extends TOption,
  VP extends FieldPath<O>,
  TV = O[VP],
> extends SelectorCommonProps {
  options: O[];
  labelPath: FieldPath<O>;
  valuePath: VP;
  value: TV;
  onChange?(value: TV): void;
}

export function SelectorContent<O extends TOption, VP extends FieldPath<O>>(
  props: Pick<
    SelectorProps<O, VP>,
    "options" | "value" | "labelPath" | "searchable" | "valuePath" | "onChange"
  >
) {
  return (
    <Popover.Content className="w-[200px] p-0" align="start">
      <Command.Root>
        <Command.Input placeholder="Search language..." />
        <Command.List>
          <Command.Empty>No language found.</Command.Empty>
          <Command.Group>
            {props.options.map((option) => (
              <Command.Item
                value={get(option, props.valuePath)}
                key={get(option, props.valuePath)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    isEqual(get(option, props.valuePath), props.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {get(option, props.labelPath)}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Root>
      <Popover.Arrow className="fill-gray-6 dark:fill-graydark-6" />
    </Popover.Content>
  );
}

export function Selector<O extends TOption, VP extends FieldPath<O>>(
  { extraActions, onChange = () => {}, value, ...props }: SelectorProps<O, VP>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant="default"
          role="combobox"
          className={cn(
            "w-[200px] justify-between",
            !value && "text-muted-foreground"
          )}
        >
          {value}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </Popover.Trigger>
      <SelectorContent
        labelPath={props.labelPath}
        options={props.options}
        value={value}
        valuePath={props.valuePath}
      />
    </Popover.Root>
  );
}
