import { Controller, Get, Query } from '@nestjs/common';
import { PreferenciasComponente } from '../../../../libs/shared/src/interfaces';
import { ComponenteService } from '../services/componente.service';
import { CookieScan } from '../services/cookieScan.service';
import { UsuarioService } from '../services/usuario.service';

@Controller()
export class ComponenteController {
  constructor(
    private readonly componenteService: ComponenteService, 
    private readonly cookieScan:CookieScan,
    private readonly usuarioService: UsuarioService
    ) {}

  @Get('getTextoBarraComponente')
  getTextoBarraComponente(@Query() query): string {
    return this.componenteService.getTextoBarraComponente();
  }
  @Get('getVisaoGeralDePrivacidade')
  getVisaoGeralDePrivacidade(@Query() query): string {
    return this.componenteService.getVisaoGeralDePrivacidade();
  }
  @Get('getCookieDeclaration')
  getCookieDeclaration(@Query() query): string {
    return this.componenteService.getCookieDeclaration();
  }
  @Get('getPrivacyPolicy')
  getPrivacyPolicy(@Query() query): string {
    return this.componenteService.getPrivacyPolicy();
  }
  @Get('getUserPreferences')
  async getUserPreferences(@Query() query): Promise<PreferenciasComponente> {
    let UserID = await (await this.usuarioService.ObterPorAPI_KEY(query.KEY)).identificador;
    return this.componenteService.getUserPreferences(UserID);
  }
  @Get('cookieScan')
  async CookieScan(@Query() query){
    let Dominio = await (await this.usuarioService.ObterPorAPI_KEY(query.KEY)).dominios[0];
    return await this.cookieScan.Scan(Dominio.endereco); // corrigir para Dominio
  }
}
