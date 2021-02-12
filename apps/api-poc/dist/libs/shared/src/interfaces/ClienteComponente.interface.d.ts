export interface ClienteComponente {
    identificador: string;
    email: string;
    nome: string;
    cpf: string;
    statusAtivacao: StatusAtivacaoCliente;
    dominios: DominioCliente[];
    chaveAPI: string;
}
export declare enum StatusAtivacaoCliente {
    ativo = 0,
    inativo = 1
}
export interface DominioCliente {
    endereco: string;
}
