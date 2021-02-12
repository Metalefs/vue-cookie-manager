import { PreferenciasComponente } from '../../../../libs/shared/src/interfaces/index';
export declare class AppService {
    getTextoBarraComponente(): string;
    getCookieDeclaration(): string;
    getPrivacyPolicy(): string;
    getVisaoGeralDePrivacidade(): string;
    getUserPreferences(userID: string): PreferenciasComponente;
}
