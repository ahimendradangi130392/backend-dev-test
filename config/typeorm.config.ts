import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs('typeorm.config', (): TypeOrmModuleOptions => {
  const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: <string>process.env.PG_HOST_NAME,
    port: Number(process.env.PG_HOST_PORT),
    username: <string>process.env.PG_HOST_USER,
    password: <string>process.env.PG_HOST_PASSWORD,
    database: <string>process.env.PG_HOST_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: true,
    keepConnectionAlive: true,
  
  };
  return config;
});