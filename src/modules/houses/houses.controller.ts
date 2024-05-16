import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { HouseDetailsService } from './houses.service';
import { CreateHouseDetailsDto } from './dto/house_profile.dto';
import { HouseDetails } from './entities/house.entity';

@Controller('houses')
export class HouseDetailsController {
  constructor(private readonly houseDetailsService: HouseDetailsService) {}

  @Get()
  async findAll(): Promise<HouseDetails[]> {
    return this.houseDetailsService.getAllHouseDetails();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HouseDetails> {
    try {
      return await this.houseDetailsService.getHouseDetailsById(id);
    } catch (error) {
      throw new NotFoundException(`House details with id ${id} not found`);
    }
  }

  @Post('/new')
  async create(
    @Body() createHouseDetailsDto: CreateHouseDetailsDto,
  ): Promise<string> {
    try {
      return await this.houseDetailsService.createHouseDetails(
        createHouseDetailsDto,
      );
    } catch (error) {
      throw new BadRequestException('Failed to create house details');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHouseDetailsDto: CreateHouseDetailsDto,
  ): Promise<string> {
    try {
      return await this.houseDetailsService.updateHouseDetails(
        id,
        updateHouseDetailsDto,
      );
    } catch (error) {
      throw new BadRequestException('Failed to update house details');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.houseDetailsService.deleteHouseDetails(id);
    } catch (error) {
      throw new NotFoundException(`House details with id ${id} not found`);
    }
  }
}
