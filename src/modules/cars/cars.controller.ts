import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CarsProfileService } from './cars.service';
import { CreateCarProfileDto } from './dto/car_profile.dto';
import { CarProfile } from './entities/car.entity';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsProfileService) {}

  // Create a new car profile
  @Post('/new')
  @ApiOperation({ summary: 'Create a new car profile' })
  @ApiResponse({
    status: 201,
    description: 'The car profile has been successfully created.',
  })
  create(
    @Body() createCarProfileDto: CreateCarProfileDto,
  ): Promise<CarProfile> {
    return this.carsService.createNewCarProfile(createCarProfileDto);
  }

  // Get all car profiles
  @Get()
  @ApiOperation({ summary: 'Get all car profiles' })
  @ApiResponse({
    status: 200,
    description: 'Returns all car profiles.',
  })
  getAll(): Promise<CarProfile[]> {
    return this.carsService.getAllCarProfiles();
  }

  // Get car profile by ID
  @Get(':id')
  @ApiOperation({ summary: 'Get car profile by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns car profile.',
  })
  @ApiResponse({
    status: 404,
    description: 'Car profile not found.',
  })
  getById(@Param('id') id: string): Promise<CarProfile> {
    return this.carsService.getCarProfileById(id);
  }

  // Update car profile by ID
  @Put(':id')
  @ApiOperation({ summary: 'Update car profile by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns updated car profile.',
  })
  @ApiResponse({
    status: 404,
    description: 'Car profile not found.',
  })
  update(
    @Param('id') id: string,
    @Body() updateCarProfileDto: CreateCarProfileDto,
  ): Promise<CarProfile> {
    return this.carsService.updateCarProfile(id, updateCarProfileDto);
  }

  // Delete car profile by ID
  @Delete(':id')
  @ApiOperation({ summary: 'Delete car profile by ID' })
  @ApiResponse({
    status: 200,
    description: 'Car profile has been successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Car profile not found.',
  })
  delete(@Param('id') id: string): Promise<void> {
    return this.carsService.deleteCarProfile(id);
  }
}
