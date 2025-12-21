import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    console.log(`--- TimeInterceptor start ---`);
    // next.handle()：触发后续拦截器或目标路由处理器（Controller）的执行。它返回一个 RxJS Observable，代表响应数据流。
    // .pipe(tap(...)): 使用 RxJS 的 tap 操作符来执行副作用。tap 会在 Observable 发出值（即响应返回）时触发，且不会修改响应数据本身。
    return next.handle().pipe(
      tap(() => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`--- TimeInterceptor end: ${duration}ms ---`);
      }),
    );
  }
}
