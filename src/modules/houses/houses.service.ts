import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHouseDetailsDto } from './dto/house_profile.dto';
import { HouseDetails } from './entities/house.entity';

@Injectable()
export class HouseDetailsService {
  constructor(
    @InjectRepository(HouseDetails)
    private readonly houseDetailsRepository: Repository<HouseDetails>,
  ) {}

  // Create a new house profile
  async createHouseDetails(
    createHouseDetailsDto: CreateHouseDetailsDto,
  ): Promise<string> {
    try {
      const newHouseDetails =
        this.houseDetailsRepository.create(createHouseDetailsDto);
      const savedHouseDetails =
        await this.houseDetailsRepository.save(newHouseDetails);
      return `House details with ID ${savedHouseDetails.id} have been created`;
    } catch (error) {
      throw new BadRequestException('Failed to create house details');
    }
  }

  // Get all house profiles
  async getAllHouseDetails(): Promise<HouseDetails[]> {
    const houseDetailsList = await this.houseDetailsRepository.find();
    if (houseDetailsList.length === 0) {
      throw new NotFoundException('No house details found');
    }
    return houseDetailsList;
  }

  // Get house details by ID
  async getHouseDetailsById(id: string): Promise<HouseDetails> {
    try {
      const houseDetails = await this.houseDetailsRepository.findOneOrFail({
        where: { id },
      });
      return houseDetails;
    } catch (error) {
      throw new NotFoundException(`House details with id ${id} not found`);
    }
  }

  // Update house details by ID
  async updateHouseDetails(
    id: string,
    updateHouseDetailsDto: CreateHouseDetailsDto,
  ): Promise<string> {
    try {
      const houseDetails = await this.getHouseDetailsById(id);
      Object.assign(houseDetails, updateHouseDetailsDto);
      await this.houseDetailsRepository.save(houseDetails);
      return `House details with ID ${id} have been updated`;
    } catch (error) {
      throw new BadRequestException('Failed to update house details');
    }
  }

  // Delete house details by ID
  async deleteHouseDetails(id: string): Promise<string> {
    try {
      const houseDetails = await this.getHouseDetailsById(id);
      await this.houseDetailsRepository.remove(houseDetails);
      return `House details with ID ${id} have been deleted`;
    } catch (error) {
      throw new NotFoundException(`House details with id ${id} not found`);
    }
  }
}
