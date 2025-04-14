export enum FilterOperation {
  Equal = 'Equal',
  Contain = 'Contain',
  In = 'In',
  GreaterThan = 'GreaterThan',
  LessThan = 'LessThan',
  GreaterThanOrEqual = 'GreaterThanOrEqual',
  LessThanOrEqual = 'LessThanOrEqual',
  InString = 'InString'
}

export const isValidFilterOperation = (operation: string): operation is FilterOperation =>
  Object.values(FilterOperation).includes(operation as FilterOperation)
