interface StyleModule {
	[key: string]: string;
}

declare module '*.module.css' {
	const classes: StyleModule;
	export default classes;
}

declare module '*.module.scss' {
	const classes: StyleModule;
	export default classes;
}

declare module '*.module.sass' {
	const classes: StyleModule;
	export default classes;
}

declare module '*.module.less' {
	const classes: StyleModule;
	export default classes;
}

declare module '*.module.styl' {
	const classes: StyleModule;
	export default classes;
}
