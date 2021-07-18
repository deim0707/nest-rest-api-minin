import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateToysDto } from './dto/create-toys.dto';
import { Toy, ToyDocument } from './schemas/toy.schema';
import { UpdateToysDto } from './dto/update-toys.dto';

// сервис - абстрактный слой для логики
@Injectable()
export class ToysService {
  // инжектируем в конструктор модель и указыем откуда её берём. кладём её в приватную переменую, указываем её тип, дальше везде используем её
  constructor(@InjectModel(Toy.name) private toyModule: Model<ToyDocument>) {}

  async getAll(): Promise<Toy[]> {
    return this.toyModule.find().exec();
  }

  async getById(id: string): Promise<Toy> {
    return this.toyModule.findById(id);
  }

  async create(toys: CreateToysDto): Promise<Toy> {
    // this.toys.push({
    //   ...toys,
    //   id: Date.now().toString(),
    // });
    const newToy = new this.toyModule(toys);
    return newToy.save();
  }

  async remove(id: string): Promise<Toy> {
    return this.toyModule.findByIdAndRemove(id);
  }

  async update(id: string, toy: UpdateToysDto): Promise<Toy> {
    // третьим параметром передаём, что если модель не была найдена - она должна создаться
    return this.toyModule.findByIdAndUpdate(id, toy, { new: true });
  }
}
