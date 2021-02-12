// import {crypt_config} from '../../config';
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// import { Repository } from '../repositories/repository';
// import { entities } from 'libs/data/src';
// import { EmailService } from './email.service';

// import { generateSinglePassword } from './password.service';
import { ClienteComponente, StatusAtivacaoCliente } from '../../../../libs/shared/src/interfaces/index';
// import { TrocaSenha } from 'libs/data/src/lib/interfaces';

export class UsuarioService {

    async ObterPorAPI_KEY(KEY:string): Promise<ClienteComponente> {
        console.log('quKEYery:', KEY);

        if(KEY == "234")
          return {
            identificador:"123",
            email:"teste@teste.com.br",
            cpf:"12312312312",
            nome:"teste",
            statusAtivacao: StatusAtivacaoCliente.ativo,
            dominios:[
              {
                endereco:"meusite.com.br"
              }
            ],
            chaveAPI:"234",
          };
        
        throw {erro:'Chave de acesso inválida'};
    }

}
