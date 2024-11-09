import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ComercialAssistController } from './comercial-assist/comercial-assist.controller'

@Module({
  imports: [],
  controllers: [AppController, ComercialAssistController],
  providers: [AppService],
})
export class AppModule {}
