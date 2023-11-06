import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 데코레이터 : 필수 메타데이터와 연결하고 Nest가 라우팅 맵을 생성할 수 있도록 함
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
