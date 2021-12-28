"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('typeorm.config', () => {
    const config = {
        type: 'postgres',
        host: process.env.PG_HOST_NAME,
        port: Number(process.env.PG_HOST_PORT),
        username: process.env.PG_HOST_USER,
        password: process.env.PG_HOST_PASSWORD,
        database: process.env.PG_HOST_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        migrationsRun: true,
        keepConnectionAlive: true,
    };
    return config;
});
//# sourceMappingURL=typeorm.config.js.map