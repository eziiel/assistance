import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return {
      message:
        'Esse é o começo da aplicação sobre o assistente do chat, em primeiro momento url/comercial-assist',
    }
  }
}
