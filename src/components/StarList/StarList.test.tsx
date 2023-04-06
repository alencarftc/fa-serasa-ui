import { fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import StarList, { FeedbackValue } from './StarList';
import { useEffect } from 'react';

describe('StarList component with React Hook Form', () => {
	const errorLabel = 'obrigatório';
	const Wrapper = () => {
		const {
			register,
			setError,
			formState: { errors },
		} = useForm<{
			rating: FeedbackValue;
		}>({
			mode: 'onTouched',
		});

		useEffect(() => {
			setError('rating', { message: errorLabel });
		}, []);

		return (
			<StarList
				register={register('rating', {
					required: errorLabel,
				})}
				errors={errors.rating}
			/>
		);
	};

	it('should register the input correctly', () => {
		render(<Wrapper />);

		const ratingInput = screen.getByTestId('rating-5');
		fireEvent.click(ratingInput);

		expect(ratingInput).toBeChecked();
	});

	it('should highlight the stars on mouse hover and unhighlight on mouse leave', () => {
		render(<Wrapper />);

		const ratingInput = screen.getByTestId('star-5');
		fireEvent.mouseEnter(ratingInput);

		expect(document.querySelector('.stars__item--highlight')).toBeTruthy();
		fireEvent.mouseLeave(ratingInput);
		expect(document.querySelector('.stars__item--highlight')).toBeFalsy();
	});

	it('should mark the star on mouse click', () => {
		render(<Wrapper />);

		const ratingInput = screen.getByTestId('star-5');
		fireEvent.click(ratingInput);

		expect(document.querySelector('.stars__item--active')).toBeTruthy();
	});

	it('should show errors successfully', () => {
		render(<Wrapper />);
		expect(screen.getByText(errorLabel)).toBeTruthy();
	});
});
