import Home from '@pages/Home';

import classes from './app.module.scss';
import ModalProvider from '@helpers/providers/ModalContext';

export const App = () => (
	<ModalProvider>
		<div data-testid="wrapper" className={classes.wrapper}>
			<Home />
		</div>
	</ModalProvider>
);
