import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

describe('TextInput component', () => {
	const label = 'Nome';
	const name = 'name';
	const placeholder = 'João Silva';
	const errorLabel = 'This is an error message';

	const Wrapper = ({ as }: { as?: 'textarea' | 'text' }) => {
		const {
			register,
			setError,
			formState: { errors },
		} = useForm<{
			name: string;
		}>({
			mode: 'onTouched',
		});

		useEffect(() => {
			setError('name', { message: errorLabel });
		}, []);

		return (
			<TextInput
				name="name"
				register={register('name', { required: errorLabel })}
				label="Nome"
				placeholder={placeholder}
				as={as}
				errors={errors.name}
			/>
		);
	};

	it('should render a text input by default', () => {
		render(<Wrapper />);

		const inputElement = screen.getByPlaceholderText(placeholder);
		expect(inputElement).toHaveAttribute('type', 'text');
	});

	it('should render a textarea input when as="textarea"', () => {
		render(<Wrapper as="textarea" />);

		const textareaElement = screen.getByPlaceholderText(placeholder);
		expect(textareaElement.tagName).toBe('TEXTAREA');
	});

	it('should render the label correctly', () => {
		render(<Wrapper />);

		const labelElement = screen.getByText(label);
		expect(labelElement).toHaveAttribute('for', name);
	});

	it('should render the error message if there are any errors', () => {
		render(<Wrapper />);

		const errorText = screen.getByText(errorLabel);
		expect(errorText).toBeVisible();
	});
});
