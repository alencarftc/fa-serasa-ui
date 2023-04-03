import Paragraph, { ParagraphWeight } from './Paragraph';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Design System/Paragraph',
	tags: ['autodocs'],
	component: Paragraph,
	args: {
		children: 'Body text',
	},
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

const createStory = (text: string, weight: ParagraphWeight): Story => ({
	args: {
		children: text,
		weight,
	},
});

export const Normal: Story = createStory('Normal body text', 'normal');
export const Bold: Story = createStory('Bold body text', 'bold');
