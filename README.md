# POC
Projeto Gerenciador LGPD

![image](https://user-images.githubusercontent.com/40893204/127348612-fdd1f2cb-e09d-4a95-b5c5-d6575aee6f51.png)


MAPEAMENTO DO FUNCIONAMENTO.

_________________________________________________________________________________________________________________________________
DO COMPONENTE:

  - Ler Politica de Privacidade através de chave de API.
  
  - Ler Declaração de Uso de Cookies através de chave de API.
  
  - Ler Preferências do Plugin/Componente através de chave de API.
  
  - Exibir Formulário de Requisição de Dados Pessoais e Enviar Dados através de chave de API.
  
  - Ler preferencias previas do usuário ná página atual através do armazenamento local.
  
  - GESTOR DE COOKIE:
  
    - Salvar consentimendo do usuário para cookies do cliente através de chave de API.
    
    - Verificar tags dos scripts (alterada pelo cliente) para identificar plugins de rastreamento.
    
    - Scanear o site por cookies para identificar serviços de rastreamento.
    
    - Bloqueio automático de carregamento de Iframes dinâmicos quando sem consentimento do usuário (sugerido usar MutationObserver)

_________________________________________________________________________________________________________________________________

DO CLIENTE:

  - Cadastrar Politica de Privacidade sobreescrevendo template original.
  
  - Cadastrar Declaração de Uso de Cookies sobreescrevendo template original.
  
  - Cadastrar Formulário de Requisição de Dados Pessoais sobreescrevendo template original.
  
  - Cadastrar Preferências do Plugin.
  
  - Bloquear execução de plugin manualmente:
      - Substituir tag script para identificar plugins de rastreamento ([exemplo](https://support.secureprivacy.ai/hc/en-us/articles/360013889638-How-to-block-scripts-and-cookies-with-JavaScript-rewrite-manual-blocking-)).
  
  - Habilitar controle de scripts e cookies na administração.
  
_________________________________________________________________________________________________________________________________

DA ADMINISTRAÇÃO:

  - Permitir cadastro de usuário.
  
  - Permitir login de usuário.
  
  - Gerar script personalizado para usuário.
  
  - Permitir Edição de Politica de Privacidade para usuário.
  
  - Permitir Edição de Declaração de Uso de Cookies para usuário.
  
  - Permitir controle de ativação do componente.
  
  - Permitir Edição de cookies salvos no site.
    - Alterar nome do grupo.
    - Ativar, Desativar (expiração)
    - Classificar prioridade em padrão, médio e essencial. 
  
  - Permitir edição do componente:
    
    - EDIÇÃO DE COMPONENTE:
     
      - Texto do botão
      
      - Logo do botão.
      
      - Tema de cor do botão.
      
___________________________________________________________________________________________________________________________________

DA PORTNET:

- PERMITIR mecanismos de medições de uso e chave de autenticação
_________________________________________________________________________________________________________________________________

DA API:

- CADASTRO DO USUÁRIO
- LOGIN DO USUÁRIO
- HOSPEDAR SCRIPT DO COMPONENTE
- SERVIÇO DE ALTERAÇÃO E PERSISTENCIA DE DADOS
- COLETA DE TODOS OS COOKIES DA PÁGINA DO CLIENTE:

  - Possibilitar scaneio automático de todos os cookies com as informações : 'nome','valor','dominio','expiracao','tamanho','seguro','mesmoSite','prioridade'
  
  
COMO ESCANEAR OS COOKIES ?

 - [SUGERIDO NPM PHANTOMJS](https://ourcodeworld.com/articles/read/379/how-to-use-phantomjs-with-node-js). 
 - SALVAR COOKIES ESCANEADOS POR CLIENTE ATRAVÉS DE CHAVE DE API.
 - POSSIBILITAR FUNÇÃO DE RE-ESCAN
 
 __________________________________________________________________________________________________________________________________
 
 TECNOLOGIAS:
 
  - COMPONENTE: **Sugestão VUEJS**
  - ADMINISTRAÇÃO: ABERTO
  - API: **Sugestão NODEJS**
  - BANCO DE DADOS: ABERTO
 
 
 AUTOR: Jackson Pires - Devship
