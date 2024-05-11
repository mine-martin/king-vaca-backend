import * as packageJSON from '@/../package.json';
import { APP_NAME } from 'src/shared/constants/app';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestApplication } from '@nestjs/core';
import { capitalize } from '../formatting-data';
import dotenv from 'dotenv';

dotenv.config();

const { BACKEND_URL, SWAGGER_DOC_PATH } = process.env;

export const getSwaggerDocument = async (nestApp: NestApplication) => {
  const backendDomain = BACKEND_URL?.split('//')[1];

  const config = new DocumentBuilder()
    .setTitle(capitalize(APP_NAME))
    .setDescription(packageJSON.description)
    .setVersion(packageJSON.version)
    .addServer(BACKEND_URL, 'Production')
    .addServer(`https://staging-api.${backendDomain}`, 'Staging')
    .addServer(`https://uat-api.${backendDomain}`, 'UAT')
    .addTag(
      'API reference',
      `Reference for all API endpoints used in ${APP_NAME} application`,
    )
    .setVersion(packageJSON.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(nestApp, config);

  return {
    document,
    nestApp,
  };
};

const initializeSwagger = async (app: NestApplication) => {
  const { document } = await getSwaggerDocument(app);
  SwaggerModule.setup(SWAGGER_DOC_PATH || '/docs', app, document);
};

export default initializeSwagger;
