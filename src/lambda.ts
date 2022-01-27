import { Handler, Context, Callback } from "aws-lambda";
import { Server } from "http";
import { ConfigService } from "@nestjs/config";
import { NestApplicationOptions, ValidationPipe } from "@nestjs/common";
import serverlessExpress from "@vendia/serverless-express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

let server: Handler;

async function bootstrap(): Promise<Server> {
  let nestAppOptions: NestApplicationOptions = {};
  const app = await NestFactory.create(AppModule, nestAppOptions);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  /**
   * Enable CORS
   */
  app.enableCors(configService.get("app.corsOptions"));
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();

  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
