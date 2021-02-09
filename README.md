# POC
Projeto Gerenciador LGPD

MAPEAMENTO DO FUNCIONAMENTO.
__

DO COMPONENTE:

  .Ler politica de privacidade através de chave de API.
  
  .Ler Declaração de uso de cookies através de chave de API.
  
  .Ler preferências do plugin através de chave de API.
  
  .Exibir formulário de requisição de dados pessoais e enviar dados através de chave de API.
  
  .GESTOR DE COOKIE:
  
    .Salvar cookies ativos para o cliente através de chave de API.
    
    .Verificar tags dos scripts (alterada pelo cliente) para identificar plugins de rastreamento.
    
    .Scanear o site por cookies para identificar serviços de rastreamento.
    
    .Bloqueio automático de carregamento de Iframes dinâmicos quando sem consentimento do usuário (sugerido usar MutationObserver)

DO CLIENTE:

  .Cadastrar HTML de politica de privacidade sobreescrevendo template original.
  
  .Cadastrar Declaração de uso de cookies sobreescrevendo template original.
  
  .Bloquear execução de plugin manualmente. Substituir tag script para identificar plugins de rastreamento.

DA ADMINISTRAÇÃO:

  .Permitir cadastro de usuário.
  
  .Gerar script personalizado para usuário.
  
  .Permitir edição de politica de privacidade para usuário.
  
  .Permitir edição de Declaração de uso de cookies para usuário.
  
  .Permitir edição de cookies salvos no site.
    .Alterar nome do grupo.
    .Ativar, Desativar
    .Classificar em padrão e essencial. 
  
  .Permitir edição do componente:
    
    EDIÇÃO DE COMPONENTE:
     
      .Texto do botão
      
      .Logo do botão.
      
      .Tema de cor do botão.
