import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const logger = new Logger('NestApplication');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'log'], // ['error', 'warn', 'log', 'verbose', 'debug'],
  });
  await app.listen(8000);
  logger.log('Nest application is running on: http://localhost:8000');
}
bootstrap();
