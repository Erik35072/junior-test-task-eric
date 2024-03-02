export type Pagination = {
  page?: number;
  pageSize?: number;
  total?: number;
};

export interface ResponseModel<T = unknown> extends Pagination {
  results?: T;
  error?: string;
  message?: string;
  code?: number;
}
