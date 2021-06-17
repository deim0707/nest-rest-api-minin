import { Module } from '@nestjs/common';
import { ToysService } from './toys.service';
import { ToysController } from './toys.controller';

/**
 * Зарегестрировали здесь отдельно модуль, чтобы разгрузить корневой модуль.
 * Этот модуль кинули в Ипорт в корневом модуле
 */
@Module({
  providers: [ToysService],
  controllers: [ToysController],
})
export class ToysModule {}

// https://youtu.be/abdgy72csaA?t=3019
