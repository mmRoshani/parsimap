import type { GeocodeParam, ParsiOptions } from '../interfaces';

export const geoToRealParams = ({
  parsiToken,
  lat,
  long,
  parsiOptions,
}: {
  parsiToken: string;
  lat: string;
  long: string;
  parsiOptions: ParsiOptions;
}): GeocodeParam => {
  return {
    key: parsiToken,
    location: `${long},${lat}`,
    ...parsiOptions,
  };
};
