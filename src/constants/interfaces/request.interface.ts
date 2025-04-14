import { IFilter } from "./filter";
import { IPagination } from "./pagination.interface";

export interface IListParams {
  pagination: IPagination,
  filters: IFilter[]
}
