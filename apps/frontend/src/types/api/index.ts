export type Pagination = {
  page?: number;
  pageSize?: number;
  total?: number;
};

export interface ResponseModel extends Pagination {
  error?: string;
  message?: string;
  code?: number;
}
