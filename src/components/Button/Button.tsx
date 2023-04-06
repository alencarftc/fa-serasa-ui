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
	/**
	 * Callback handler for click events
	 */
	onClick?: () => void;
}

/**
 * Component for showing a button.
 */
const Button = ({ type, onClick, disabled = false }: SubmitButtonProps) => (
	<button
		data-testid="button"
		className={classes.button}
		type={type}
		onClick={onClick}
		disabled={disabled}
	>
		Enviar avaliação
	</button>
);

export default Button;
