import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '.';

const meta = {
	title: 'Components/Inputs/TextInput',
	tags: ['autodocs'],
	component: TextInput,
	args: {
		name: 'name',
	},
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Full: Story = {
	args: {
		label: 'Name',
		placeholder: 'John Doe',
		errors: {
			type: 'required',
			message: 'Required',
		},
	},
};

export const Default: Story = {};

export const WithPlaceholder: Story = {
	args: {
		placeholder: 'You can insert text here',
	},
};
export const WithLabel: Story = {
	args: {
		label: 'Field with label',
	},
};

export const WithError: Story = {
	args: {
		errors: {
			type: 'required',
			message: 'Required',
		},
	},
};

export const AsTextarea: Story = {
	args: {
		as: 'textarea',
		label: 'My textarea',
		placeholder: 'A lot of space for typing here',
		errors: {
			type: 'required',
			message: 'Required',
		},
	},
};
