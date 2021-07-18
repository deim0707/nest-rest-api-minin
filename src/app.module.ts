import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ToysModule } from './toys/toys.module';
import { MongooseModule } from '@nestjs/mongoose';

/**
 * в случае с Products прописал Контроллер и Сервис вручную сюда.
 * лучше делать так, как сделано с Toys. Создать под них отдельный модуль и добавить здесь его в Импорт
 */
@Module({
  imports: [
    ToysModule,
    // ниже подключаемся к монго дб. пароль-аккаунт хорошо бы вынести в отдельный файл
    MongooseModule.forRoot(
      `mongodb+srv://dm3iy:BiaujFUPpr0wSX3X@cluster0.8gx5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

/**
 * для быстрого создания сервисов, контроллеров и т.п. может использовать nest generate controller NAME ( nest generate --help )
 */
