export interface PreferenciasComponente {
    tabs: TabComponente[];
    UrlIconeBarra: string;
    UrlPaginaPrivacidade: string;
    tema: TemaComponente;
}
export interface TabComponente {
    titulo: string;
    posicao: number;
    ativo: boolean;
    funcao: FuncaoTabComponente;
}
export interface TemaComponente {
    corFundoBarra: string;
    corTextoBarra: string;
    corFundoBotaoBarra: string;
    corTextoBotaoBarra: string;
    corFundoModal: string;
    corTextoModal: string;
    corFundoBotaoModal: string;
    corTextoBotaoModal: string;
}
export declare enum FuncaoTabComponente {
    configuracaoCookie = 0,
    politicaPrivacidade = 1,
    declaracaoUsoCookie = 2,
    formularioRequisicaoDados = 3
}
