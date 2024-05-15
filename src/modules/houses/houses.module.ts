import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseDetails } from './entities/house.entity';
import { HouseDetailsController } from './houses.controller';
import { HouseDetailsService } from './houses.service';

@Module({
  imports: [TypeOrmModule.forFeature([HouseDetails])],
  providers: [HouseDetailsService],
  controllers: [HouseDetailsController],
})
export class HousesModule {}
