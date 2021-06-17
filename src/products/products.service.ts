import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
/**
 * Декатор @Injectable() говорит о том, что здесь будет сервис
 * (не забываем регестрировать как провайдер в модуле)
 *  * Контроллер работает с запросами. Сервис выполняет логическую составляющую.
 */
@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  create(product: CreateProductDto) {
    this.products.push({
      ...product,
      id: Date.now().toString(),
    });
  }
}
