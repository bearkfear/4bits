import type { Meta } from "@storybook/react";
import { Tooltip } from "../index";

export default {
	title: "Tooltip",
	component: Tooltip.Root,
} satisfies Meta<typeof Tooltip.Root>;

export const Default = () => {
	return (
		<Tooltip.Provider skipDelayDuration={0} delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<span className="dark:text-white text-black">
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
