import {
  Controller,
  Get,
  Req,
  Res,
  Body,
  Post,
  ValidationPipe,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { PipeBodyDto } from './dto/pipe-body.dto';
import { MyValidatePipe } from './myvalidate.pipe';
import { UnLoginException, UnLoginFilter } from './test.filter';

@Controller()
@UseFilters(UnLoginFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: FastifyRequest, @Res() reply: FastifyReply) {
    throw new UnLoginException('用户未登录');
    // console.log(request.url);
    // console.log(reply.statusCode);
    // reply.header('fastify-url', request.url);
    // reply.send(this.appService.getHello());
    // return this.appService.getHello();
  }

  @Post('/pipe')
  pipeTest(@Body() body: PipeBodyDto) {
    console.log(body);
    return `recive body ==> ${JSON.stringify(body)} `;
  }
}
