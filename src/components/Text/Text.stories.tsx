import Text from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Design System/Text/Text',
	tags: ['autodocs'],
	component: Text,
	args: {
		children: 'Body text',
	},
} satisfies Meta<typeof Text>;

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
