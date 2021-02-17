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
exports.ComponenteController = void 0;
const common_1 = require("@nestjs/common");
const componente_service_1 = require("../services/componente.service");
const usuario_service_1 = require("../services/usuario.service");
let ComponenteController = class ComponenteController {
    constructor(componenteService, usuarioService) {
        this.componenteService = componenteService;
        this.usuarioService = usuarioService;
    }
    getTextoBarraComponente(query) {
        return this.componenteService.getTextoBarraComponente();
    }
    getVisaoGeralDePrivacidade(query) {
        return this.componenteService.getVisaoGeralDePrivacidade();
    }
    getCookieDeclaration(query) {
        return this.componenteService.getCookieDeclaration();
    }
    getPrivacyPolicy(query) {
        return this.componenteService.getPrivacyPolicy();
    }
    async getUserPreferences(query) {
        const UserID = await (await this.usuarioService.ObterPorAPI_KEY(query.KEY))
            .identificador;
        return this.componenteService.getUserPreferences(UserID);
    }
    async CookieScan(req) {
        const key = req.headers['component-key'];
        return await (await this.usuarioService.ObterPorAPI_KEY(key)).dominios[0]
            .cookies;
    }
    async getStatusCliente(req) {
        const key = req.headers['component-key'];
        return await (await this.usuarioService.ObterPorAPI_KEY(key))
            .statusAtivacao;
    }
};
__decorate([
    common_1.Get('getTextoBarraComponente'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ComponenteController.prototype, "getTextoBarraComponente", null);
__decorate([
    common_1.Get('getVisaoGeralDePrivacidade'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ComponenteController.prototype, "getVisaoGeralDePrivacidade", null);
__decorate([
    common_1.Get('getCookieDeclaration'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ComponenteController.prototype, "getCookieDeclaration", null);
__decorate([
    common_1.Get('getPrivacyPolicy'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ComponenteController.prototype, "getPrivacyPolicy", null);
__decorate([
    common_1.Get('getUserPreferences'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "getUserPreferences", null);
__decorate([
    common_1.Get('cookieScan'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "CookieScan", null);
__decorate([
    common_1.Get('getStatusCliente'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "getStatusCliente", null);
ComponenteController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [componente_service_1.ComponenteService,
        usuario_service_1.UsuarioService])
], ComponenteController);
exports.ComponenteController = ComponenteController;
//# sourceMappingURL=componente.controller.js.map