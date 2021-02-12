import { PreferenciasComponente } from '../../../libs/shared/src/interfaces';
import { AppService } from './services/app.service';
import { CookieScan } from './services/cookieScan.service';
import { UsuarioService } from './services/usuario.service';
export declare class AppController {
    private readonly appService;
    private readonly cookieScan;
    private readonly usuarioService;
    constructor(appService: AppService, cookieScan: CookieScan, usuarioService: UsuarioService);
    getTextoBarraComponente(): string;
    getVisaoGeralDePrivacidade(): string;
    getCookieDeclaration(): string;
    getPrivacyPolicy(): string;
    getUserPreferences(query: any): Promise<PreferenciasComponente>;
    CookieScan(query: any): Promise<any>;
}
