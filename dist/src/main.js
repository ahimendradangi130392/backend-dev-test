"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    let nestAppOptions = {};
    const app = await core_1.NestFactory.create(app_module_1.AppModule, nestAppOptions);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    const configService = app.get(config_1.ConfigService);
    app.enableCors(configService.get("app.corsOptions"));
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map