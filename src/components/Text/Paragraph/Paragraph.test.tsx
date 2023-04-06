/* eslint-disable vitest/expect-expect */
import Paragraph from '.';
import { render, screen } from '@testing-library/react';

describe('Paragraph component', () => {
	const testId = 'paragraph';
	const TEST_LABEL = 'A simple default paragraph.';

	it('should render a default p', () => {
		render(
			<Paragraph>
				<></>
			</Paragraph>
		);
		const el = screen.findByTestId(testId);
		expect(el).toBeTruthy();
	});

	it('should render a p with content', () => {
		render(<Paragraph>{TEST_LABEL}</Paragraph>);
		const el = screen.findByTestId(testId);
		expect(el).toBeTruthy();
	});

	it('should render a bold p', () => {
		render(<Paragraph fw="bold">{TEST_LABEL}</Paragraph>);
		const el = screen.findByTestId(testId);
		expect(el).toBeTruthy();
	});
});
