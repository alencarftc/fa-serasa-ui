import { useContext } from 'react';
import {
	act,
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react';
import ModalProvider, {
	ModalContextProps,
	ModalContext,
} from '@helpers/providers/ModalContext';

const TestComponent = () => {
	const { configType, change } = useContext<ModalContextProps>(ModalContext);

	return (
		<div>
			<p>{configType}</p>
			<button onClick={() => change('success')}>Change</button>
		</div>
	);
};

describe('ModalProvider', () => {
	it('renders correctly with initial config', () => {
		render(
			<ModalProvider>
				<TestComponent />
			</ModalProvider>
		);

		expect(screen.getByText('default')).toBeInTheDocument();
	});

	it('changes the modal config', () => {
		render(
			<ModalProvider initialConfigType="default">
				<TestComponent />
			</ModalProvider>
		);

		act(() => {
			fireEvent.click(screen.getByText('Change'));
		});

		expect(screen.getByText('success')).toBeInTheDocument();
	});

	it('resets the configType after 3 seconds', () => {
		vitest.useFakeTimers();

		render(
			<ModalProvider initialConfigType="default">
				<TestComponent />
			</ModalProvider>
		);

		act(() => {
			fireEvent.click(screen.getByText('Change'));
		});
		expect(screen.getByText('success')).toBeInTheDocument();

		vitest.advanceTimersByTime(3000);
		waitFor(() => expect(screen.getByText('default')).toBeInTheDocument());
	});
});
