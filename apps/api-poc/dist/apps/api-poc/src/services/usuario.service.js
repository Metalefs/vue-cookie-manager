"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const index_1 = require("../../../../libs/shared/src/interfaces/index");
class UsuarioService {
    async ObterPorAPI_KEY(KEY) {
        console.log('quKEYery:', KEY);
        if (KEY == "234")
            return {
                identificador: "123",
                email: "teste@teste.com.br",
                cpf: "12312312312",
                nome: "teste",
                statusAtivacao: index_1.StatusAtivacaoCliente.ativo,
                dominios: [
                    {
                        endereco: "meusite.com.br"
                    }
                ],
                chaveAPI: "234",
            };
        throw { erro: 'Chave de acesso inválida' };
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map