import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from './enum/enum.config';
@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    return (
      'Hello World!' +
      this.configService.get(ConfigEnum.DB_PORT) +
      '\n' +
      this.configService.get(ConfigEnum.APP_NAME)
    );
  }
}
