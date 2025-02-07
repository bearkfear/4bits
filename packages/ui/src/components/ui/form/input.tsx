"use client";
import { cva } from "class-variance-authority";
import * as React from "react";
import { mergeRefs } from "react-merge-refs";
import { useMasker } from "../../../components/hooks/use-masker";

import { cn } from "../../../lib/utils";
import type { Tokens } from "../../../lib/mask/tokens";

export const selectInputVariants = cva(
	"flex w-full rounded-md border border-gray-6 dark:border-graydark-6 bg-gray-1 dark:bg-graydark-1 px-3 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-11 dark:placeholder:text-graydark-11 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-7 dark:focus-visible:ring-bluedark-7 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-blacka-12  dark:text-whitea-12",
);

export const inputVariants = cva(cn(selectInputVariants(), "h-8 py-2"));

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	masks?: string[];
	tokens?: Tokens;
	onChange?: (newValue: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, type, masks = [], tokens, onChange = () => { }, ...props },
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
				className={cn(inputVariants(), className)}
				ref={mergeRefs([ref, inputRef])}
				onChange={handleOnChangeMasker}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
