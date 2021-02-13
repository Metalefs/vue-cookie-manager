import { Test, TestingModule } from '@nestjs/testing';
import { ComponenteController } from './controllers/componente.controller';
import { ComponenteService } from './services/componente.service';

describe('AppController', () => {
  let appController: ComponenteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ComponenteController],
      providers: [ComponenteService],
    }).compile();

    appController = app.get<ComponenteController>(ComponenteController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getCookieDeclaration({ KEY: 123 })).toBe(!null);
    });
  });
});
