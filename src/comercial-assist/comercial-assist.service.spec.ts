import { Test, TestingModule } from '@nestjs/testing'
import { ComercialAssistService } from './comercial-assist.service'

describe('ComercialAssistService', () => {
  let service: ComercialAssistService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComercialAssistService],
    }).compile()

    service = module.get<ComercialAssistService>(
      ComercialAssistService,
    )
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
