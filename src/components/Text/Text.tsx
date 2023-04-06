import Paragraph, { ParagraphProps } from '@components/Text/Paragraph';
import Heading, { HeadingProps } from '@components/Text/Heading';

import { FontProps, PropsWithChildren } from '@interfaces/shared';
import { StyleHelper } from '@helpers/sass';
import classes from './Text.module.scss';

type TextVariants = 'normal' | 'success' | 'error';

export type TextProps = {
	/**
	 * Text variants for showing in different contexts.
	 */
	variant?: TextVariants;
	/**
	 * For controlling the text visibility easily.
	 */
	hidden?: boolean;
} & FontProps &
	PropsWithChildren;

/**
 * A Simple component for showing text.
 */
const Text = ({
	children,
	className = '',
	hidden = false,
	variant = 'normal',
	fw = 'normal',
}: TextProps) => (
	<span
		data-testid="text"
		className={StyleHelper.classnames(
			classes.text,
			classes[`text--as-${variant}`],
			StyleHelper.classes.fw[fw],
			hidden ? StyleHelper.classes.op[0] : '',
			className ? className : ''
		)}
	>
		{children}
	</span>
);

const TextHeading = (props: HeadingProps) => <Heading {...props} />;
Text.Heading = TextHeading;

const TextParagraph = (props: ParagraphProps) => <Paragraph {...props} />;
Text.Paragraph = TextParagraph;

export default Text;
