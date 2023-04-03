import { ReactNode } from 'react';

import './Heading.scss';

const DEFAULT_VARIANT = 'h2';

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
 * Heading UI component.
 */
const Heading = ({ children, as = DEFAULT_VARIANT }: HeadingProps) => {
	const HeadingTag = as as keyof JSX.IntrinsicElements;
	return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
