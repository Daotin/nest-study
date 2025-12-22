import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CusQuery = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return 'abc';
  },
);
