import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyValidatePipe } from './myvalidate.pipe';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: MyValidatePipe,
    },
  ],
})
export class AppModule {}
