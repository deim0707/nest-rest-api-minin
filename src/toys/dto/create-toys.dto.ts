/**
 * описываем, какие поля будем ожидать в объекте из метода POST
 */
export class CreateToysDto {
  readonly title: string;
  readonly price: number;
}
