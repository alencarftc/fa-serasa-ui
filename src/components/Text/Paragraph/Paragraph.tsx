import { CommonTextProps } from '@interfaces/shared';
import { StyleHelper } from '@helpers/sass';

export type ParagraphProps = CommonTextProps;

/**
 * Component for showing text as a paragraph.
 */
const Paragraph = ({ children, fw = 'normal' }: CommonTextProps) => (
	<p data-testid="paragraph" className={StyleHelper.classes.fw[fw]}>
		{children}
	</p>
);

export default Paragraph;
