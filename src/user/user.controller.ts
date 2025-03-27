import { Controller, Get, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/enum.config';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private logger: Logger,
  ) {
    this.logger.log('UserController init');
  }

  @Get()
  findAll() {
    console.log(this.configService.get(ConfigEnum.APP_NAME));
    this.logger.warn('UserController findAll');

    return this.userService.findAll();
  }
}
