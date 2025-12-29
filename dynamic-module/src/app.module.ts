import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubModule } from './sub/sub.module';
import { BbbModule } from './bbb/bbb.module';

@Module({
  imports: [SubModule.register({ aaa: 111, bbb: 222 }), BbbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
