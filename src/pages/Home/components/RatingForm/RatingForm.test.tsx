import { render, screen } from '@testing-library/react';
import RatingForm from './RatingForm';

describe('RatingForm component', () => {
	const mockOnSubmit = vitest.fn();

	vitest.mock('react-hook-form', () => ({
		useForm: () => ({
			register: vitest.fn(),
			handleSubmit: vitest.fn(),
			formState: { errors: vitest.fn() },
		}),
	}));

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

	it('renders correctly', () => {
		render(<RatingForm onSubmit={mockOnSubmit} />);
		expect(screen.getByText('Enviar avaliação')).toBeInTheDocument();
	});
});
