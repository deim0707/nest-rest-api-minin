import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  // Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

/**
 * Декатор @Controller('products') говорит о том, что здесь контроллер к которому можно обратиться по пути 'products'
 * Контроллер работает с запросами. Сервис делает логику.
 */
@Controller('products')
export class ProductsController {
  /**
   * @Get() - декоратор задаёт тип запроса\ответа
   *   @Redirect('https://google.com', 301) - можем задать редирект
   */
  @Get()
  // @Redirect('https://google.com', 301)
  getAll(): string {
    return 'вернули все продукты';
  }

  /**
   * есть возможность (чутка костыльная, не nest-style, использовать возможности express-a. и так образом задавать, например статут код и возвращаемое значение
   */
  // @Get()
  // getAll2(@Req() req: Request, @Res() res: Response) {
  //   res.status(201).end('Lol kek 4eburek');
  // }

  /**
   * кроме типа запроса указали, что ждём динамический параметр - :id
   * @Param() params используем декоратор, которы говорит, что будут переменные. и в какую переменную мы их вставляем
   */
  @Get(':id')
  // можем доставать из params, не указывая внутри @Param() имя переменной
  // getOne(@Param() params) {
  //   return `getOne ${params.id}`;
  // }
  getOne(@Param('id') id: string): string {
    return `getOne ${id}`;
  }

  /**
   * @Body позволяет получить параметр из тела запроса
   * сделали для типа запроса класс, который объявляет типизацию
   *   @HttpCode(201) - можем указать статус ответа
   *     @Header('Cache-Control', 'none') - задаём хедеры (много раз его вызывать?
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProduct: CreateProductDto): string {
    return `title!: ${createProduct.title} price: ${createProduct.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id): string {
    return `remove id: ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateProduct: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return `remove id: ${id}. updated: ${updateProduct.title}`;
  }
}
