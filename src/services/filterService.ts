import axios from "axios";
import type { FilterRequest } from "@/models/filterModel";

const url = process.env.ENV_URL_API_DESAPARECIDOS;

export class FilterService {
  getPersonsByFilter(params: FilterRequest) {
    try {
      const response = axios.get(`${url}pessoas/aberto/filtro`, {
        params,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
