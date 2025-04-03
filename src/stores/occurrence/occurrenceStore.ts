import { defineStore } from "pinia";
import type { OccurrenceStateModel } from "./occurrenceStateModel";
import { OccurrenceService } from "../../services/occurrenceService";
import { useCommunStore } from "../commun/communStore";

const occurrenceStore = new OccurrenceService();

export const useOccurrenceStore = defineStore({
  id: "occurrence",
  state: () =>
    ({
      moreInformation: {},
    } as OccurrenceStateModel),
  getters: {
    getMoreInformation: () => (state: OccurrenceStateModel) =>
      state.moreInformation,
  },
  actions: {
    async sendMoreInformation() {
      const response = await occurrenceStore.postMoreInformation(
        this.moreInformation
      );
      const communStore = useCommunStore();
      communStore.setIsLoading(false);
      return response;
    },
  },
});
