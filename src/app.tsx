import { useState } from 'preact/hooks';
import preactLogo from './assets/images/preact.svg';
import viteLogo from './assets/images/vite.svg';

import classes from './app.module.scss';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className={classes.logo} alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank" rel="noreferrer">
					<img
						src={preactLogo}
						className={`${classes.logo} ${classes.preact}`}
						alt="Preact logo"
					/>
				</a>
			</div>
			<h1>Vite + Preact</h1>
			<div className={classes.card}>
				<button onClick={() => setCount((_count) => _count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/app.tsx</code> and save to test HMR
				</p>
			</div>
			<p className={classes['read-the-docs']}>
				Click on the Vite and Preact logos to learn more
			</p>
		</>
	);
}
