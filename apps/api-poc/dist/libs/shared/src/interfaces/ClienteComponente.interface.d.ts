import { PreferenciasComponente } from "./PreferenciasComponente.interface";
export interface ClienteComponente {
    identificador: string;
    email: string;
    nome: string;
    cpf: string;
    statusAtivacao: StatusAtivacaoCliente;
    dominios: DominioCliente[];
    chaveAPI: string;
    preferencias: PreferenciasComponente;
}
export declare enum StatusAtivacaoCliente {
    ativo = 0,
    inativo = 1
}
export interface DominioCliente {
    endereco: string;
    cookies?: CustomCookie[];
}
export interface CustomCookie {
    ativo: boolean;
    grupo?: GrupoCookie;
    descricao?: string;
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number | string;
    size: number;
    httpOnly: boolean;
    secure: boolean;
    session: boolean;
    sameSite?: string;
    priority: string;
    sameParty: boolean;
}
export interface GrupoPlugin {
    nome: string;
    tipo: TipoGrupoPlugin;
}
export declare enum TipoGrupoPlugin {
    Advertising = 0,
    SocialMedia = 1,
    Analytics = 2,
    CostumerInteraction = 3,
    Essential = 4,
    Undefined = 5
}
export interface GrupoCookie extends GrupoPlugin {
}
