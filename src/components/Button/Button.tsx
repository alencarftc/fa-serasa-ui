import { PropsWithChildren } from '@interfaces/shared';
import classes from './Button.module.scss';

export interface SubmitButtonProps extends PropsWithChildren {
	/**
	 * Button type
	 */
	type?: 'submit' | 'button';
	/**
	 * Is button disabled?
	 */
	disabled?: boolean;
}
const Button = ({ type, disabled }: SubmitButtonProps) => {
	return (
		<button
			data-testid="button"
			className={classes.button}
			type={type}
			disabled={disabled}
		>
			Enviar avaliação
		</button>
	);
};

export default Button;
