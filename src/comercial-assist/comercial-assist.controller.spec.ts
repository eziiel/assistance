import { Test, TestingModule } from '@nestjs/testing'
import { ComercialAssistController } from './comercial-assist.controller'

describe('ComercialAssistController', () => {
  let controller: ComercialAssistController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComercialAssistController],
    }).compile()

    controller = module.get<ComercialAssistController>(
      ComercialAssistController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
