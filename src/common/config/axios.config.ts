import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

import { ExceptionScope, LogLevel } from '../enums';
import { logger } from '../utils';
import { Exceptioner } from '../utils/exception.util';

export const AXIOS_CLIENT = (options?: CreateAxiosDefaults) => {
  if (!options)
    throw new Exceptioner({
      scope: ExceptionScope.AXIOS,
      message: 'options is required',
      info: options,
    });
  if (!options.baseURL)
    throw new Exceptioner({
      scope: ExceptionScope.AXIOS,
      message: '`BaseURl` is required',
    });

  if (!options.headers) {
    options.headers ??= {};
    options.headers = { 'Content-Type': 'application/json' };
    logger(ExceptionScope.GEOCODE, LogLevel.Warn).warn(
      'set header `Content-Type` to `application/json`\nIt is always a good idea to set header fields manually.',
    );
  }

  return { client: axios.create(options) };
};
