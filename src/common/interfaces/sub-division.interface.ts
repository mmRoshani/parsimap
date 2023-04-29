import type { NestedSubDivision } from './nested-sub-division.interface';

export interface SubDivision {
  shahr?: NestedSubDivision;

  ostan?: NestedSubDivision;

  shahrestan?: NestedSubDivision;

  bakhsh?: NestedSubDivision;

  rusta?: NestedSubDivision;
}
