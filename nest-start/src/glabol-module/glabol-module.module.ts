import { Global, Module } from '@nestjs/common';
import { GlabolModuleService } from './glabol-module.service';
import { GlabolModuleController } from './glabol-module.controller';

@Global()
@Module({
  controllers: [GlabolModuleController],
  providers: [GlabolModuleService],
  exports: [GlabolModuleService],
})
export class GlabolModuleModule {}
