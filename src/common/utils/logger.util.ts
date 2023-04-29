import { getLogger } from 'log4js';
import { toKebabCase } from 'naming-conventions-modeler';

import type { ExceptionScope } from '../enums';
import { LogLevel } from '../enums';

export const logger = (scope?: ExceptionScope, level?: LogLevel) => {
  const log = getLogger(scope ? toKebabCase(scope) : undefined);

  log.level = level ?? LogLevel.All;

  return log;
};

export type LoggerType = ReturnType<typeof logger>;
