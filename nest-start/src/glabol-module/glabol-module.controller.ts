import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlabolModuleService } from './glabol-module.service';
import { CreateGlabolModuleDto } from './dto/create-glabol-module.dto';
import { UpdateGlabolModuleDto } from './dto/update-glabol-module.dto';

@Controller('glabol-module')
export class GlabolModuleController {
  constructor(private readonly glabolModuleService: GlabolModuleService) {}

  @Post()
  create(@Body() createGlabolModuleDto: CreateGlabolModuleDto) {
    return this.glabolModuleService.create(createGlabolModuleDto);
  }

  @Get()
  findAll() {
    return this.glabolModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.glabolModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGlabolModuleDto: UpdateGlabolModuleDto) {
    return this.glabolModuleService.update(+id, updateGlabolModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.glabolModuleService.remove(+id);
  }
}
