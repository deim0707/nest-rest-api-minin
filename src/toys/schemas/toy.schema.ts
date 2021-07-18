import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// документация на эту тему https://docs.nestjs.com/techniques/mongodb

// так обычно работают с мангусом вне Неста
// new mongoose Schema({
//   title: String,
//   price: Number,
// })

export type ToyDocument = Toy & Document;

@Schema()
export class Toy {
  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const ToySchema = SchemaFactory.createForClass(Toy);
