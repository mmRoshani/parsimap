import type { CreateAxiosDefaults } from 'axios';

import { SunRoute } from './common';
import { GeocodeService } from './services';

export * from './common';
export * from './services';

export class Parsimap {
  protected geocode?: GeocodeService;
  constructor(protected readonly apiToken: string, protected readonly axiosOptions?: CreateAxiosDefaults) {}

  public get geocodeService(): GeocodeService {
    return (this.geocode =
      this.geocode ?? new GeocodeService(this.apiToken, SunRoute.GEOCODE_REVERSE, this.axiosOptions));
  }
}
