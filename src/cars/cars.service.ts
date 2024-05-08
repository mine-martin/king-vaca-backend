import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './cars.model';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  // Create a new car
  createCar(
    photo: string,
    title: string,
    type: string,
    doors: string,
    passengers: string,
    drive: string,
    details: any,
  ): string {
    const id = uuidv4();
    const newCar = new Car(
      id,
      photo,
      title,
      type,
      doors,
      passengers,
      drive,
      details,
    );
    this.cars.push(newCar);
    return `Car with ID ${id} created successfully.`;
  }

  // Get all cars
  getAllCars(): Car[] {
    return [...this.cars];
  }

  // Get a single car by ID
  getSingleCar(carId: string): Car {
    const car = this.fetchCar(carId);
    return { ...car };
  }

  // Update a car
  updateCar(carId: string, updateData: Partial<Car>): void {
    const car = this.fetchCar(carId);
    Object.assign(car, updateData);
  }

  // Delete a car
  deleteCar(carId: string): void {
    const index = this.cars.findIndex((car) => car.id === carId);
    if (index === -1) {
      throw new NotFoundException('Could not find a car with the provided ID.');
    }
    this.cars.splice(index, 1);
  }

  // Helper function to find a car by ID
  private fetchCar(carId: string): Car {
    const carIndex = this.cars.findIndex((car) => car.id === carId);
    const car = this.cars[carIndex];
    if (!car) {
      throw new NotFoundException('Could not find a car with the provided ID.');
    }
    return car;
  }
}
