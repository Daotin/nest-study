import { forwardRef, Module } from '@nestjs/common';
import { BbbModule } from './bbb.module';
import { CccService } from './ccc.service';
import { DddService } from './ddd.service';

@Module({
  imports: [forwardRef(() => BbbModule)],
  providers: [CccService, DddService],
})
export class AaaModule {}
