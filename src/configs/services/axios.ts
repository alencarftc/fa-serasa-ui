import axios from 'axios';

import { ENV } from '@configs/services/env';

export default axios.create({
	baseURL: ENV.API_BASE_URL,
});
