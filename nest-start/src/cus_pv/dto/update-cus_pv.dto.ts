import { PartialType } from '@nestjs/mapped-types';
import { CreateCusPvDto } from './create-cus_pv.dto';

export class UpdateCusPvDto extends PartialType(CreateCusPvDto) {}
