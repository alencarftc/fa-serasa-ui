import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

const submitMock = vitest.fn();

describe('Home component', () => {
	it('should call RatingService.submit with the form data when RatingForm is submitted', async () => {
		render(<Home />);

		const formElement = screen.getByTestId('form');
		const ratingInput = screen.getByTestId('rating-3');
		const nameInput = screen.getByPlaceholderText('João Silva');
		const commentsInput = screen.getByPlaceholderText(
			'Experiência fantástica!'
		);

		fireEvent.change(ratingInput, { target: { value: '3' } });
		fireEvent.change(nameInput, { target: { value: 'Nome aqui' } });
		fireEvent.change(commentsInput, {
			target: { value: 'Comentário pra teste' },
		});
		fireEvent.submit(formElement);

		await waitFor(() => {
			expect(submitMock).toHaveBeenCalledWith({
				rating: '3',
				name: 'Nome aqui',
				comment: 'Comentário pra teste',
			});
		});
	});
});
