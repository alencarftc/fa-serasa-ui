import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

vitest.mock('@helpers/hooks/useService');
vitest.mock('react-hook-form', () => ({
	useForm: () => ({
		control: () => ({}),
		handleSubmit: () => jest.fn(),
	}),
}));

describe('Home component', () => {
	beforeEach(() => {
		vitest.clearAllMocks();
	});

	it('should render the heading and logo correctly', () => {
		render(<Home />);
		const headingElement = screen.getByRole('heading', { level: 3 });
		expect(headingElement).toBeTruthy();
	});

	it('should render the RatingForm component', () => {
		render(<Home />);

		const ratingFormElement = screen.getByRole('form', {
			name: 'Avalie o serviço',
		});
		expect(ratingFormElement).toBeInTheDocument();
		expect(ratingFormElement).toContainElement(
			screen.getByRole('radio', { name: '1 estrelas' })
		);
		expect(ratingFormElement).toContainElement(
			screen.getByRole('radio', { name: '2 estrelas' })
		);
		expect(ratingFormElement).toContainElement(
			screen.getByRole('radio', { name: '3 estrelas' })
		);
		expect(ratingFormElement).toContainElement(
			screen.getByRole('radio', { name: '4 estrelas' })
		);
		expect(ratingFormElement).toContainElement(
			screen.getByRole('radio', { name: '5 estrelas' })
		);
		expect(ratingFormElement).toContainElement(
			screen.getByRole('button', { name: 'Avaliar' })
		);
	});

	it('should call RatingService.submit with the form data when RatingForm is submitted', async () => {
		render(<Home />);

		const formElement = screen.getByRole('form', { name: 'Avalie o serviço' });
		const ratingInput = screen.getByLabelText('3 estrelas');
		const nameInput = screen.getByPlaceholderText('João Silva');
		const commentsInput = screen.getByPlaceholderText(
			'Adicione seus comentários'
		);
		const submitButton = screen.getByRole('button', { name: 'Avaliar' });

		fireEvent.change(ratingInput, { target: { value: '3' } });
		fireEvent.change(nameInput, {
			target: { value: 'Nome aqui' },
		});
		fireEvent.change(commentsInput, {
			target: { value: 'Comentário pra teste' },
		});
		fireEvent.submit(formElement);

		expect(submitButton).toBeDisabled();

		await waitFor(() => {
			expect(submitButton).toBeEnabled();
		});
	});
});
