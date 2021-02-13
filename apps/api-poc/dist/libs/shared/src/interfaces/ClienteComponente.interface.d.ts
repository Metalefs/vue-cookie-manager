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
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    size: number;
    httpOnly: boolean;
    secure: boolean;
    session: boolean;
    sameSite?: string;
    priority: string;
    sameParty: boolean;
}
