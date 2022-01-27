import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import {
  ScheduleModule as NestScheduleModule,
  ScheduleModule,
} from "@nestjs/schedule";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FeaturesModule } from "./features/feature.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeormConfig from "config/typeorm.config";
import { LoggerModule } from "nestjs-rollbar";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig,
    }),

    LoggerModule.forRoot({
      accessToken: "ROLLBAR_TOKEN",
      environment: "ENVIROMENT",
    }),
    FeaturesModule,
    ScheduleModule,
    NestScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
