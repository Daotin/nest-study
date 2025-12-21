import {
  Controller,
  Get,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
// @UseInterceptors(TimeInterceptor)
// @UsePipes(ValidatePipe)
// @UseFilters(TestFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('111');
    return this.appService.getHello();
  }

  @Get('test')
  // @UseGuards(LoginGuard)
  getTest(): string {
    console.log('222');
    return 'This is a test endpoint';
  }

  @Get('number')
  // @UseFilters(TestFilter)
  getNum(@Query('num') num: number): string {
    console.log('number==>', num);
    return num + '';
  }
}
