import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (isNaN(Number(value))) {
      throw new BadRequestException('Validation failed: Not a number');
    }
    return value * 10;
  }
}
