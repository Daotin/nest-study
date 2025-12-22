import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class XxxGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('guard==>', this.reflector.get('xxx', context.getHandler()));
    // console.log('guard1==>', this.reflector.get('xxx', context.getClass()));

    return true;
  }
}
