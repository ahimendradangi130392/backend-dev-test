import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";
import { NestApplicationOptions, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  let nestAppOptions: NestApplicationOptions = {};

  const app = await NestFactory.create(AppModule, nestAppOptions);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  /**
   * Enable CORS
   */
  app.enableCors(configService.get("app.corsOptions"));
  await app.listen(process.env.PORT);
}
bootstrap();
