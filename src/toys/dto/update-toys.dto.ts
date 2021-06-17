/**
 * описываем, какие поля будем ожидать в объекте из метода UPDATE
 */
export class UpdateToysDto {
  readonly title: string;
  readonly price: number;
}
