import { Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';
import { AaaV2Controller } from './aaav2.controlle';

@Module({
  controllers: [AaaV2Controller, AaaController],
  providers: [AaaService],
})
export class AaaModule {}
