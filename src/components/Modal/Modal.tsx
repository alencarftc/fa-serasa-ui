import Text from '@components/Text';
import { StyleHelper } from '@helpers/sass';

import classes from './Modal.module.scss';
import { PropsWithChildren, PropsWithClassName } from '@interfaces/shared';

type ModalProps = PropsWithChildren & PropsWithClassName;

/**
 * Component for showing a floating text.
 */
const Modal = ({ children, className }: ModalProps) => (
	<div
		data-testid="modal"
		className={StyleHelper.classnames(
			classes.modal,
			className ? className : ''
		)}
	>
		<Text>{children}</Text>
	</div>
);

export default Modal;
