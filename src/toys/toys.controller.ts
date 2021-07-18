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
} from '@nestjs/common';
import { CreateToysDto } from './dto/create-toys.dto';
import { UpdateToysDto } from './dto/update-toys.dto';
import { ToysService } from './toys.service';
import { Toy } from './schemas/toy.schema';

@Controller('toys')
export class ToysController {
  /**
   * инжектируем сервис в контроллер в конструкторе класса
   */
  constructor(private readonly toysService: ToysService) {}

  @Get()
  getAll(): Promise<Toy[]> {
    return this.toysService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Toy> {
    return this.toysService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() crateToy: CreateToysDto): Promise<Toy> {
    return this.toysService.create(crateToy);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Toy> {
    return this.toysService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateToy: UpdateToysDto,
    @Param('id') id: string,
  ): Promise<Toy> {
    return this.toysService.update(id, updateToy);
  }
}
