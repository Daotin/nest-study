import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonService } from './person/person.service';
import { GlabolModuleService } from './glabol-module/glabol-module.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly personService: PersonService,
    private readonly globolService: GlabolModuleService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + ' , ' + this.globolService.findAll();
  }

  @Get('app')
  getApp(): string {
    return `This is AppController, ${this.personService.personServiceTest()}`;
  }
}
