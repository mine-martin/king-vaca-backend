import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { CarsProfileService } from './cars.service';
import { CreateCarProfileDto } from './dto/car_profile.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsProfileService) {}

  @Post('/new')
  @ApiOperation({ summary: 'Create a new space' })
  @ApiResponse({
    status: 201,
    description: 'The car has been successfully created.',
  })
  create(@Body() createCarProfile: CreateCarProfileDto) {
    return this.carsService.createNewCarProfile(createCarProfile);
  }
}
