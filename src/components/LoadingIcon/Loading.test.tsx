import { render, screen } from '@testing-library/react';

import LoadingIcon from './LoadingIcon';

describe('LoadingIcon', () => {
	it('should render the loading icon', () => {
		render(<LoadingIcon />);

		const loadingIconElement = screen.getByTestId('loading-icon');
		expect(loadingIconElement).toBeInTheDocument();
	});
});
