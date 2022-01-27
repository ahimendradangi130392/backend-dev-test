"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
let server;
async function bootstrap() {
    let nestAppOptions = {};
    const app = await core_1.NestFactory.create(app_module_1.AppModule, nestAppOptions);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    const configService = app.get(config_1.ConfigService);
    app.enableCors(configService.get("app.corsOptions"));
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return (0, serverless_express_1.default)({ app: expressApp });
}
const handler = async (event, context, callback) => {
    server = server !== null && server !== void 0 ? server : (await bootstrap());
    return server(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map