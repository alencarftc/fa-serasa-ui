import classes from './LoadingIcon.module.scss';

/**
 * Component for showing a loading icon.
 */
const LoadingIcon = () => (
	<div data-testid="loading-icon" className={classes.loading}>
		<span />
		<span />
		<span />
		<span />
	</div>
);

export default LoadingIcon;
