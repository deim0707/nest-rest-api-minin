import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(7000);
}

bootstrap();
// https://www.youtube.com/watch?v=abdgy72csaA
// cloud.mongodb.com по гугл аккаунту на dima1parshin
