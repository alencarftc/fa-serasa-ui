import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useService } from './useService';
import {
	ModalContext,
	ModalContextProps,
} from '@helpers/providers/ModalContext';
import axios, { AxiosResponse } from 'axios';

import { Mocked } from 'vitest';

vitest.mock('axios');

const mockAxios = axios as Mocked<typeof axios>;

const TestComponent: React.FC = () => {
	const mockService = {
		request: () => axios.get('/test'),
	};

	const [, handleResponse] = useService(mockService);
	return (
		<button
			onClick={() => {
				handleResponse(mockService.request());
			}}
		>
			Send Request
		</button>
	);
};

describe('useService', () => {
	const changeMock = vitest.fn();
	const modalContextValue: ModalContextProps = {
		configType: 'default',
		change: changeMock,
	};

	beforeEach(() => {
		vitest.clearAllMocks();
	});

	it('handles successful response', () => {
		mockAxios.get.mockResolvedValue({} as AxiosResponse);

		render(
			<ModalContext.Provider value={modalContextValue}>
				<TestComponent />
			</ModalContext.Provider>
		);

		act(() => {
			userEvent.click(screen.getByText('Send Request'));
		});

		waitFor(() => expect(changeMock).toHaveBeenNthCalledWith(1, 'loading'));
		waitFor(() => expect(changeMock).toHaveBeenNthCalledWith(2, 'success'));
	});

	it('handles failure response', () => {
		mockAxios.get.mockRejectedValue(new Error('Request failed'));

		render(
			<ModalContext.Provider value={modalContextValue}>
				<TestComponent />
			</ModalContext.Provider>
		);

		userEvent.click(screen.getByText('Send Request'));
		waitFor(() => expect(changeMock).toHaveBeenNthCalledWith(1, 'loading'));
		waitFor(() => expect(changeMock).toHaveBeenNthCalledWith(2, 'error'));
	});
});
