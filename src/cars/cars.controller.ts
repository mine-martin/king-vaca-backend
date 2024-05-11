import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './cars.model';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  createCar(
    @Body('photo') photo: string,
    @Body('title') title: string,
    @Body('type') type: string,
    @Body('doors') doors: string,
    @Body('passengers') passengers: string,
    @Body('drive') drive: string,
    @Body('details') details: any,
  ): { id: string } {
    const generatedId = this.carsService.createCar(
      photo,
      title,
      type,
      doors,
      passengers,
      drive,
      details,
    );
    return { id: generatedId };
  }

  @Get()
  getAllCars(): Car[] {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id') carId: string): Car {
    return this.carsService.getSingleCar(carId);
  }

  @Patch(':id')
  updateCar(
    @Param('id') carId: string,
    @Body() updateData: Partial<Car>,
  ): void {
    this.carsService.updateCar(carId, updateData);
  }

  @Delete(':id')
  deleteCar(@Param('id') carId: string): void {
    this.carsService.deleteCar(carId);
  }
}
