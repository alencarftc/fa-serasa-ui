import Heading from './Heading';

export default {
	title: 'Design System/Heading',
	component: Heading,
};

export const Default = () => <Heading>Default H2</Heading>;

export const H1Variant = () => <Heading as="h1">Display</Heading>;

export const H2Variant = () => <Heading as="h2">Heading L</Heading>;

export const H3Variant = () => <Heading as="h3">Heading M</Heading>;

export const H4Variant = () => <Heading as="h4">Heading S</Heading>;

export const H5Variant = () => <Heading as="h5">Heading XS</Heading>;

export const H6Variant = () => <Heading as="h6">Subheading</Heading>;
