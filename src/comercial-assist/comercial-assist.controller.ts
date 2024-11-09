import { Controller, Get } from '@nestjs/common'

@Controller('comercial-assist')
export class ComercialAssistController {
  @Get('plans')
  findAll(): string {
    return 'Assistance comercial'
  }

  @Get()
  findOne(): string {
    return 'Assistance comercial'
  }
}
