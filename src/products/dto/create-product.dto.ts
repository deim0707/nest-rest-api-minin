/**
 * описываем, какие поля будем ожидать в объекте из метода POST
 */
export class CreateProductDto {
  readonly title: string;
  readonly price: number;
}
