export interface Pagination {
  pagination?: {
    page?: number;
    pageSize?: number;
    pageCount?: number;
    total?: number;
  };
}
export interface ResponsePagination<T> {
  data: T;
  mata: Pagination;
}
