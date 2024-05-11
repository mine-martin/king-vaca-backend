import { CarProfile } from './entities/car.entity';
import { CarsController } from './cars.controller';
import { CarsProfileService } from './cars.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CarProfile])],
  providers: [CarsProfileService],
  controllers: [CarsController],
})
export class CarsModule {}
