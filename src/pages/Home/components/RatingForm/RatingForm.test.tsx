import { render, screen } from '@testing-library/react';
import RatingForm from './RatingForm';

describe('RatingForm component', () => {
	vitest.mock('react-hook-form', () => ({
		useForm: () => ({
			control: () => ({}),
			register: vitest.fn(),
			watch: vitest.fn(),
			formState: { errors: {} },
			handleSubmit: () => vitest.fn(),
		}),
	}));

	const mockOnSubmit = vitest.fn();

	beforeEach(() => {
		mockOnSubmit.mockClear();
	});

	it('should render the StarList component', () => {
		render(<RatingForm onSubmit={mockOnSubmit} />);

		const starListElement = screen.getByTestId('stars');
		expect(starListElement).toBeInTheDocument();
		expect(starListElement).toContainElement(screen.getByTestId('rating-1'));
		expect(starListElement).toContainElement(screen.getByTestId('rating-2'));
		expect(starListElement).toContainElement(screen.getByTestId('rating-3'));
		expect(starListElement).toContainElement(screen.getByTestId('rating-4'));
		expect(starListElement).toContainElement(screen.getByTestId('rating-5'));
	});

	it('should render the name TextInput component', () => {
		render(<RatingForm onSubmit={mockOnSubmit} />);

		const nameInput = screen.getByPlaceholderText('João Silva');
		expect(nameInput).toBeInTheDocument();
	});

	it('should render the comment TextInput component', () => {
		render(<RatingForm onSubmit={mockOnSubmit} />);

		const commentInput = screen.getByPlaceholderText('Experiência fantástica!');
		expect(commentInput).toBeInTheDocument();
		expect(commentInput.tagName).toBe('TEXTAREA');
	});
});
