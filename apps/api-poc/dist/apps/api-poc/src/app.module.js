"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const componente_controller_1 = require("./controllers/componente.controller");
const key_interceptor_1 = require("./middlewares/key.interceptor");
const componente_service_1 = require("./services/componente.service");
const cookieScan_service_1 = require("./services/cookieScan.service");
const usuario_service_1 = require("./services/usuario.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(key_interceptor_1.KeyInterceptor)
            .forRoutes(componente_controller_1.ComponenteController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [componente_controller_1.ComponenteController],
        providers: [componente_service_1.ComponenteService, cookieScan_service_1.CookieScan, usuario_service_1.UsuarioService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map