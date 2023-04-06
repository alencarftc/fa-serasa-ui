import hclasses from './StyleHelper.module.scss';

export class StyleHelper {
	public static classes = {
		fw: {
			bold: hclasses['h-fw--bold'],
			normal: hclasses['h-fw--normal'],
		},
		op: {
			0: hclasses['op--0'],
			1: hclasses['op--1'],
		},
	};

	public static classnames(...classes: string[]): string {
		return classes.join(' ');
	}
}
