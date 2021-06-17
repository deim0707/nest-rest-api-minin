import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ToysController } from './toys/toys.controller';
import { ToysService } from './toys/toys.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, ToysController],
  providers: [AppService, ProductsService, ToysService],
})
export class AppModule {}
