import { render } from '@testing-library/react';

import FeedbackModal, { ModalConfigType } from '.';
import ModalProvider from '@helpers/providers/ModalContext';

describe('FeedbackModal', () => {
	const renderModal = (configType: ModalConfigType) =>
		render(
			<ModalProvider initialConfigType={configType}>
				<FeedbackModal id={configType}>Text</FeedbackModal>
			</ModalProvider>
		);

	it('should render the default modal', () => {
		const { container } = renderModal('default');
		expect(container.getElementsByClassName('modal--default').length).toBe(1);
	});

	it('should render the loading modal', () => {
		const { container } = renderModal('loading');
		expect(container.getElementsByClassName('modal--loading').length).toBe(1);
	});

	it('should render the success modal', () => {
		const { container } = renderModal('success');
		expect(container.getElementsByClassName('modal--success').length).toBe(1);
	});

	it('should render the error modal', () => {
		const { container } = renderModal('error');
		expect(container.getElementsByClassName('modal--error').length).toBe(1);
	});
});
