import type { Person } from "@/models/filterModel";

export interface ListStateModel {
  list: Person[];
  pagination: Pagination;
  totalPages: number;
}
export interface Pagination {
  page: number;
  perPage: number;
}
