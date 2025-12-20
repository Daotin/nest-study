import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CusPvService } from './cus_pv.service';
import { CreateCusPvDto } from './dto/create-cus_pv.dto';
import { UpdateCusPvDto } from './dto/update-cus_pv.dto';

@Controller('cus-pv')
export class CusPvController {
  constructor(
    // 手动指定注入对象的 token
    @Inject('cus_pv_service') private readonly cusPvService: CusPvService,
    @Inject('cus_pv_value')
    private readonly cusPvValue: { aaa: number; bbb: number },
    @Inject('cus_pv_factory')
    private readonly cusPvFactory: { timestamp: number },
  ) {}

  @Post()
  create(@Body() createCusPvDto: CreateCusPvDto) {
    return this.cusPvService.create(createCusPvDto);
  }

  @Get()
  findAll() {
    console.log('cusPvValue:', this.cusPvValue);
    console.log('cusPvFactory:', this.cusPvFactory);
    return this.cusPvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cusPvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCusPvDto: UpdateCusPvDto) {
    return this.cusPvService.update(+id, updateCusPvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cusPvService.remove(+id);
  }
}
