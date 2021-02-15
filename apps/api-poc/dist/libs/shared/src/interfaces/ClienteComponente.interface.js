"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoGrupoPlugin = exports.StatusAtivacaoCliente = void 0;
var StatusAtivacaoCliente;
(function (StatusAtivacaoCliente) {
    StatusAtivacaoCliente[StatusAtivacaoCliente["ativo"] = 0] = "ativo";
    StatusAtivacaoCliente[StatusAtivacaoCliente["inativo"] = 1] = "inativo";
})(StatusAtivacaoCliente = exports.StatusAtivacaoCliente || (exports.StatusAtivacaoCliente = {}));
var TipoGrupoPlugin;
(function (TipoGrupoPlugin) {
    TipoGrupoPlugin[TipoGrupoPlugin["Advertising"] = 0] = "Advertising";
    TipoGrupoPlugin[TipoGrupoPlugin["SocialMedia"] = 1] = "SocialMedia";
    TipoGrupoPlugin[TipoGrupoPlugin["Analytics"] = 2] = "Analytics";
    TipoGrupoPlugin[TipoGrupoPlugin["CostumerInteraction"] = 3] = "CostumerInteraction";
    TipoGrupoPlugin[TipoGrupoPlugin["Essential"] = 4] = "Essential";
    TipoGrupoPlugin[TipoGrupoPlugin["Undefined"] = 5] = "Undefined";
})(TipoGrupoPlugin = exports.TipoGrupoPlugin || (exports.TipoGrupoPlugin = {}));
//# sourceMappingURL=ClienteComponente.interface.js.map