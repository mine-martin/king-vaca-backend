import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HouseDetailsService } from './houses.service';
import { CreateHouseDetailsDto } from './dto/house_profile.dto';
import { HouseDetails } from './entities/house.entity';

@Controller('houses')
export class HouseDetailsController {
  constructor(private readonly houseDetailsService: HouseDetailsService) {}

  @Get()
  findAll(): Promise<HouseDetails[]> {
    return this.houseDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<HouseDetails> {
    return this.houseDetailsService.findOne(id);
  }

  @Post('/new')
  create(
    @Body() createHouseDetailsDto: CreateHouseDetailsDto,
  ): Promise<HouseDetails> {
    return this.houseDetailsService.create(createHouseDetailsDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateHouseDetailsDto: CreateHouseDetailsDto,
  ): Promise<HouseDetails> {
    return this.houseDetailsService.update(id, updateHouseDetailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.houseDetailsService.remove(id);
  }
}
