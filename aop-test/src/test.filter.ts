import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class TestFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    response.status(400).json({
      statusCode: 400,
      message: 'Custom BadRequestException: ' + exception.message,
    });
  }
}

// 处理NotFoundException
@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    response.status(404).json({
      statusCode: 404,
      message: 'Custom NotFoundException: Resource not found',
    });
  }
}
