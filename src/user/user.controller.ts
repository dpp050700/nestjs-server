import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/enum.config';
// import { Logger } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
@Controller('user')
export class UserController {
  // private logger = new Logger(UserController.name);
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

    return this.userService.findAll();
  }
}
