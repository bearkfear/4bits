import { cn } from "~/lib/utils";
import { Button } from "../button";
import * as Popover from "../popover";
import * as Command from "../command";
import { Check, ChevronsUpDown } from "lucide-react";
import { useCallback, useMemo, type HTMLProps } from "react";
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
  onChange?(value?: TV): void;
}

export type SelectorContentProps<
  O extends TOption,
  VP extends FieldPath<O>,
> = Pick<
  SelectorProps<O, VP>,
  "options" | "value" | "labelPath" | "searchable" | "valuePath" | "onChange"
>;

export function SelectorContent<
  Option extends TOption,
  VP extends FieldPath<Option>,
>(props: SelectorContentProps<Option, VP>) {
  const onSelect = useCallback(
    (option: Option) => {
      if (!props.onChange) return;

      const optionValue = get(option, props.valuePath);

      props.onChange(
        isEqual(optionValue, props.value) ? undefined : optionValue
      );
    },
    [props.onChange, props.valuePath, props.value]
  );

  return (
    <Popover.Content className="w-[200px] p-0" align="start">
      <Command.Root>
        {props.searchable && (
          <Command.Input className="text-xs" placeholder="Search" />
        )}

        <Command.List>
          <Command.Empty>No language found.</Command.Empty>
          <Command.Group>
            {props.options.map((option) => {
              const optionLabel = get(option, props.labelPath);
              const optionValue = get(option, props.valuePath);

              return (
                <Command.Item
                  value={optionValue}
                  key={optionValue}
                  className="text-xs"
                  onSelect={() => onSelect(option)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      isEqual(optionValue, props.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {optionLabel}
                </Command.Item>
              );
            })}
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
  const getValue = useCallback(
    (option: O) => {
      return get(option, props.valuePath);
    },
    [props.valuePath]
  );
  const getLabel = useCallback(
    (option: O) => {
      return get(option, props.labelPath);
    },
    [props.labelPath]
  );

  const selectedOption = useMemo(() => {
    return props.options.find((option) => isEqual(getValue(option), value));
  }, [props.options, value, getValue]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="default"
          role="combobox"
          className={cn(
            "w-[200px] justify-between",
            !selectedOption && "text-muted-foreground"
          )}
        >
          <span>
            {selectedOption ? getLabel(selectedOption) : props.placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </Popover.Trigger>
      <SelectorContent
        labelPath={props.labelPath}
        options={props.options}
        value={value}
        valuePath={props.valuePath}
        onChange={onChange}
        searchable={props.searchable}
      />
    </Popover.Root>
  );
}
