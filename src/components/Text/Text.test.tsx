import { render, screen } from '@testing-library/react';
import Text, { TextProps } from './Text';
import { StyleHelper } from '@helpers/sass';

describe('Text component', () => {
	it('should render the text correctly', () => {
		const text = 'This is a text';

		render(<Text>{text}</Text>);

		const textElement = screen.getByTestId('text');
		expect(textElement).toHaveTextContent(text);
	});

	it('should apply the correct variant class', () => {
		const variant: TextProps['variant'] = 'success';

		render(<Text variant={variant}>This is a text</Text>);

		const textElement = screen.getByTestId('text');
		expect(textElement).toHaveClass(`text--as-${variant}`);
	});

	it('should apply the correct font weight class', () => {
		render(<Text fw="bold">This is a text</Text>);

		const textElement = screen.getByTestId('text');
		expect(textElement).toHaveClass(StyleHelper.classes.fw.bold);
	});

	it('should apply the custom className', () => {
		const className = 'custom-class';

		render(<Text className={className}>This is a text</Text>);

		const textElement = screen.getByTestId('text');
		expect(textElement).toHaveClass(className);
	});

	it('should hide the text when hidden is true', () => {
		const hidden = true;

		render(<Text hidden={hidden}>This is a text</Text>);

		const textElement = screen.getByTestId('text');
		expect(textElement).toHaveClass('op--0');
	});

	it('should render a Heading component', () => {
		const text = 'This is a heading';

		render(<Text.Heading>{text}</Text.Heading>);

		const headingElement = screen.getByTestId('heading');
		expect(headingElement).toHaveTextContent(text);
	});

	it('should render a Paragraph component', () => {
		const text = 'This is a paragraph';

		render(<Text.Paragraph>{text}</Text.Paragraph>);

		const paragraphElement = screen.getByTestId('paragraph');
		expect(paragraphElement).toHaveTextContent(text);
	});
});
