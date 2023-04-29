import type { CreateAxiosDefaults } from 'axios';

import { AXIOS_CLIENT } from '../config';
import { RequestService } from './request.core';

export class BaseService<T> extends RequestService<T> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(AXIOS_CLIENT(options));
  }
}
