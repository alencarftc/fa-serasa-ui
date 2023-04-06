import Modal from '@components/Modal/Modal';
import LoadingIcon from '@components/LoadingIcon/LoadingIcon';
import { MODAL } from '@configs/content/pt-br/Modal';
import { ReactNode, useContext, useEffect, useState } from 'react';

import classes from './FeedbackModal.module.scss';
import { StyleHelper } from '@helpers/sass';
import { ModalContext } from '@helpers/providers/ModalContext';

export type ModalConfigType = 'default' | 'loading' | 'success' | 'error';

export interface ModalConfig {
	id: ModalConfigType;
	message: ReactNode | null;
}

export const DEFAULT_CONFIG: ModalConfig = {
	id: 'default',
	message: null,
};
export const SUCCESS_CONFIG: ModalConfig = {
	id: 'success',
	message: MODAL.MODAL_SUCCESS_MESSAGE,
};
export const ERROR_CONFIG: ModalConfig = {
	id: 'error',
	message: MODAL.MODAL_ERROR_MESSAGE,
};
export const LOADING_CONFIG: ModalConfig = {
	id: 'loading',
	message: (
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

const FeedbackModal = () => {
	const { configType } = useContext(ModalContext);

	const [{ id, message }, setModalConfig] = useState<ModalConfig>({
		...MODAL_CONFIGS.default,
	});

	useEffect(() => {
		setModalConfig(MODAL_CONFIGS[configType]);
	}, [configType]);

	return (
		<Modal
			className={StyleHelper.classnames(classes.modal, classes[`modal--${id}`])}
		>
			{message}
		</Modal>
	);
};

export default FeedbackModal;
