import { ReactNode } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps {
	/**
	 * The inner HTML content.
	 */
	children: ReactNode;
	/**
	 * The correspondent HTML heading tag.
	 */
	as?: HeadingLevel;
}

/**
 * A component for showing text as a Heading.
 */
const Heading = ({ children, as = 'h2' }: HeadingProps) => {
	const HeadingTag = as as keyof JSX.IntrinsicElements;
	return <HeadingTag data-testid="heading">{children}</HeadingTag>;
};

export default Heading;
