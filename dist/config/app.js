"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultCorsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
    allowedHeaders: [
        'content-type',
        'access-token',
        'x-xsrf-token',
        'upload-offset',
        'upload-length',
        'upload-metadata',
        'x-http-method-override',
    ],
    exposedHeaders: ['content-type', 'expire'],
};
function getListEnv(env) {
    var _a;
    return (_a = process.env[env]) === null || _a === void 0 ? void 0 : _a.split(',');
}
function convertStringBooleanToBoolean(key) {
    return process.env[key] === 'true';
}
exports.default = () => {
    var _a, _b, _c, _d, _e;
    return ({
        app: {
            corsOptions: {
                origin: (_a = getListEnv('CORS_ORIGIN')) !== null && _a !== void 0 ? _a : defaultCorsOptions.origin,
                methods: (_b = getListEnv('CORS_METHODS')) !== null && _b !== void 0 ? _b : defaultCorsOptions.methods,
                allowedHeaders: (_c = getListEnv('CORS_ALLOWED_HEADERS')) !== null && _c !== void 0 ? _c : defaultCorsOptions.allowedHeaders,
                exposedHeaders: (_d = getListEnv('CORS_EXPOSED_HEADERS')) !== null && _d !== void 0 ? _d : defaultCorsOptions.exposedHeaders,
                credentials: convertStringBooleanToBoolean('CORS_CREDENTIALS'),
            },
            port: parseInt((_e = process.env.PORT) !== null && _e !== void 0 ? _e : '3000', 10),
            prefix: 'api',
            production: process.env.PRODUCTION === 'true',
            environmentName: process.env.ENVIRONMENT_NAME
                ? process.env.ENVIRONMENT_NAME
                : process.env.PRODUCTION === 'true'
                    ? 'production'
                    : 'pre-production',
        },
    });
};
//# sourceMappingURL=app.js.map