import Paragraph from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Design System/Text/Paragraph',
	tags: ['autodocs'],
	component: Paragraph,
	args: {
		children: 'Body text',
	},
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Normal: Story = {
	args: {
		children: 'Normal body text',
		fw: 'normal',
	},
};
export const Bold: Story = {
	args: {
		children: 'Bold body text',
		fw: 'bold',
	},
};
