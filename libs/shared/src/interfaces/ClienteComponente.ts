export interface ClienteComponente{
    identificador:string;
    statusAtivacao:StatusAtivacaoCliente;
    dominios:DominioCliente[];
    chaveAPI:string;
}

export enum StatusAtivacaoCliente{
    ativo,
    inativo
}

export interface DominioCliente{
    endereco:string;
}