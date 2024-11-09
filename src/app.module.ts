import { Module } from '@nestjs/common'
import { ComercialAssistController } from './comercial-assist/comercial-assist.controller'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ComercialAssistService } from './comercial-assist/comercial-assist.service'

@Module({
  imports: [],
  controllers: [AppController, ComercialAssistController],
  providers: [AppService, ComercialAssistService],
})
export class AppModule {}
