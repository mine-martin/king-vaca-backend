import { NestApplication, NestFactory } from '@nestjs/core';

import { AppConfig } from './modules/app/app.config';
import { AppModule } from './modules/app/app.module';
import { Logger, PinoLogger } from 'nestjs-pino';
import { clusterize } from './utils/clustering';
import helmet from 'helmet';
import initializeSwagger from './utils/swagger/initialize-swagger';

const { BASE_PATH, CLUSTERING, PORT } = process.env;

const bootstrap = async () => {
  const INADDR_ANY = '0.0.0.0';

  const app = await NestFactory.create<NestApplication>(
    AppModule,
    // this logger instance only for logging the app init message (e.g. InstanceLoader),
    // since before booting the app, LoggerModule is not loaded yet
    { logger: new Logger(new PinoLogger(AppConfig.getLoggerConfig()), {}) },
  );

  app.enableVersioning();

  // properly set headers using helmet
  app.use(helmet());

  // Enable CORS by default because Swagger UI required
  app.enableCors();

  app.setGlobalPrefix(BASE_PATH);

  app.listen(PORT, INADDR_ANY);

  // setup Swagger
  initializeSwagger(app);
};
if (CLUSTERING === 'true') clusterize(bootstrap);
else bootstrap();
