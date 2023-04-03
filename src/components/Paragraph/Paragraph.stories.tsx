import Paragraph from './Paragraph';

export default {
	title: 'Design System/Paragraph',
	component: Paragraph,
};

export const Normal = () => <Paragraph>Body M</Paragraph>;

export const Bold = () => <Paragraph weight="bold">Body M</Paragraph>;
