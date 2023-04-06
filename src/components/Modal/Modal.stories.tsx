import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';

const meta = {
	title: 'Components/Modal/Modal',
	tags: ['autodocs'],
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Um alerta simples',
	},
};
