export interface PaginationOutputDTO<T> {
  meta: {
    nextCursor: string | null;
    hasNextPage: boolean;
  };
  data: T[];
}
