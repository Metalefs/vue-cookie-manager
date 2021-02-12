import { entities } from 'libs/data/src';
import { Usuario } from 'libs/data/src/lib/classes';
import { TrocaSenha } from 'libs/data/src/lib/interfaces';
export declare module UsuarioService {
    function authenticate(Usuario: entities.Usuario): Promise<any>;
    function create(NovoUsuario: entities.Usuario): Promise<any>;
    function UpdateInfo(usuarioAntigo: Usuario, usuarioNovo: Usuario): Promise<any>;
    function changePassword(user: Usuario, trocarSenha: TrocaSenha): Promise<any>;
    function recoverPassword(email: string): Promise<any>;
    function createTempAccount(NovoUsuario: entities.Usuario): Promise<any>;
    function generateRandomPassword(): any;
    function getById(id: string): Promise<any[]>;
    function getByEmail(email: string): Promise<any>;
    function getByToken(id: string): Promise<any>;
    function updateUserToken(Usuario: entities.Usuario): Promise<any>;
    function _delete(id: string): Promise<void>;
    function omitEmailPasswordAndType(Usuario: entities.Usuario): any;
    function omitPassword(Usuario: entities.Usuario): any;
}
