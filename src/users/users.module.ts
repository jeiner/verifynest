import { Module } from '@nestjs/common';
import { StarWarsController } from './controllers/star-wars/star-wars.controller';
import { StarWarsService } from './services/star-wars/star-wars.service';
import { HomeController } from './controllers/home/home.controller';

@Module({
  controllers: [StarWarsController, HomeController],
  providers: [StarWarsService]
})
export class UsersModule {}
