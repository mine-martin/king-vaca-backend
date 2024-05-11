import * as Joi from 'joi';
import { ConfigModuleOptions } from '@nestjs/config';
import { IncomingMessage, ServerResponse } from 'http';
import { LogLevel, NodeEnv } from 'src/shared/enums';
import { Params } from 'nestjs-pino';

export class AppConfig {
  public static getInitConifg(): ConfigModuleOptions {
    const validNodeEnvList = Object.keys(NodeEnv).map((key) => NodeEnv[key]);
    const validLogLevelList = Object.keys(LogLevel).map((key) => LogLevel[key]);

    return {
      isGlobal: true,
      validationSchema: Joi.object(<
        { [P in keyof NodeJS.ProcessEnv]: Joi.SchemaInternals }
      >{
        PORT: Joi.number().min(1).max(65535).required(),
        NODE_ENV: Joi.string()
          .valid(...validNodeEnvList)
          .required(),
        LOG_LEVEL: Joi.string()
          .allow('')
          .valid(...validLogLevelList)
          .optional(),
        BASE_PATH: Joi.string().allow('').optional(),
        CLUSTERING: Joi.boolean().required(),
      }),
    };
  }

  public static getLoggerConfig(): Params {
    const { NODE_ENV, LOG_LEVEL, CLUSTERING } = process.env;

    return {
      pinoHttp: {
        transport:
          NODE_ENV !== NodeEnv.PRODUCTION
            ? {
                target: 'pino-pretty',
                options: {
                  translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
                },
              }
            : null,
        autoLogging: true,
        level:
          LOG_LEVEL ||
          (NODE_ENV === NodeEnv.PRODUCTION ? LogLevel.INFO : LogLevel.TRACE),
        serializers: {
          req(request: IncomingMessage) {
            return {
              method: request.method,
              url: request.url,
              // Including the headers in the log could be in violation of privacy laws, e.g. GDPR.
              // headers: request.headers,
            };
          },
          res(reply: ServerResponse) {
            return {
              statusCode: reply.statusCode,
            };
          },
        },
        customAttributeKeys: {
          responseTime: 'timeSpent',
        },
        base: CLUSTERING === 'true' ? { pid: process.pid } : {},
      },
    };
  }

  // public static getThrottlerConifg(): ThrottlerModuleOptions {
  //   return {
  //     ttl: 60,
  //     limit: 10,
  //   };
  // }
}
