import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  NotFoundException,
  BadRequestException,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CarsProfileService } from './cars.service';
import { CreateCarProfileDto } from './dto/car_profile.dto';
import { CarProfile } from './entities/car.entity';
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsProfileService) {}

  
  y
  // Create a new car profile
  @Post('/upload')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'photo1', maxCount: 1 },
      { name: 'photo2', maxCount: 1 },
      { name: 'photo3', maxCount: 1 },
    ]),
  )
  async createCarProfile(
    @Body() createCarProfileDto: CreateCarProfileDto,
    @UploadedFiles()
    files: {
      photo1?: Express.Multer.File[];
      photo2?: Express.Multer.File[];
      photo3?: Express.Multer.File[];
    },
  ) {
    console.log(files);

    // if (files.length !== 3) {
    //   throw new BadRequestException('Three photos are required');
    // }

    // const [photo1, photo2, photo3] = files.map(file => file.buffer);

    // return this.carsService.createNewCarProfile(
    //   createCarProfileDto,
    //   photo1,
    //   photo2,
    //   photo3,
    // );
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
  async update(
    @Param('id') id: string,
    @Body() updateCarProfileDto: CreateCarProfileDto,
  ): Promise<string> {
    const updatedProfile = await this.carsService.updateCarProfile(
      id,
      updateCarProfileDto,
    );
    return updatedProfile;
  }

  // Delete car profile by ID
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    // await this.carsService.deleteCarProfile(id);
    try {
      return await this.carsService.deleteCarProfile(id);
    } catch (error) {
      throw new NotFoundException(`Car details with id ${id} not found`);
    }
  }
}
