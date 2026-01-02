import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class MyValidatePipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (!metadata.metatype) {
      return value;
    }
    const object = plainToInstance(metadata.metatype, value) as object;
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('我的验证失败了11');
    }
    return value;
  }
}
