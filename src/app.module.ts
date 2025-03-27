import { Module, Logger, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import * as Joi from 'joi';
const envFilePath = [`.env.${process.env.NODE_ENV || 'development'}`, '.env'];
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFilePath,
      //load: [() => dotenv.config({ path: '.env' }).parsed], // load 优先级高于 envFilePath
      validationSchema: Joi.object({
        APP_NAME: Joi.string().required(),
        DB_PORT: Joi.number().required().valid(8000),
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
  exports: [Logger],
})
export class AppModule {}
