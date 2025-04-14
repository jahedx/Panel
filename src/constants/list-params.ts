import { IListParams } from "./interfaces/request.interface";

export const INITIAL_LIST_PARAMS: IListParams = {
  pagination: {
    page: 1,
    page_size: 10
  },
  filters: []
}

export const INITIAL_FILTER_PARAMS: IListParams[] = [];

