import { Module } from '@nestjs/common';
import { StarWarsController } from './controllers/star-wars/star-wars.controller';
import { StarWarsService } from './services/star-wars/star-wars.service';
import { HomeController } from './controllers/home/home.controller';
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlanetEntity } from "./entities/planets.entity";
import { StarWarsEntity } from "./entities/startwars-people.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([PlanetEntity, StarWarsEntity]),
    HttpModule,

  ],
  controllers: [
    StarWarsController,
    HomeController,
  ],
  providers: [StarWarsService]
})
export class UsersModule {}
