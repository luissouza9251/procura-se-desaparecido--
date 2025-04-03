import { defineStore } from "pinia";
import type { CommunStateModel } from "./communStateModel.ts";

export const useCommunStore = defineStore({
  id: "commun",
  state: () => ({ isLoading: false } as CommunStateModel),
  getters: {
    getIsLoading: () => (state: CommunStateModel) => state.isLoading,
  },
  actions: {
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
  },
});
