// src/starwars/dto/create-starwars.dto.ts

import { IsString, IsArray, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateStarWarsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  height: string;

  @IsString()
  @IsNotEmpty()
  mass: string;

  @IsString()
  @IsNotEmpty()
  hair_color: string;

  @IsString()
  @IsNotEmpty()
  skin_color: string;

  @IsString()
  @IsNotEmpty()
  eye_color: string;

  @IsString()
  @IsNotEmpty()
  birth_year: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  homeworld: string;

  @IsArray()
  @IsOptional()
  films?: string[];

  @IsArray()
  @IsOptional()
  species?: string[];

  @IsArray()
  @IsOptional()
  vehicles?: string[];

  @IsArray()
  @IsOptional()
  starships?: string[];

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  planetId: number; // El ID del planeta
}
