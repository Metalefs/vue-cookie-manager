import { PreferenciasComponente } from '../../../../libs/shared/src/interfaces';
import { ComponenteService } from '../services/componente.service';
import { UsuarioService } from '../services/usuario.service';
export declare class ComponenteController {
    private readonly componenteService;
    private readonly usuarioService;
    constructor(componenteService: ComponenteService, usuarioService: UsuarioService);
    getTextoBarraComponente(query: any): string;
    getVisaoGeralDePrivacidade(query: any): string;
    getCookieDeclaration(query: any): string;
    getPrivacyPolicy(query: any): string;
    getUserPreferences(query: any): Promise<PreferenciasComponente>;
    CookieScan(req: any): Promise<import("../../../../libs/shared/src/interfaces").CustomCookie[]>;
}
