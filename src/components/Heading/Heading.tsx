import { ReactElement } from 'react';

import './Heading.scss';

const DEFAULT_VARIANT = 'h2';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps {
	/*
	 * The inner HTML.
	 */
	children: ReactElement | string | undefined;
	/*
	 * The correspondent HTML heading tag
	 */
	as?: HeadingLevel;
}
const Heading = ({ children, as = DEFAULT_VARIANT }: HeadingProps) => {
	const HeadingTag = as as keyof JSX.IntrinsicElements;
	return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
