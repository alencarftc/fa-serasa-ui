import { App } from './app';

export default {
	title: 'Pages/Main Page',
	component: App,
	parameters: {
		layout: 'fullscreen',
	},
};

export const Default = () => <App />;
