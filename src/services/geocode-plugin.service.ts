import type { CreateAxiosDefaults } from 'axios';
import type { Logger } from 'log4js';

import type { GeoToRealReq, GeoToRealRes, ParsiOptions } from '../common';
import { AXIOS_CLIENT, ExceptionScope, geoToRealParams, logger, LogLevel, RequestService } from '../common';

export class GeocodeService extends RequestService<GeoToRealRes> {
  private logger: Logger = logger(ExceptionScope.GEOCODE, LogLevel.Warn);

  constructor(
    protected readonly apiToken: string,
    protected readonly path: string,
    protected readonly axiosOptions?: CreateAxiosDefaults,
  ) {
    super(AXIOS_CLIENT(axiosOptions));
    this.logger.debug(axiosOptions?.headers);
  }

  public async geoToReal(
    geoToRealReq: GeoToRealReq,
    parsiOptions: ParsiOptions = {
      local_address: false,
      approx_address: true,
      subdivision: true,
      plate: false,
      request_id: false,
    },
  ) {
    return this.get(`${this.path}`, {
      params: geoToRealParams({ parsiToken: this.apiToken, parsiOptions, ...geoToRealReq }),
    })
      .then((res) => res.data)
      .catch((err) => this.logger.error(err.message));
  }
}
