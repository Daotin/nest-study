import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局中间件
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   console.log(`Request...`, req.url);
  //   next();
  //   console.log(`Response...`, req.url);
  // });

  // 全局Guard方式一
  // app.useGlobalGuards(new LoginGuard());

  // app.useGlobalInterceptors(new TimeInterceptor());
  //
  // app.useGlobalPipes(new ValidatePipe());

  // app.useGlobalFilters(new TestFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
