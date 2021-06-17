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

@Controller('toys')
export class ToysController {
  /**
   * инжектируем сервис в контроллер в конструкторе класса
   */
  constructor(private readonly toysService: ToysService) {}
  @Get()
  getAll() {
    return this.toysService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.toysService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() crateToy: CreateToysDto) {
    return this.toysService.create(crateToy);
  }

  @Delete(':id')
  remove(@Param('id') id): string {
    return `remove id: ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateProduct: UpdateToysDto,
    @Param('id') id: string,
  ): string {
    return `remove id: ${id}. updated: ${updateProduct.title}`;
  }
}
