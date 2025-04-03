export interface PersonDetailsResponse {
  id: number;
  idade: number;
  nome: string;
  sexo: string;
  ultimaOcorrencia: {
    dataLocalizacao: string;
    dtDesaparecimento: Date;
    encontradoVivo: boolean;
    listaCartaz: [
      {
        tipoCartaz: string;
        urlCartaz: string;
      }
    ];
    localDesaparecimentoConcat: string;
    ocoId: number;
    ocorrenciaEntrevDesapDTO: {
      informacao: string;
      vestimentasDesaparecido: string;
    };
  };
  urlFoto: string;
  vivo: boolean;
}
