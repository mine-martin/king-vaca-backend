import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@/modules/app/data-source';

require('dotenv').config();

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
})
export class DatabaseModule {}
