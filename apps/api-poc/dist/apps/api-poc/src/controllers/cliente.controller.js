"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../services/usuario.service");
const cookieScan_service_1 = require("../services/cookieScan.service");
let ClienteController = class ClienteController {
    constructor(cookieScan, usuarioService) {
        this.cookieScan = cookieScan;
        this.usuarioService = usuarioService;
    }
    async CookieScan(query) {
        let Dominio = await (await this.usuarioService.ObterPorAPI_KEY(query.KEY)).dominios;
        return await this.cookieScan.Scan(Dominio[0].endereco);
    }
};
__decorate([
    common_1.Get('cookieScan'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "CookieScan", null);
ClienteController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [cookieScan_service_1.CookieScan,
        usuario_service_1.UsuarioService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map