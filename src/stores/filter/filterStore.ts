import { Status } from "@/models/filterModel";
import type { FilterRequest } from "@/models/filterModel";
import { FilterService } from "@/services/filterService";
import { defineStore } from "pinia";
import type { FilterStateModel } from "./filterStateModel";
import { useListStore } from "../list/listStore";
import { useCommunStore } from "../commun/communStore";

const filterService = new FilterService();

export const useFilterStore = defineStore({
  id: "filter",
  state: () =>
    ({ filter: filterDefault() as FilterRequest } as FilterStateModel),
  getters: {
    getFilter: () => (state: FilterStateModel) => state.filter,
  },
  actions: {
    async getPersonByFilter() {
      if (!this.filter) return;
      const communStore = useCommunStore();
      communStore.setIsLoading(true);
      const listStore = useListStore();
      this.filter.pagina = listStore.pagination.page;
      this.filter.porPagina = listStore.pagination.perPage;
      const filter = await filterService.getPersonsByFilter(this.filter);

      if (filter?.data) {
        listStore.setList(filter?.data.content);
        listStore.setTotalPages(filter?.data.totalPages);
      }
      communStore.setIsLoading(false);
    },
    setFilter(filter: FilterRequest) {
      this.filter = filter;
    },
    search() {
      const listStore = useListStore();
      listStore.resetPagination();
      listStore.resetList();
      this.getPersonByFilter();
    },
    hasListAssembled() {
      const listStore = useListStore();
      return listStore.list.length > 0;
    },
  },
});

const filterDefault = (): FilterRequest => {
  return {
    nome: "",
    faixaIdadeInicial: 0,
    faixaIdadeFinal: 0,
    pagina: 0,
    porPagina: 0,
    sexo: "",
    status: Status[Status.DESAPARECIDO],
  } as FilterRequest;
};
