import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CarProfile } from './entities/car.entity';
import { CreateCarProfileDto } from './dto/car_profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarsProfileService {
  constructor(
    @InjectRepository(CarProfile)
    private readonly carProfileRepository: Repository<CarProfile>,
  ) {}

  // Create a new car profile with image upload
  async createNewCarProfile(
    createCarProfileDto: CreateCarProfileDto,
    photo1: Uint8Array,
    photo2: Uint8Array,
    photo3: Uint8Array,
  ): Promise<string> {
    try {
      // Create new car profile with photos
      const newCarProfile = this.carProfileRepository.create({
        ...createCarProfileDto,
        photo1,
        photo2,
        photo3,
      });

      // Save car profile
      const savedCarProfile = await this.carProfileRepository.save(newCarProfile);

      return `Car profile with ID ${savedCarProfile.id} has been created`;
    } catch (error) {
      throw new BadRequestException('Failed to create car profile');
    }
  }


  // Get all car profiles
  async getAllCarProfiles(): Promise<CarProfile[]> {
    const carProfiles = await this.carProfileRepository.find();
    if (carProfiles.length === 0) {
      throw new NotFoundException('No car profiles found');
    }
    return carProfiles;
  }

  // Get car profile by ID
  async getCarProfileById(id: string): Promise<CarProfile> {
    try {
      const carProfile = await this.carProfileRepository.findOneOrFail({
        where: { id },
      });
      return carProfile;
    } catch (error) {
      throw new NotFoundException(`Car profile with id ${id} not found`);
    }
  }

  // Update car profile by ID
  async updateCarProfile(
    id: string,
    updateCarProfileDto: CreateCarProfileDto,
  ): Promise<string> {
    try {
      const carProfile = await this.getCarProfileById(id);
      Object.assign(carProfile, updateCarProfileDto);
      await this.carProfileRepository.save(carProfile);
      return `Car profile with ID ${id} has been updated`;
    } catch (error) {
      throw new BadRequestException('Failed to update car profile');
    }
  }

  // Delete car profile by ID
  async deleteCarProfile(id: string): Promise<string> {
    try {
      const carProfile = await this.getCarProfileById(id);
      await this.carProfileRepository.remove(carProfile);
      return `Car profile with ID ${id} has been deleted`;
    } catch (error) {
      throw new NotFoundException(`Car profile with id ${id} not found`);
    }
  }
}
