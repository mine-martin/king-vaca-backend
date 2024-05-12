import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCarProfileDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  // @IsNotEmpty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  photo1: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  photo2: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  photo3: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rating: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  overview: string;

  @ApiProperty()
  @IsOptional()
  features: {
    type: string;
    doors: string;
    passengers: string;
    luggage: string;
    drive: string;
  };

  @ApiProperty()
  @IsOptional()
  location: {
    location: string;
  };

  @ApiProperty()
  @IsOptional()
  reviews: {
    stars: string;
  };

  @ApiProperty()
  @IsOptional()
  comments: {
    name: string;
    updateTime: string;
    rating: string;
    photo: string;
    dateLocation: string;
    comment: string;
  };
}
