import { SetMetadata } from '@nestjs/common';

export const Xxx = (...args: string[]) => SetMetadata('xxx', args);
