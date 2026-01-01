import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { FastifyRequest, FastifyReply } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: FastifyRequest, @Res() reply: FastifyReply) {
    console.log(request.url);
    console.log(reply.statusCode);
    reply.header('fastify-url', request.url);
    reply.send(this.appService.getHello());
    // return this.appService.getHello();
  }
}
