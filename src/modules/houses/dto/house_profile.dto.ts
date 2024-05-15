import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class DetailsImagesDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  HouseImg1: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  HouseImg2: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  HouseImg3: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  HouseImg4: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  HouseImg5: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  HouseImg6: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  HouseImg7: string;
}

class OtherDetailsDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  Longdescription: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  Location: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  BasicInfo: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  Amenities: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  NearBy: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  Reviews: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  Comments: string;
}

export class CreateHouseDetailsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  HouseDetailsListimage: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  HouseName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Shortdescription: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => DetailsImagesDto)
  detailsImages: DetailsImagesDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => OtherDetailsDto)
  OtherDetails: OtherDetailsDto;
}
