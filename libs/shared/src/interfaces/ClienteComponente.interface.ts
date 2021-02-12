export interface ClienteComponente{
    identificador:string;
    email:string;
    nome:string;
    cpf:string;
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