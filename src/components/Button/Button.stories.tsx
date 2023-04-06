import Button from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Buttons/Button',
	tags: ['autodocs'],
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = {
	args: {
		children: 'Bold body Button',
		disabled: true,
	},
};
