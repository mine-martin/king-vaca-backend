import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [HousesService],
  controllers: [HousesController],
})
export class HousesModule {}
