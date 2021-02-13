import { UsuarioService } from 'src/services/usuario.service';
import { CookieScan } from '../services/cookieScan.service';
export declare class ClienteController {
    private readonly cookieScan;
    private readonly usuarioService;
    constructor(cookieScan: CookieScan, usuarioService: UsuarioService);
    CookieScan(query: any): Promise<any>;
}
