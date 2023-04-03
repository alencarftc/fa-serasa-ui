import { ReactNode } from 'react';
import classes from './Paragraph.module.scss';

const DEFAULT_WEIGHT = 'normal';

export type ParagraphWeight = 'normal' | 'bold';
interface ParapraphProps {
	/**
	 * The inner HTML content.
	 */
	children: ReactNode;
	/**
	 * The font weight value.
	 */
	weight?: ParagraphWeight;
}
const Paragraph = ({ children, weight = DEFAULT_WEIGHT }: ParapraphProps) => {
	const classNames = [classes[`font-${weight}`]];
	return (
		<p data-testid="paragraph" className={classNames.join(' ')}>
			{children}
		</p>
	);
};

export default Paragraph;
