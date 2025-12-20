import { PartialType } from '@nestjs/mapped-types';
import { CreateGlabolModuleDto } from './create-glabol-module.dto';

export class UpdateGlabolModuleDto extends PartialType(CreateGlabolModuleDto) {}
