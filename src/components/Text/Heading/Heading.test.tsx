/* eslint-disable vitest/expect-expect */
import Heading, { HeadingLevel } from '.';
import { render, screen } from '@testing-library/react';

describe('Heading component', () => {
	const testHeadingRendering = (as?: HeadingLevel) => {
		render(<Heading as={as}>A simple default heading.</Heading>);
		const el = screen.getByTestId('heading');
		expect(el).toBeTruthy();
	};

	it('should render h2 by default successfully', () => testHeadingRendering());
	it('should render h1 successfully', () => testHeadingRendering('h1'));
	it('should render h2 successfully', () => testHeadingRendering('h2'));
	it('should render h3 successfully', () => testHeadingRendering('h3'));
	it('should render h4 successfully', () => testHeadingRendering('h4'));
	it('should render h5 successfully', () => testHeadingRendering('h5'));
	it('should render h6 successfully', () => testHeadingRendering('h6'));
});
