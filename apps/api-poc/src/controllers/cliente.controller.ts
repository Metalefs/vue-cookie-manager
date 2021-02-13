import { Controller, Get, Query } from '@nestjs/common';
import { UsuarioService } from 'src/services/usuario.service';
import { CookieScan } from '../services/cookieScan.service';

@Controller()
export class ClienteController {
  constructor(
    private readonly cookieScan: CookieScan,
    private readonly usuarioService: UsuarioService,
  ) {}

  @Get('cookieScan')
  async CookieScan(@Query() query) {
    const Dominio = await (await this.usuarioService.ObterPorAPI_KEY(query.KEY))
      .dominios;
    return await this.cookieScan.Scan(Dominio[0].endereco);
  }
}
