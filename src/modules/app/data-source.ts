import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const dotenvPath = path.resolve(process.cwd(), `.env`);
const result = dotenv.config({ path: dotenvPath });
if (result.error) {
  /* do nothing */
}

const extraOption =
  process.env.NODE_ENV === 'production'
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {};

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/src/migrations/*_migration.js'],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  extra: extraOption,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
