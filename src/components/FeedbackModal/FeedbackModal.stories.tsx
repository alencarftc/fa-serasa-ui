import { MODAL } from '@configs/content/pt-br/Modal';
import FeedbackModal from '.';

import type { Meta, StoryObj } from '@storybook/react';
import LoadingIcon from '@components/LoadingIcon/LoadingIcon';

const meta = {
	title: 'Components/Modal/FeedbackModal',
	tags: ['autodocs'],
	component: FeedbackModal,
} satisfies Meta<typeof FeedbackModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'default',
		children: MODAL.MODAL_DEFAULT_MESSAGE,
	},
};
export const Loading: Story = {
	args: {
		id: 'loading',
		children: (
			<>
				<LoadingIcon />
				<>{MODAL.MODAL_LOADING_MESSAGE}</>
			</>
		),
	},
};
export const Success: Story = {
	args: {
		id: 'success',
		children: MODAL.MODAL_SUCCESS_MESSAGE,
	},
};
export const Error: Story = {
	args: {
		id: 'error',
		children: MODAL.MODAL_ERROR_MESSAGE,
	},
};
