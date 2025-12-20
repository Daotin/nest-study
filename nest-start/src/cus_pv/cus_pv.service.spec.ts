import { Test, TestingModule } from '@nestjs/testing';
import { CusPvService } from './cus_pv.service';

describe('CusPvService', () => {
  let service: CusPvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CusPvService],
    }).compile();

    service = module.get<CusPvService>(CusPvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
