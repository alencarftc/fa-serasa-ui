import type { Meta, StoryObj } from '@storybook/react';

import Heading, { HeadingLevel } from '.';

const meta = {
	title: 'Design System/Text/Heading',
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
export const H1Variant: Story = createStory('Display', 'h1');
export const H2Variant: Story = createStory('Heading L', 'h2');
export const H3Variant: Story = createStory('Heading M', 'h3');
export const H4Variant: Story = createStory('Heading S', 'h4');
export const H5Variant: Story = createStory('Heading XS', 'h5');
export const H6Variant: Story = createStory('Subheading', 'h6');
