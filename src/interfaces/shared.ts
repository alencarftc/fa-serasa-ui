import { ReactNode } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export type FontProps = PropsWithClassName & {
	/**
	 * The font weight value.
	 */
	fw?: 'normal' | 'bold';
};

export type PropsWithClassName = {
	/**
	 * Optional className.
	 */
	className?: string;
};

export type PropsWithChildren = {
	/**
	 * The inner HTML content.
	 */
	children: ReactNode;
};
export type PropsWithCallbacks<T, K> = {
	/**
	 * On change callback handler.
	 */
	onChange: (value: T) => K;
};

export type PropsWithOnChange = Pick<
	PropsWithCallbacks<string, void>,
	'onChange'
>;
export type CommonTextProps = FontProps & PropsWithChildren;

export type ReactHookFormInputProps = {
	/**
	 * Reference for controlling inputs.
	 */
	register?: UseFormRegisterReturn;
	/**
	 * Error validations.
	 */
	errors?: FieldError | undefined;
};
export type CommonInputProps = ReactHookFormInputProps & {
	/**
	 * Field identifier.
	 */
	name: string;
	/**
	 * The correspondent label.
	 */
	label?: string;
	/**
	 * Base helper text.
	 */
	placeholder?: string;
};
