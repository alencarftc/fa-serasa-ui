import axios from '@configs/services/axios';
import { AxiosInstance } from 'axios';

const BASE_API_PATH = 'api';

export class BaseService {
	protected axios: AxiosInstance;

	protected path: string;

	constructor(pathContext: string) {
		this.axios = axios;
		this.path = `${axios.defaults.baseURL}/${BASE_API_PATH}/${pathContext}`;
	}
}
