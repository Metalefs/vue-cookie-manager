import {
  ClienteComponente,
  FuncaoTabComponente,
  StatusAtivacaoCliente,
  TipoGrupoPlugin,
} from '../../../../libs/shared/src/interfaces/index';

export class UsuarioService {
  async ObterPorAPI_KEY(KEY: string): Promise<ClienteComponente> {
    console.log('KEY:', KEY);
    const usuario = {
      identificador: '123',
      email: 'teste@teste.com.br',
      cpf: '12312312312',
      nome: 'teste',
      statusAtivacao: StatusAtivacaoCliente.ativo,
      preferencias: {
        tabs: [
          {
            titulo: 'Configurações',
            posicao: 1,
            ativo: true,
            funcao: FuncaoTabComponente.configuracaoCookie,
          },
          {
            titulo: 'Política de Privacidade',
            posicao: 2,
            ativo: true,
            funcao: FuncaoTabComponente.politicaPrivacidade,
          },
          {
            titulo: 'Declaração de Uso de Cookies',
            posicao: 3,
            ativo: true,
            funcao: FuncaoTabComponente.declaracaoUsoCookie,
          },
          {
            titulo: 'Formulário de Requisição de Dados',
            posicao: 4,
            ativo: true,
            funcao: FuncaoTabComponente.formularioRequisicaoDados,
          },
        ],
        UrlIconeBarra: '',
        UrlPaginaPrivacidade: '',
        tema: {
          corFundoBarra: 'rgb(12, 12, 12)',
          corTextoBarra: 'rgb(255, 255, 255)',

          corFundoBotaoBarra: 'rgb(243, 96, 40)',
          corTextoBotaoBarra: 'rgb(255, 255, 255)',

          corFundoModal: '#fff',
          corTextoModal: '#333',

          corFundoBotaoModal: 'rgb(243, 96, 40)',
          corTextoBotaoModal: 'rgb(255, 255, 255)',
        },
      },
      dominios: [
        {
          endereco: 'http://localhost.com/8081',
          cookies: [
            {
              name: 'prov',
              ativo: true,
              value: '9847e17e-51fb-5bf4-3947-389a2d5c3f44',
              domain: '.stackoverflow.com',
              path: '/',
              expires: 2682374400.358625,
              size: 40,
              httpOnly: true,
              secure: false,
              session: false,
              priority: 'Medium',
              sameParty: false,
              grupo: {
                nome: 'Indefinido',
                tipo: TipoGrupoPlugin.Undefined,
              },
            },
            {
              name: '_ga',
              ativo: true,
              value: 'GA1.2.1978979404.1613177297',
              domain: '.stackoverflow.com',
              path: '/',
              expires: 1676249296,
              size: 30,
              httpOnly: false,
              secure: false,
              session: false,
              priority: 'Medium',
              sameParty: false,
              grupo: {
                nome: 'Indefinido',
                tipo: TipoGrupoPlugin.Undefined,
              },
              descricao:
                'Este nome de cookie está associado ao Google Universal Analytics - que é uma atualização significativa para o serviço de análise mais comumente usado do Google. Este cookie é usado para distinguir usuários únicos atribuindo um número gerado aleatoriamente como um identificador de cliente. Ele é incluído em cada solicitação de página in Por padrão, ele é definido para expirar após 2 anos, embora seja personalizável pelos proprietários de sites da Web. Um site e usado para calcular dados de visitantes, sessões e campanhas para os relatórios de análise de sites.',
            },
            {
              name: '_gid',
              ativo: true,
              value: 'GA1.2.76384390.1613177297',
              domain: '.stackoverflow.com',
              path: '/',
              expires: 1613263696,
              size: 29,
              httpOnly: false,
              secure: false,
              session: false,
              priority: 'Medium',
              sameParty: false,
              grupo: {
                nome: 'Indefinido',
                tipo: TipoGrupoPlugin.Undefined,
              },
              descricao:
                'Este nome de cookie está associado ao Google Analytics. É usado pelos scripts gtag.js e analytics.js e, de acordo com o Google Analytics, esse cookie é usado para distinguir os usuários.',
            },
            {
              name: 'UID',
              ativo: true,
              value: '14D72a2462161421eaaacag1613177296',
              domain: '.scorecardresearch.com',
              path: '/',
              expires: 1675385296.919613,
              size: 36,
              httpOnly: false,
              secure: true,
              session: false,
              sameSite: 'None',
              priority: 'Medium',
              sameParty: false,
              grupo: {
                nome: 'Anuncios',
                tipo: TipoGrupoPlugin.Advertising,
              },
            },
            {
              name: 'UIDR',
              ativo: true,
              value: '1613177296',
              domain: '.scorecardresearch.com',
              path: '/',
              expires: 1675385296.919662,
              size: 14,
              httpOnly: false,
              secure: true,
              session: false,
              sameSite: 'None',
              priority: 'Medium',
              sameParty: false,
              grupo: {
                nome: 'Anuncios',
                tipo: TipoGrupoPlugin.Advertising,
              },
            },
            {
              name: '_gat',
              ativo: true,
              value: '1',
              domain: '.stackoverflow.com',
              path: '/',
              expires: 1613177356,
              size: 5,
              httpOnly: false,
              secure: false,
              session: false,
              priority: 'Medium',
              sameParty: false,
              grupo: {
                nome: 'Analise de uso',
                tipo: TipoGrupoPlugin.Analytics,
              },
            },
            {
              name: 'mc',
              ativo: true,
              value: '602721d1-6c654-71f17-4168f',
              domain: '.quantserve.com',
              path: '/',
              expires: 1647391697.527385,
              size: 28,
              httpOnly: false,
              secure: true,
              session: false,
              sameSite: 'None',
              priority: 'Medium',
              sameParty: false,
              grupo: {
                nome: 'Indefinido',
                tipo: TipoGrupoPlugin.Undefined,
              },
            },
          ],
          scripts: [
            'https://rules.quantcount.com/rules-p-c1rF4kxgLUzNc.js',
            'https://secure.quantserve.com/quant.js',
            'https://sb.scorecardresearch.com/beacon.js',
            'https://www.google-analytics.com/analytics.js',
            'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
            'https://cdn.sstatic.net/Js/stub.en.js?v=237a2b16c3c5',
            '',
            'https://cdn.sstatic.net/Js/full-anon.en.js?v=6f307476a9d3',
            '',
            '',
            '',
            '',
            '',
          ],
        },
      ],
      chaveAPI: '234',
    };

    if (KEY == '234') {
      if (usuario.statusAtivacao == StatusAtivacaoCliente.ativo) {
        return usuario;
      }
    }

    throw { erro: 'Chave de acesso inválida' };
  }
}
