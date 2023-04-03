import type { Meta, StoryObj } from '@storybook/react';

import Heading, { HeadingLevel } from './Heading';

const meta = {
	title: 'Design System/Heading',
	component: Heading,
	tags: ['autodocs'],
	args: {
		children: 'Default',
	},
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

const createStory = (text: string, level: HeadingLevel): Story => ({
	args: {
		children: text,
		as: level,
	},
});

export const Default: Story = {};
export const H1Variant: Story = createStory('Display', 'h6');
export const H2Variant: Story = createStory('Heading L', 'h6');
export const H3Variant: Story = createStory('Heading M', 'h6');
export const H4Variant: Story = createStory('Heading S', 'h6');
export const H5Variant: Story = createStory('Heading XS', 'h6');
export const H6Variant: Story = createStory('Subheading', 'h6');
