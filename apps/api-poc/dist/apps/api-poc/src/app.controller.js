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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./services/app.service");
const cookieScan_service_1 = require("./services/cookieScan.service");
const usuario_service_1 = require("./services/usuario.service");
let AppController = class AppController {
    constructor(appService, cookieScan, usuarioService) {
        this.appService = appService;
        this.cookieScan = cookieScan;
        this.usuarioService = usuarioService;
    }
    getTextoBarraComponente() {
        return this.appService.getTextoBarraComponente();
    }
    getVisaoGeralDePrivacidade() {
        return this.appService.getVisaoGeralDePrivacidade();
    }
    getCookieDeclaration() {
        return this.appService.getCookieDeclaration();
    }
    getPrivacyPolicy() {
        return this.appService.getPrivacyPolicy();
    }
    async getUserPreferences(query) {
        let UserID = await this.usuarioService.ObterPorAPI_KEY(query.KEY);
        return this.appService.getUserPreferences(UserID);
    }
    async CookieScan(query) {
        console.log(query);
        return await this.cookieScan.Scan(query.url);
    }
};
__decorate([
    common_1.Get('getTextoBarraComponente'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getTextoBarraComponente", null);
__decorate([
    common_1.Get('getVisaoGeralDePrivacidade'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getVisaoGeralDePrivacidade", null);
__decorate([
    common_1.Get('getCookieDeclaration'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getCookieDeclaration", null);
__decorate([
    common_1.Get('getPrivacyPolicy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getPrivacyPolicy", null);
__decorate([
    common_1.Get('getUserPreferences'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUserPreferences", null);
__decorate([
    common_1.Get('cookieScan'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "CookieScan", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        cookieScan_service_1.CookieScan,
        usuario_service_1.UsuarioService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map