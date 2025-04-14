import { FilterOperation } from "../enums/filter"

export interface IFilter {
  field: string
  value?: unknown
  operation?: FilterOperation
}
