import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
	it('renders correctly when disabled is false', () => {
		render(<Button disabled={false}>Button</Button>);
		const button = screen.getByTestId('button');
		expect(button).not.toBeDisabled();
	});
	it('render correctly when type is submit', () => {
		render(<Button type="submit">Button</Button>);
		const button = screen.getByTestId('button');
		expect(button).toHaveAttribute('type', 'submit');
	});
	it('renders correctly when disabled is true', () => {
		render(<Button disabled>Button</Button>);
		const button = screen.getByTestId('button');
		expect(button).toBeDisabled();
	});
	it('render correctly when type is button', () => {
		render(<Button type="button">Button</Button>);
		const button = screen.getByTestId('button');
		expect(button).toHaveAttribute('type', 'button');
	});
});
