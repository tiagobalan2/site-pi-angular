import { LoginComponent } from "../pages/login/login.component";

export interface Aviso {
    id: number; // mudar se no back for inteiro e nao string
    // resto dos atributos
    tituloAvisoString: string;
    conteudoAviso: string;
    dataCriacaoAviso: string;
    dataEnvioAviso: string;
    criadorAviso: string;
  }