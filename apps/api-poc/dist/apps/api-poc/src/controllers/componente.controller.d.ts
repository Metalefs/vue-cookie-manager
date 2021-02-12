import { PreferenciasComponente } from '../../../../libs/shared/src/interfaces';
import { ComponenteService } from '../services/componente.service';
import { CookieScan } from '../services/cookieScan.service';
import { UsuarioService } from '../services/usuario.service';
export declare class ComponenteController {
    private readonly componenteService;
    private readonly cookieScan;
    private readonly usuarioService;
    constructor(componenteService: ComponenteService, cookieScan: CookieScan, usuarioService: UsuarioService);
    getTextoBarraComponente(query: any): string;
    getVisaoGeralDePrivacidade(query: any): string;
    getCookieDeclaration(query: any): string;
    getPrivacyPolicy(query: any): string;
    getUserPreferences(query: any): Promise<PreferenciasComponente>;
    CookieScan(query: any): Promise<any>;
}
