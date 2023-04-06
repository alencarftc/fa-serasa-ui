import type { Meta, StoryObj } from '@storybook/react';
import StarList from '.';

const meta = {
	title: 'Components/Inputs/StarList',
	tags: ['autodocs'],
	component: StarList,
} satisfies Meta<typeof StarList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
