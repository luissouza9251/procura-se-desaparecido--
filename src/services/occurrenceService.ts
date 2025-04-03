import axios from "axios";
import type { MoreInformationRequest } from "@/models/occurrenceServiceModel";

const url = process.env.ENV_URL_API_DESAPARECIDOS;

export class OccurrenceService {
  postMoreInformation(params: MoreInformationRequest) {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append("data", params.data);
      bodyFormData.append("file", params.file);
      bodyFormData.append("informacao", params.informacao);
      bodyFormData.append("ocoId", params.ocoId);

      const response = axios.post(
        `${url}ocorrencias/informacoes-desaparecido`,
        bodyFormData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
