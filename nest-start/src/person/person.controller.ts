import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // query
  @Get('find')
  queryTest(@Query('name') name: string, @Query('age') age: string) {
    return `recive name ==> ${name} , age ==> ${age} `;
  }

  // url param
  @Get(':id')
  urlParamTest(@Param('id') id: string) {
    return `recive id ==> ${id} `;
  }

  // body
  @Post()
  bodyTest(@Body() body: CreatePersonDto) {
    return `recive body ==> ${JSON.stringify(body)} `;
  }

  // json
  @Post()
  jsonTest(@Body() body: CreatePersonDto) {
    return `recive json ==> ${JSON.stringify(body)} `;
  }

  // form data
  @Post('upload')
  // 它会解析 multipart/form-data 格式的请求，将上传的文件保存到指定的 dest 目录（此处为 uploads），并使这些文件可以通过 @UploadedFiles() 装饰器在方法参数中访问。
  /**
   * 
   * NestJS 中，拦截器（如 AnyFilesInterceptor）是一个类，需要绑定到应用中才能拦截请求。绑定方式包括：

装饰器绑定：使用 @UseInterceptors() 在控制器类或方法上应用。
全局绑定：在应用启动时（通常在 main.ts 中）使用 app.useGlobalInterceptors() 全局启用。
没有这些绑定，拦截器不会被触发，无法处理请求。
   */
  @UseInterceptors(
    AnyFilesInterceptor({
      // 文件上传拦截器
      // 配置上传选项
      dest: './uploads', // 文件保存路径
    }),
  )
  formDataTest(
    @Body() body: CreatePersonDto,
    @UploadedFiles() files: Express.Multer.File[], // 从 HTTP 请求中提取上传的文件
  ) {
    console.log(files);
    return `recive form data ==> ${JSON.stringify(body)} `;
  }

  // @Post()
  // create(@Body() createPersonDto: CreatePersonDto) {
  //   return this.personService.create(createPersonDto);
  // }

  // @Get()
  // findAll() {
  //   return this.personService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
  //   return this.personService.update(+id, updatePersonDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personService.remove(+id);
  // }
}
