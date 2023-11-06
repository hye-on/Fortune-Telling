import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Nest 애플리케이션 인스턴스를 생성
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
