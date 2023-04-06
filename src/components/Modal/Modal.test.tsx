import { render, screen } from '@testing-library/react';

import Modal from '@components/Modal';

describe('Modal', () => {
	it('should render the modal with provided text', () => {
		render(<Modal>Test content</Modal>);

		const modalText = screen.getByText('Test content');
		expect(modalText).toBeInTheDocument();
	});

	it('should apply custom className', () => {
		render(<Modal className="custom-class">Test content</Modal>);

		const modalElement = screen.getByTestId('modal');
		expect(modalElement).toHaveClass('custom-class');
	});
});
