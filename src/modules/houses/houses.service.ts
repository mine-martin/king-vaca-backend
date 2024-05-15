import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHouseDetailsDto } from './dto/house_profile.dto';
import { HouseDetails } from './entities/house.entity';

@Injectable()
export class HouseDetailsService {
  constructor(
    @InjectRepository(HouseDetails)
    private houseDetailsRepository: Repository<HouseDetails>,
  ) {}

  findAll(): Promise<HouseDetails[]> {
    return this.houseDetailsRepository.find();
  }

  findOne(id: number): Promise<HouseDetails> {
    return this.houseDetailsRepository.findOne({ where: { id } });
  }

  create(createHouseDetailsDto: CreateHouseDetailsDto): Promise<HouseDetails> {
    const houseDetails = this.houseDetailsRepository.create(
      createHouseDetailsDto,
    );
    return this.houseDetailsRepository.save(houseDetails);
  }

  async update(
    id: number,
    updateHouseDetailsDto: CreateHouseDetailsDto,
  ): Promise<HouseDetails> {
    await this.houseDetailsRepository.update(id, updateHouseDetailsDto);
    return this.houseDetailsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.houseDetailsRepository.delete(id);
  }
}
