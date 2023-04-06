import { useContext } from 'react';
import { AxiosResponse } from 'axios';

import { ModalContext } from '@helpers/providers/ModalContext';

export const useService = <T>(
	service: T
): [T, (request: Promise<AxiosResponse>) => void] => {
	const modalConfig = useContext(ModalContext);

	const handleOnSuccess = () => {
		modalConfig.change('success');
	};

	const handleOnFailure = () => {
		modalConfig.change('error');
	};

	const handleOnFinish = () => {};

	const handleResponse = (request: Promise<AxiosResponse>) => {
		modalConfig.change('loading');
		request
			.then(() => handleOnSuccess())
			.catch(() => handleOnFailure())
			.finally(handleOnFinish);
	};

	return [service, handleResponse];
};
