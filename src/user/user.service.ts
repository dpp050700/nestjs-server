import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/enum.config';
@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}
  findAll() {
    return (
      this.configService.get(ConfigEnum.DB_PORT) +
      this.configService.get(ConfigEnum.APP_NAME)
    );
  }
}
