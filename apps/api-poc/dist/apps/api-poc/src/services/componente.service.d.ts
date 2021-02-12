import { PreferenciasComponente } from '../../../../libs/shared/src/interfaces/index';
export declare class ComponenteService {
    getTextoBarraComponente(): string;
    getCookieDeclaration(): string;
    getPrivacyPolicy(): string;
    getVisaoGeralDePrivacidade(): string;
    getUserPreferences(userID: string): PreferenciasComponente;
}
