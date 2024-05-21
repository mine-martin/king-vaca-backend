import { AppConfig } from '../app.config';
import { CarsModule } from '@/modules/cars/cars.module';
import { ClsModule } from 'nestjs-cls';
import { ConfigModule } from '@nestjs/config';
import { DynamicModule, ForwardReference, Type } from '@nestjs/common';
import { HousesModule } from '@/modules/houses/houses.module';
import { LoggerModule } from 'nestjs-pino';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../data-source';
import { UploadModule } from '@/modules/upload/upload.module';

export const appModules: (
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>
)[] = [
  // Allow to access .env file and validate env variables
  ConfigModule.forRoot(AppConfig.getInitConifg()),
  ClsModule.forRoot({
    global: true,
    middleware: { mount: true },
  }),
  // Logger framework that better then NestJS default logger
  LoggerModule.forRoot(AppConfig.getLoggerConfig()),
  // Typeorm config
  TypeOrmModule.forRoot(dataSourceOptions),
  // Throttler config
  // ThrottlerModule.forRoot(AppConfig.getThrottlerConifg()),

  CarsModule,
  HousesModule,
  UploadModule
];
