"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const config_1 = require("../../config");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const repository_1 = require("../repositories/repository");
const src_1 = require("libs/data/src");
const email_service_1 = require("./email.service");
const password_service_1 = require("./password.service");
var UsuarioService;
(function (UsuarioService) {
    async function authenticate(Usuario) {
        console.log('query:', { Email: Usuario.Email }, { Senha: Usuario.Senha });
        return await repository_1.Repository.FindOne(src_1.entities.Usuario.NomeID, { Email: Usuario.Email }).then((user) => {
            if (user == 0) {
                throw "Usuário não encontrado";
            }
            if (user != undefined)
                if (user && bcrypt.compareSync(Usuario.Senha, user.Senha)) {
                    const token = jwt.sign({ sub: user._id }, config_1.crypt_config.secret, { expiresIn: '7d' });
                    console.log("login com sucesso. token gerado", Object.assign(Object.assign({}, user), { token }));
                    Usuario.token = token;
                    updateUserToken(Object.assign(Object.assign({}, user), { token }));
                    return Object.assign(Object.assign({}, user), { token });
                }
            if (!user.Senha)
                throw "Email ou senha incorretos";
        });
    }
    UsuarioService.authenticate = authenticate;
    async function create(NovoUsuario) {
        let find = await repository_1.Repository.FindOne(src_1.entities.Usuario.NomeID, { Email: NovoUsuario.Email });
        console.log("FIND", find);
        if (find != 0 && find != undefined) {
            throw 'E-mail "' + NovoUsuario.Email + '" já está sendo usado!';
        }
        if (NovoUsuario.Senha) {
            NovoUsuario.Senha = bcrypt.hashSync(NovoUsuario.Senha, 10);
        }
        console.log("Usuario a ser criado:", NovoUsuario);
        if (NovoUsuario.Email && NovoUsuario.Senha) {
            let emailService = new email_service_1.EmailService();
            NovoUsuario.DataCriacao = new Date();
            await repository_1.Repository.Insert(src_1.entities.Usuario.NomeID, NovoUsuario);
            const token = jwt.sign({ sub: NovoUsuario._id }, config_1.crypt_config.secret, { expiresIn: '7d' });
            console.log("usuário cadastrado com sucesso. token gerado", Object.assign(Object.assign({}, NovoUsuario), { token }));
            NovoUsuario.token = token;
            updateUserToken(NovoUsuario);
            emailService.SendRegistrationMessage(NovoUsuario);
            return Object.assign(Object.assign({}, NovoUsuario), { token });
        }
        else {
            console.log("usuário não cadastrado");
            throw 'usuário não cadastrado';
        }
    }
    UsuarioService.create = create;
    async function UpdateInfo(usuarioAntigo, usuarioNovo) {
        let UsuarioAlterado = Object.assign(usuarioAntigo, omitEmailPasswordAndType(usuarioNovo));
        console.log(UsuarioAlterado);
        return await repository_1.Repository.Edit(src_1.entities.Usuario.NomeID, UsuarioAlterado._id, UsuarioAlterado).then(x => {
            return x;
        });
    }
    UsuarioService.UpdateInfo = UpdateInfo;
    async function changePassword(user, trocarSenha) {
        if (user) {
            let emailService = new email_service_1.EmailService();
            if (bcrypt.compareSync(trocarSenha.senhaAtual, user.Senha)) {
                let hashSenhaNova = bcrypt.hashSync(trocarSenha.senhaNova, 10);
                console.log('senhaNova', hashSenhaNova);
                return await repository_1.Repository.UpdateUserPassword(src_1.entities.Usuario.NomeID, user._id, hashSenhaNova).then((x) => {
                    emailService.SendUpdatePasswordMessage(x, 'senha omitida pelo sistema');
                    if (x)
                        return x;
                });
            }
            else {
                throw 'Senha atual incorreta';
            }
        }
        else {
            throw 'E-mail não encontrado';
        }
    }
    UsuarioService.changePassword = changePassword;
    async function recoverPassword(email) {
        const user = await getByEmail(email);
        if (user) {
            let emailService = new email_service_1.EmailService();
            let senha = password_service_1.generateSinglePassword();
            let hashSenha = bcrypt.hashSync(senha, 10);
            console.log(senha, hashSenha);
            return await repository_1.Repository.UpdateUserPassword(src_1.entities.Usuario.NomeID, user._id, hashSenha).then((x) => {
                emailService.SendUpdatePasswordMessage(x, senha);
                if (x)
                    return true;
                else
                    return false;
            });
        }
        else {
            throw 'E-mail não encontrado';
        }
    }
    UsuarioService.recoverPassword = recoverPassword;
    async function createTempAccount(NovoUsuario) {
        let find = await repository_1.Repository.FindOne(src_1.entities.Usuario.NomeID, { Email: NovoUsuario.Email });
        if (find != 0 && find != undefined) {
            throw 'E-mail "' + NovoUsuario.Email + '" já está sendo usado!';
        }
        if (NovoUsuario.Senha) {
            NovoUsuario.Senha = bcrypt.hashSync(NovoUsuario.Senha, 10);
        }
        else {
            NovoUsuario.Senha = generateRandomPassword();
        }
        console.log("Usuario c/senha temporaria a ser criado:", NovoUsuario);
        if (NovoUsuario.Email && NovoUsuario.Senha) {
            let emailService = new email_service_1.EmailService();
            NovoUsuario.DataCriacao = new Date();
            await repository_1.Repository.Insert(src_1.entities.Usuario.NomeID, NovoUsuario);
            const token = jwt.sign({ sub: NovoUsuario._id }, config_1.crypt_config.secret, { expiresIn: '7d' });
            console.log("usuário cadastrado com sucesso. token gerado", Object.assign(Object.assign({}, NovoUsuario), { token }));
            NovoUsuario.token = token;
            updateUserToken(NovoUsuario);
            emailService.SendRegistrationMessage(NovoUsuario);
            emailService.SendUpdatePasswordMessage(NovoUsuario, NovoUsuario.Senha);
            return Object.assign(Object.assign({}, NovoUsuario), { token });
        }
        else {
            console.log("usuário não cadastrado");
            throw 'usuário não cadastrado';
        }
    }
    UsuarioService.createTempAccount = createTempAccount;
    function generateRandomPassword() {
        return password_service_1.generateSinglePassword();
    }
    UsuarioService.generateRandomPassword = generateRandomPassword;
    async function getById(id) {
        return await repository_1.Repository.FindOne(src_1.entities.Usuario.NomeID, { _id: id });
    }
    UsuarioService.getById = getById;
    async function getByEmail(email) {
        return await repository_1.Repository.FindOne(src_1.entities.Usuario.NomeID, { Email: email });
    }
    UsuarioService.getByEmail = getByEmail;
    async function getByToken(id) {
        let user = await repository_1.Repository.FindOne(src_1.entities.Usuario.NomeID, { token: id });
        if (user)
            return user;
        else
            throw 'Usuário não encontrado';
    }
    UsuarioService.getByToken = getByToken;
    async function updateUserToken(Usuario) {
        const user = await getById(Usuario._id);
        if (!user)
            throw 'Usuário não encontrado';
        Object.assign(user, Usuario);
        return repository_1.Repository.UpdateUserToken(src_1.entities.Usuario.NomeID, Usuario._id, Usuario.token);
    }
    UsuarioService.updateUserToken = updateUserToken;
    async function _delete(id) {
        await repository_1.Repository.Remove(src_1.entities.Usuario.NomeID, { _id: id });
    }
    UsuarioService._delete = _delete;
    function omitEmailPasswordAndType(Usuario) {
        const { Senha, Email, Tipo } = Usuario, userWithoutEmailAndPassword = __rest(Usuario, ["Senha", "Email", "Tipo"]);
        return userWithoutEmailAndPassword;
    }
    UsuarioService.omitEmailPasswordAndType = omitEmailPasswordAndType;
    function omitPassword(Usuario) {
        const { Senha } = Usuario, userWithoutPassword = __rest(Usuario, ["Senha"]);
        return userWithoutPassword;
    }
    UsuarioService.omitPassword = omitPassword;
})(UsuarioService = exports.UsuarioService || (exports.UsuarioService = {}));
;
//# sourceMappingURL=usuario.service.js.map