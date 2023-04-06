import type { Meta, StoryObj } from '@storybook/react';
import RatingForm from '.';

const meta = {
	title: 'Pages/Main Page/Components/RatingForm',
	tags: ['autodocs'],
	component: RatingForm,
} satisfies Meta<typeof RatingForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
