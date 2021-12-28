import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
export interface AppConfiguration {
    corsOptions: CorsOptions;
    port: number;
    prefix: string;
    production: boolean;
    environmentName: string;
}
declare const _default: () => {
    app: AppConfiguration;
};
export default _default;
