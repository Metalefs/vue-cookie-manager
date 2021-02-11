import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCookieDeclaration(): string {
    return 'getCookieDeclaration!';
  }
  getPrivacyPolicy(): string {
    return 'getPrivacyPolicy!';
  }
  getVisaoGeralDePrivacidade(): string {
    return 'getVisaoGeralDePrivacidade!';
  }
}
