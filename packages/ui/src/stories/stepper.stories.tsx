import type { Meta } from "@storybook/react";
import { Stepper } from "..";

export default {
	title: "Stepper",
	component: Stepper,
} satisfies Meta<typeof Stepper>;

export const Default = () => {
	return (
		<Stepper
			className="flex justify-center"
			currentStepIndex={1}
			direction="vertical"
			enumerate={false}
			steps={[
				{ label: "Atividade" },
				{ label: "Formulário" },
				{ label: "Documentos" },
				{ label: "Finalizar" },
			]}
		/>
	);
};
