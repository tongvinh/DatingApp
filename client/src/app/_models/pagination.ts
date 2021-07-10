export interface Pagination {
    CurrentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginationResult<T>{
    result? : T | null;
    pagination? : Pagination;
}