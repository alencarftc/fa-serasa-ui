import Modal from '@components/Modal/Modal';
import LoadingIcon from '@components/LoadingIcon/LoadingIcon';
import { MODAL } from '@configs/content/pt-br/Modal';
import { ReactNode } from 'react';

import classes from './FeedbackModal.module.scss';
import { StyleHelper } from '@helpers/sass';

export type ModalConfigType = 'default' | 'loading' | 'success' | 'error';

export interface ModalConfig {
	/**
	 * Modal config variant ID
	 */
	id: ModalConfigType;
	/**
	 * Function for changing the modal config variant
	 */
	children: ReactNode | null;
}

export const DEFAULT_CONFIG: ModalConfig = {
	id: 'default',
	children: null,
};
export const SUCCESS_CONFIG: ModalConfig = {
	id: 'success',
	children: MODAL.MODAL_SUCCESS_MESSAGE,
};
export const ERROR_CONFIG: ModalConfig = {
	id: 'error',
	children: MODAL.MODAL_ERROR_MESSAGE,
};
export const LOADING_CONFIG: ModalConfig = {
	id: 'loading',
	children: (
		<>
			<LoadingIcon />
			<>{MODAL.MODAL_LOADING_MESSAGE}</>
		</>
	),
};

export const MODAL_CONFIGS: Record<ModalConfigType, ModalConfig> = {
	default: DEFAULT_CONFIG,
	loading: LOADING_CONFIG,
	success: SUCCESS_CONFIG,
	error: ERROR_CONFIG,
};

type FeedbackModalProps = ModalConfig;

/**
 * Component for showing an alert using a specific variant.
 */
const FeedbackModal = ({ id, children }: FeedbackModalProps) => (
	<Modal
		className={StyleHelper.classnames(classes.modal, classes[`modal--${id}`])}
	>
		{children}
	</Modal>
);

export default FeedbackModal;
