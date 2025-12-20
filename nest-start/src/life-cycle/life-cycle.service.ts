import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateLifeCycleDto } from './dto/create-life-cycle.dto';
import { UpdateLifeCycleDto } from './dto/update-life-cycle.dto';

@Injectable()
export class LifeCycleService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('LifeCycle[Service] - onModuleInit called');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle[Service] - onApplicationBootstrap called');
  }

  onModuleDestroy() {
    console.log('LifeCycle[Service] - onModuleDestroy called');
  }

  beforeApplicationShutdown() {
    console.log('LifeCycle[Service] - beforeApplicationShutdown called');
  }

  onApplicationShutdown() {
    console.log('LifeCycle[Service] - onApplicationShutdown called');
  }

  create(createLifeCycleDto: CreateLifeCycleDto) {
    return 'This action adds a new lifeCycle';
  }

  findAll() {
    return `This action returns all lifeCycle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lifeCycle`;
  }

  update(id: number, updateLifeCycleDto: UpdateLifeCycleDto) {
    return `This action updates a #${id} lifeCycle`;
  }

  remove(id: number) {
    return `This action removes a #${id} lifeCycle`;
  }
}
