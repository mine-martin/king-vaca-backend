import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';

@Module({
  providers: [CarsService],
  controllers: [CarsController]
})
export class CarsModule {}
