import { PreferenciasComponente } from "./PreferenciasComponente.interface";

export interface ClienteComponente{
    identificador:string;
    email:string;
    nome:string;
    cpf:string;
    statusAtivacao:StatusAtivacaoCliente;
    dominios:DominioCliente[];
    chaveAPI:string;
    preferencias: PreferenciasComponente;
}

export enum StatusAtivacaoCliente{
    ativo,
    inativo
}

export interface DominioCliente{
    endereco:string;
    cookies?: CustomCookie[]
}

export interface CustomCookie{
    ativo : boolean,
    name: string,
    value: string,
    domain: string,
    path: string,
    expires: number,
    size: number,
    httpOnly: boolean,
    secure: boolean,
    session: boolean,
    sameSite?: string,
    priority: string,
    sameParty: boolean
}