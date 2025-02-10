"use client";
import { cva } from "class-variance-authority";
import * as React from "react";
import { type DropzoneOptions, useDropzone } from "react-dropzone";
import { cn } from "../../lib/utils";
import { inputVariants } from "./input";

const inputFileVariants = cva(inputVariants(), {
	variants: {
		border: {
			default: "",
			dashed: "border-dashed",
			dash_active: "border-dashed border-blue-7 dark:border-bluedark-7",
		},
		focus: {
			active: "ring-offset-2 ring-2 ring-blue-7 dark:ring-bluedark-7",
			inactive: "",
		},
	},
	defaultVariants: {
		border: "default",
	},
});

export type ValuePresentationProps = {
	value?: File | File[];
};

function ValuePresentation({ value }: ValuePresentationProps) {
	if (!value) return null;

	if (Array.isArray(value)) {
		return (
			<>
				{value.map((file, k) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<span key={k}>{file.name}</span>
				))}
			</>
		);
	}

	return <span>{value.name}</span>;
}

export type InputFileProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"type" | "onChange" | "value"
> &
	Pick<DropzoneOptions, "accept" | "multiple"> & {
		onChange(newFiles?: File[] | File): void;
		value?: File[] | File;
	};

const InputFile = React.forwardRef(
	(
		{
			className,
			style,
			accept,
			multiple = false,
			disabled,
			onChange,
			value,
			...props
		}: InputFileProps,
		ref: React.ForwardedRef<HTMLInputElement>,
	) => {
		const dropzone = useDropzone({
			multiple,
			disabled,
			accept,
			onDropAccepted(files: File[]) {
				if (multiple) {
					onChange(files);
					return;
				}

				onChange(files.at(0));
			},
		});

		const hasValue = React.useMemo(() => {
			if (value && Array.isArray(value) && value.length > 0) return true;

			if (value && Array.isArray(value) === false) return true;

			return false;
		}, [value]);

		const isPlaceholderVisible = dropzone.isDragAccept === false && !hasValue;

		const isValueVisible = dropzone.isDragAccept === false && hasValue;

		return (
			<div
				className={cn(
					inputFileVariants({
						border: dropzone.isDragActive ? "dash_active" : "dashed",
						focus:
							dropzone.isFocused || dropzone.isFileDialogActive
								? "active"
								: "inactive",
					}),
					className,
				)}
				style={style}
				{...dropzone.getRootProps()}
				tabIndex={disabled ? -1 : 1}
			>
				<input {...props} type="file" ref={ref} {...dropzone.getInputProps()} />
				{dropzone.isDragActive && (
					<span>Solte {multiple ? "os arquivos" : "o arquivo"}</span>
				)}
				{isPlaceholderVisible && (
					<span className="text-gray-11 dark:text-graydark-11">
						{props.placeholder}
					</span>
				)}
				{isValueVisible && <ValuePresentation value={value} />}
			</div>
		);
	},
);

InputFile.displayName = "InputFile";

export { InputFile };
