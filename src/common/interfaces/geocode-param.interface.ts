import type { ParsiOptions } from './parsi-options.interface';

export interface GeocodeParam extends ParsiOptions {
  key: string;
  location: string;
}
