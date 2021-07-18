import { Module } from '@nestjs/common';
import { ToysService } from './toys.service';
import { ToysController } from './toys.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Toy, ToySchema } from './schemas/toy.schema';

/**
 * Зарегестрировали здесь отдельно модуль, чтобы разгрузить корневой модуль.
 * Этот модуль кинули в Ипорт в корневом модуле
 */
@Module({
  // в дочерних модулях вызываем НЕ метод forRoot а метод forFeature
  // ниже мы регистрируем коллекцию (мангус-монго)
  imports: [MongooseModule.forFeature([{ name: Toy.name, schema: ToySchema }])],
  providers: [ToysService],
  controllers: [ToysController],
})
export class ToysModule {}

// https://youtu.be/abdgy72csaA?t=3019
