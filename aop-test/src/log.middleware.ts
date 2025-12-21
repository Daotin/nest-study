import { Injectable, NestMiddleware } from '@nestjs/common';

// 路由中间件
@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`Request2...`, req.url);
    next();
    console.log(`Response2...`, req.url);
  }
}
