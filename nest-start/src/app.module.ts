import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { CusPvModule } from './cus_pv/cus_pv.module';
import { GlabolModuleModule } from './glabol-module/glabol-module.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';

@Module({
  imports: [PersonModule, CusPvModule, GlabolModuleModule, LifeCycleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
