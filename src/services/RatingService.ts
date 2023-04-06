import { AxiosResponse } from 'axios';

import { BaseService } from '@services/BaseService';

export class RatingService extends BaseService {
	submit<T>(data: T): Promise<AxiosResponse<void>> {
		return this.axios.post(this.path, data);
	}
}
