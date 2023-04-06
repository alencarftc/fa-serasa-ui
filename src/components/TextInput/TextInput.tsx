import { CommonInputProps, ReactHookFormInputProps } from '@interfaces/shared';

import classes from './TextInput.module.scss';
import Text from '@components/Text';

export type TextInputProps = CommonInputProps &
	ReactHookFormInputProps & {
		as?: 'text' | 'textarea';
	};

const TextInput = ({
	label,
	name,
	placeholder,
	as = 'text',
	register,
	errors,
}: TextInputProps) => {
	const inputElement =
		as === 'text' ? (
			<input
				data-testid="input"
				type="text"
				name={name}
				placeholder={placeholder}
				className={classes.field__input}
				{...register}
			/>
		) : (
			<textarea
				data-testid="textarea"
				className={classes.field__textarea}
				name={name}
				placeholder={placeholder}
				{...register}
			/>
		);

	return (
		<div className={classes.field}>
			<label className={classes.field__label} htmlFor={name}>
				{label}
			</label>
			{inputElement}
			<Text variant="error" hidden={!errors?.message}>
				{errors ? errors.message : ''}
			</Text>
		</div>
	);
};

export default TextInput;
