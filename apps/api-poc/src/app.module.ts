import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ComponenteController } from './controllers/componente.controller';
import { KeyInterceptor } from './middlewares/key.interceptor';
import { ComponenteService } from './services/componente.service';
import { CookieScan } from './services/cookieScan.service';
import { UsuarioService } from './services/usuario.service';

@Module({
  imports: [],
  controllers: [ComponenteController],
  providers: [ComponenteService,CookieScan,UsuarioService],
})
export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(KeyInterceptor)
      .forRoutes(ComponenteController)
      
  }
}
