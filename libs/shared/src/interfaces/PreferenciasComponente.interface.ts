export interface PreferenciasComponente{
    tabs:TabComponente[];
    UrlIconeBarra:string;
    UrlPaginaPrivacidade:string;
    tema:TemaComponente;
}

export interface TabComponente{
    titulo:string;
    posicao:number;
    ativo:boolean;
    funcao:FuncaoTabComponente;
}

export interface TemaComponente{
    corFundoBarra:string;      // default: rgb(12, 12, 12)
    corTextoBarra:string;      // default: rgb(255, 255, 255)
    
    corFundoBotaoBarra:string; // default: rgb(243, 96, 40)
    corTextoBotaoBarra:string; // default: rgb(255, 255, 255)
    
    corFundoModal:string;      // default: #fff
    corTextoModal:string;      // default: #333 --titulos : #0a0a0a;
    
    corFundoBotaoModal:string; // default: rgb(243, 96, 40)
    corTextoBotaoModal:string; // default: rgb(255, 255, 255)
}

export enum FuncaoTabComponente {
    configuracaoCookie,
    politicaPrivacidade,
    declaracaoUsoCookie,
    formularioRequisicaoDados
}