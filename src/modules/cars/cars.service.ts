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

  async createNewCarProfile(
    createCarProfileDto: CreateCarProfileDto,
  ): Promise<CarProfile> {
    try {
      const newCarProfile =
        this.carProfileRepository.create(createCarProfileDto);
      const savedCarProfile =
        await this.carProfileRepository.save(newCarProfile);
      return savedCarProfile;
    } catch (error) {
      throw new BadRequestException('Failed to create car profile');
    }
  }

  async getAllCarProfiles(): Promise<CarProfile[]> {
    try {
      const carProfiles = await this.carProfileRepository.find();
      return carProfiles;
    } catch (error) {
      throw new NotFoundException('No car profiles found');
    }
  }

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

  async updateCarProfile(
    id: string,
    updateCarProfileDto: CreateCarProfileDto,
  ): Promise<CarProfile> {
    try {
      const carProfile = await this.getCarProfileById(id);
      Object.assign(carProfile, updateCarProfileDto);
      const updatedCarProfile =
        await this.carProfileRepository.save(carProfile);
      return updatedCarProfile;
    } catch (error) {
      throw new BadRequestException('Failed to update car profile');
    }
  }

  async deleteCarProfile(id: string): Promise<void> {
    try {
      const carProfile = await this.getCarProfileById(id);
      await this.carProfileRepository.remove(carProfile);
    } catch (error) {
      throw new NotFoundException(`Car profile with id ${id} not found`);
    }
  }
}
