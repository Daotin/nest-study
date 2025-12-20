import { Test, TestingModule } from '@nestjs/testing';
import { CusPvController } from './cus_pv.controller';
import { CusPvService } from './cus_pv.service';

describe('CusPvController', () => {
  let controller: CusPvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CusPvController],
      providers: [CusPvService],
    }).compile();

    controller = module.get<CusPvController>(CusPvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
