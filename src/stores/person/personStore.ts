import { defineStore } from "pinia";
import type { PersonStateModel } from "./personStateModel";
import type { Person } from "@/models/filterModel";

export const usePersonStore = defineStore({
  id: "person",
  state: () => ({ person: {} } as PersonStateModel),
  getters: {
    getPerson: () => (state: PersonStateModel) => state.person,
  },
  actions: {
    setPerson(person: Person) {
      this.person = person;
    },
    clearPerson() {
      this.person = {} as Person;
    },
  },
});
