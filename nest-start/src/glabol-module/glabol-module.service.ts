import { Injectable } from '@nestjs/common';
import { CreateGlabolModuleDto } from './dto/create-glabol-module.dto';
import { UpdateGlabolModuleDto } from './dto/update-glabol-module.dto';

@Injectable()
export class GlabolModuleService {
  create(createGlabolModuleDto: CreateGlabolModuleDto) {
    return 'This action adds a new glabolModule';
  }

  findAll() {
    return `This action returns all glabolModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} glabolModule`;
  }

  update(id: number, updateGlabolModuleDto: UpdateGlabolModuleDto) {
    return `This action updates a #${id} glabolModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} glabolModule`;
  }
}
