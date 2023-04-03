import { App } from './app';
import { render } from 'react-dom';

import './index.scss';

render(<App />, document.getElementById('app') as HTMLElement);
