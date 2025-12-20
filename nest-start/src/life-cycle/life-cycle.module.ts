import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { LifeCycleService } from './life-cycle.service';
import { LifeCycleController } from './life-cycle.controller';

@Module({
  controllers: [LifeCycleController],
  providers: [LifeCycleService],
})
export class LifeCycleModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('LifeCycle[Module] - onModuleInit called');
  }

  onApplicationBootstrap() {
    console.log('LifeCycle[Module] - onApplicationBootstrap called');
  }

  onModuleDestroy() {
    console.log('LifeCycle[Module] - onModuleDestroy called');
  }

  beforeApplicationShutdown() {
    console.log('LifeCycle[Module] - beforeApplicationShutdown called');
  }

  onApplicationShutdown() {
    const service = this.moduleRef.get(LifeCycleService, { strict: false });
    console.log('============>', service.findAll());
    console.log('LifeCycleModule - onApplicationShutdown called');
  }
}
