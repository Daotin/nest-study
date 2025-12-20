import { Injectable } from '@nestjs/common';
import { CreateCusPvDto } from './dto/create-cus_pv.dto';
import { UpdateCusPvDto } from './dto/update-cus_pv.dto';

@Injectable()
export class CusPvService {
  create(createCusPvDto: CreateCusPvDto) {
    return 'This action adds a new cusPv';
  }

  findAll() {
    return `This action returns all cusPv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cusPv`;
  }

  update(id: number, updateCusPvDto: UpdateCusPvDto) {
    return `This action updates a #${id} cusPv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cusPv`;
  }
}
