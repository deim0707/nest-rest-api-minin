import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ToysModule } from './toys/toys.module';

/**
 * в случае с Products прописал Контроллер и Сервис вручную сюда.
 * лучше делать так, как сделано с Toys. Создать под них отдельный модуль и добавить здесь его в Импорт
 */
@Module({
  imports: [ToysModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

/**
 * для быстрого создания сервисов, контроллеров и т.п. может использовать nest generate controller NAME ( nest generate --help )
 */
