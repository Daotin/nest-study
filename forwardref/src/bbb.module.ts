import { forwardRef, Module } from '@nestjs/common';
import { AaaModule } from './aaa.module';

@Module({
  imports: [forwardRef(() => AaaModule)],
})
export class BbbModule {}
