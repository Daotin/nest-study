import { Controller, Get, UseGuards, Headers, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { XxxGuard } from './xxx.guard';
import { Xxx } from './xxx.decorator';
import { Yyy } from './yyy.decorator';
import { CusQuery } from './query.decorator';
import { MyHeaders } from './myheader.decorator';
import { MyQuery } from './myquery.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Xxx('admin')
  @UseGuards(XxxGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Yyy('yyy', 'user')
  getYyy(): string {
    return 'this is yyy';
  }

  @Get('test')
  test(@CusQuery('query') query: string): string {
    return `this is test with query: ${query}`;
  }

  @Get('headers')
  getHeaders(
    @Headers() headers1: Record<string, any>,
    @MyHeaders() headers2: Record<string, any>,
  ) {
    console.log('headers1：', headers1);
    console.log('headers2：', headers2);
    return 'check console for headers';
  }

  @Get('query')
  getQuery(@Query() name: string, @MyQuery('age') age: string) {
    console.log('name：', name);
    console.log('age：', age);
    return 'check console for query params';
  }
}
