import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter, NotFoundFilter } from './test.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // 全局Guard方式二
    // {
    //   provide: APP_GUARD,
    //   useClass: LoginGuard,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TimeInterceptor,
    // },
    {
      provide: APP_PIPE,
      useClass: ValidatePipe,
    },
    {
      provide: APP_FILTER,
      useClass: TestFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundFilter,
    },
  ],
})
export class AppModule implements NestModule {
  // 启用路由中间件
  configure(consumer: MiddlewareConsumer) {
    // 只对 /test 和 /test/* 路径生效，使用 *path 来命名通配符参数
    // consumer.apply(LogMiddleware).forRoutes('test*path');
  }
}
