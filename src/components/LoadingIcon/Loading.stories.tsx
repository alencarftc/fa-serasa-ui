import type { Meta, StoryObj } from '@storybook/react';
import LoadingIcon from '.';

const meta = {
	title: 'Components/Icons/Loading',
	tags: ['autodocs'],
	component: LoadingIcon,
} satisfies Meta<typeof LoadingIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
