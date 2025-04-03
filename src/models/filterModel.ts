export interface FilterRequest {
  faixaIdadeInicial: number;
  faixaIdadeFinal: number;
  nome: string;
  pagina: number;
  porPagina: number;
  sexo: string;
  status: string;
}

export interface FilterResponse {
  content: Person[];
}

export interface Person {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string;
  ultimaOcorrencia: {
    dtDesaparecimento: Date;
    dataLocalizacao: Date;
    encontradoVivo: boolean;
    localDesaparecimentoConcat: string;
    ocorrenciaEntrevDesapDTO: {
      informacao: string;
      vestimentasDesaparecido: string;
    };
    listaCartaz: boolean;
    ocoId: number;
  };
}

export enum Sexo {
  MASCULINO = 1,
  FEMININO,
}
export enum Status {
  DESAPARECIDO = 1,
  LOCALIZADO,
}
