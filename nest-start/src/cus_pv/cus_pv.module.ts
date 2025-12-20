import { Module } from '@nestjs/common';
import { CusPvService } from './cus_pv.service';
import { CusPvController } from './cus_pv.controller';

@Module({
  controllers: [CusPvController],
  providers: [
    // 使用 useClass 提供一个类
    {
      provide: 'cus_pv_service', // 自定义的提供者标识符
      useClass: CusPvService, // 使用 useClass 提供一个类，Nest 会自动实例化它
    },
    // 使用 useValue 提供一个具体的值
    {
      provide: 'cus_pv_value',
      useValue: {
        aaa: 123,
        bbb: 456,
      },
    },
    // 还可以使用 useFactory 提供一个工厂函数
    {
      provide: 'cus_pv_factory',
      useFactory: () => {
        return {
          timestamp: Date.now(),
        };
      },
    },
  ],
})
export class CusPvModule {}
