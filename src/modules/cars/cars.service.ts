import { BadRequestException, Injectable } from '@nestjs/common';
import { CarProfile } from './entities/car.entity';
import { CreateCarProfileDto } from './dto/car_profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarsProfileService {
  constructor(
    @InjectRepository(CarProfile)
    private readonly carprofileRepository: Repository<CarProfile>,
  ) {}

  // create new car
  async createNewCarProfile(createCarProfile: CreateCarProfileDto) {
    const newCarProfile = this.carprofileRepository.create(createCarProfile);

    try {
      const result = await this.carprofileRepository.save(newCarProfile);
      return result;
    } catch (error) {
      throw new BadRequestException('Something went wrong when creating car!');
    }
  }
}
