import type { Meta } from "@storybook/react";
import { Tooltip } from "../../index";

const { Provider, Trigger, Content } = Tooltip;

export default {
  title: "Elements/Tooltip",
  component: Tooltip.Root,

  subcomponents: { Provider, Trigger, Content },
} satisfies Meta<typeof Tooltip.Root>;

export const Default = () => {
  return (
    <Tooltip.Provider skipDelayDuration={0} delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <span className="dark:text-whitea-12 text-black">
            Elemento de exemplo
          </span>
        </Tooltip.Trigger>
        <Tooltip.Content>
          O que o Batman foi fazer na igreja? se Batzar...
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
