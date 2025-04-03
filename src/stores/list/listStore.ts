import { defineStore } from "pinia";
import type { ListStateModel, Pagination } from "./listStateModel";
import type { Person } from "@/models/filterModel";
import { useFilterStore } from "../filter/filterStore";

export const useListStore = defineStore({
  id: "list",
  state: () =>
    ({
      list: [],
      pagination: paginationDefault(),
      totalPages: 1,
    } as ListStateModel),
  getters: {
    getList: () => (state: ListStateModel) => state.list,
    getPagination: (state: ListStateModel) => state.pagination,
    getTotalPages: (state: ListStateModel) => state.totalPages,
  },
  actions: {
    setList(list: Person[]) {
      const onlyUnique = (id: number) => {
        return !this.list.map((item) => item.id).includes(id);
      };

      if (this.list.length === 0) {
        this.list = list;
      } else {
        this.list = [...this.list, ...list.filter((x) => onlyUnique(x.id))];
      }
    },
    setTotalPages(quantPage: number) {
      this.totalPages = quantPage;
    },
    nextPage() {
      if (this.pagination.page >= this.totalPages) {
        return;
      }
      this.pagination.page++;
      const filterStore = useFilterStore();
      filterStore.getPersonByFilter();
    },
    resetList() {
      this.list = [];
    },
    resetPagination() {
      this.pagination = paginationDefault();
    },
  },
});

export const paginationDefault = () => {
  return { page: 0, perPage: 12 } as Pagination;
};
