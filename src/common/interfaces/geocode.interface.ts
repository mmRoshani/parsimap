import type { SubDivision } from './sub-division.interface';

/**
 *
 * Required GeoJson Format
 * exactly like RFC 7946
 *
 */
export interface GeoToRealReq {
  long: string;
  lat: string;
}

export interface GeoToRealRes {
  address?: string;
  location: GeoToRealReq;
  subdivision_prefix?: string;
  subdivisions: SubDivision;
}
