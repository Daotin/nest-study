import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

export class UnLoginException {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

@Catch(UnLoginException)
export class UnLoginFilter implements ExceptionFilter {
  catch(exception: UnLoginException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<FastifyReply>();
    response.status(HttpStatus.UNAUTHORIZED).send({
      statusCode: HttpStatus.UNAUTHORIZED,
      message: 'Custom UnLoginException: ' + exception.message,
      data: '用户未登录',
    });
  }
}
