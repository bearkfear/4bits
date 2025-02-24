"use client";
import * as React from "react";
import { mergeRefs } from "react-merge-refs";

import { cn } from "../../../../lib/utils";
import type { Tokens } from "../../../../lib/mask/tokens";
import { useMasker } from "../../../../hooks/use-masker";
import { variants } from "../selectors/selector/styles";

export const inputVariants = cn(variants);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	masks?: string[];
	tokens?: Tokens;
	onChange?: (newValue: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, type, masks = [], tokens, onChange = () => {}, ...props },
		ref,
	) => {
		const inputRef = React.useRef<HTMLInputElement>(null);

		const { handleOnChangeMasker } = useMasker(
			// @ts-ignore
			inputRef,
			masks,
			onChange,
			tokens,
		);

		return (
			<input
				{...props}
				type={type}
				className={cn(inputVariants, className)}
				ref={mergeRefs([ref, inputRef])}
				onChange={handleOnChangeMasker}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
