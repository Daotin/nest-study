import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { XxxGuard } from './xxx.guard';
import { Xxx } from './xxx.decorator';

export function Yyy(path: string, role: string) {
  return applyDecorators(Get(path), Xxx(role), UseGuards(XxxGuard));
}
