import { DynamicModule, Module } from '@nestjs/common';
import { SubService } from './sub.service';
import { SubController } from './sub.controller';

@Module({
  controllers: [SubController],
  providers: [SubService],
})
export class SubModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: SubModule,
      providers: [
        SubService,
        {
          provide: 'SUB_MODULE_OPTIONS',
          useValue: options,
        },
      ],
      controllers: [SubController],
    };
  }
}
