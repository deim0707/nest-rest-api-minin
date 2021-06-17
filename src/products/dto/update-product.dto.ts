/**
 * описываем, какие поля будем ожидать в объекте из метода UPDATE
 */
export class UpdateProductDto {
  readonly title: string;
  readonly price: number;
}
