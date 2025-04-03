export interface PersonInformationRequest {
  data: string;
  descricao: string;
  file: File;
  informacao: string;
  ocoId: string;
}
export interface PersonInformationResponse {
  body: unknown;
}
