export enum SearchType {
  EXACT,
  SUBSTRING,
  RANGE,
  STARTWITH
}
export class Filter {
  searchOn: string;
  type: SearchType;
  keys: Array<any> | string;
  caseSensitve : boolean
}
