import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getVisaoGeralDePrivacidade')
  getVisaoGeralDePrivacidade(): string {
    return this.appService.getVisaoGeralDePrivacidade();
  }
  @Get('getCookieDeclaration')
  getCookieDeclaration(): string {
    return this.appService.getCookieDeclaration();
  }
  @Get('getPrivacyPolicy')
  getPrivacyPolicy(): string {
    return this.appService.getPrivacyPolicy();
  }
}
