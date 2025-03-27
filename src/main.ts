import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createLogger, format, transports } from 'winston';
import { WinstonModule, utilities } from 'nest-winston';
import 'winston-daily-rotate-file';
async function bootstrap() {
  const loggerInstance = createLogger({
    transports: [
      new transports.Console({
        format: format.combine(format.timestamp(), utilities.format.nestLike()),
      }),
      new transports.DailyRotateFile({
        dirname: 'logs',
        filename: 'application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: format.combine(format.timestamp(), format.simple()),
      }),
    ],
  });

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerInstance),
  });
  await app.listen(8000);
}
bootstrap();
