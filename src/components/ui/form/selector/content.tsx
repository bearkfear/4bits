import type { SelectorCommonProps, TOption } from "./model";
import * as Popover from "../../popover";
import * as Command from "../../command";
import { Check } from "lucide-react";
import { cn } from "~/lib/utils";

type SelectorContentProps<Option> = {
  onSelect(option?: Option): void;
  getValue<T>(option: Option): T;
  getLabel<T>(option: Option): T;
  getIsSelect(option: Option): boolean;
  options: Option[];
} & Pick<SelectorCommonProps, "searchable">;

export function SelectorContent<Option extends TOption>(
  props: SelectorContentProps<Option>
) {
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
              const optionValue = props.getValue(option);

              return (
                <Command.Item
                  value={String(optionValue)}
                  key={String(optionValue)}
                  className="text-xs"
                  onSelect={() => props.onSelect(option)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      props.getIsSelect(option) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {props.getLabel(option)}
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
