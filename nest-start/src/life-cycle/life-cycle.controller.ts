import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { LifeCycleService } from './life-cycle.service';
import { CreateLifeCycleDto } from './dto/create-life-cycle.dto';
import { UpdateLifeCycleDto } from './dto/update-life-cycle.dto';

@Controller('life-cycle')
export class LifeCycleController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly lifeCycleService: LifeCycleService) {}

  onModuleInit() {
    console.log('LifeCycle[Controller] - onModuleInit called');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle[Controller] - onApplicationBootstrap called');
  }

  onModuleDestroy() {
    console.log('LifeCycle[Controller] - onModuleDestroy called');
  }

  beforeApplicationShutdown() {
    console.log('LifeCycle[Controller] - beforeApplicationShutdown called');
  }

  onApplicationShutdown() {
    console.log('LifeCycle[Controller] - onApplicationShutdown called');
  }

  @Post()
  create(@Body() createLifeCycleDto: CreateLifeCycleDto) {
    return this.lifeCycleService.create(createLifeCycleDto);
  }

  @Get()
  findAll() {
    return this.lifeCycleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lifeCycleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLifeCycleDto: UpdateLifeCycleDto,
  ) {
    return this.lifeCycleService.update(+id, updateLifeCycleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lifeCycleService.remove(+id);
  }
}
