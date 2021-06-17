import { Injectable } from '@nestjs/common';
import { CreateToysDto } from './dto/create-toys.dto';

@Injectable()
export class ToysService {
  private toys = [];

  getAll() {
    return this.toys;
  }

  getById(id: string) {
    return this.toys.find((toy) => toy.id === id);
  }

  create(toys: CreateToysDto) {
    this.toys.push({
      ...toys,
      id: Date.now().toString(),
    });
  }
}
