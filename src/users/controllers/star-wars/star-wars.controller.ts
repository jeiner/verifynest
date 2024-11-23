import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
  Patch,
  Query,
  HttpException,
  UseGuards
} from "@nestjs/common";
import { StarWarsService } from "../../services/star-wars/star-wars.service";
import { CreateUserDto, UpdateUserDto } from "../../dto/user.dto";
import { CreateStarWarsDto } from "../../dto/create-starwars.dto";
import { StarWarsEntity } from "../../entities/startwars-people.entity";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";

@Controller('star-wars')
export class StarWarsController {

  constructor(private starWarsService: StarWarsService) {
  }

  @Get('people')
  listAllUsers(
    @Query('page') page: number,  // Parámetro `page`
  ){
    if(!page) throw new HttpException('El parametro page es obligtorio', 404)
    const params = `?page=${page}`
    return this.starWarsService.getPeople(params);
  }

  @Get('planets')
  listAllPlanetas(
    @Query('page') page: number,  // Parámetro `page`
  ){
    if(!page) throw new HttpException('El parametro page es obligtorio', 400  )
    const params = `?page=${page}`
    return this.starWarsService.getAllPlanets(params);
  }
  @Get('process-etl')
  async processEtl(){
    try {
      // Obtener listados de peoples
      const peoplesRaw = await this.starWarsService.getPeople(`?page=1`);
      // Obtener listados de planets
      const planets = await this.starWarsService.getAllPlanets(`?page=1`);
      // Transformar datos de peoples
      const peoples = peoplesRaw.map((person) => ({
        ...person,
        created: new Date(person.created), // Convertir string a Date
        edited: new Date(person.edited), // Convertir string a Date
      }));
      return await this.starWarsService.savePlanetsAndPeoples(planets, peoples);
    } catch (error) {
      throw new Error(`Error while saving data: ${error.message}`);
    }
  }

  @Get('historial')
  async getHistorial(
    @Query('start') start: number=0,
    @Query('lenght') lenght: number=10,
    @Query('search') search?: string,
  ){
    try {
      return  await this.starWarsService.getAllWithPlanets(Number(start), Number(lenght), search )
    } catch (error) {
      throw new Error(`Error while reading data: ${error.message}`);
    }
  }


  @Post('almacenar')
  async create(@Body() createStarWarsDto: CreateStarWarsDto): Promise<StarWarsEntity> {
    // Llamamos al servicio para crear el nuevo personaje con los datos proporcionados en el cuerpo de la solicitud.
    return this.starWarsService.createStarWars(createStarWarsDto);
  }


/*
  @Post()
  createUser(@Body() newUser: CreateUserDto){
    console.log(newUser)
    return this.starWarsService.createUser(newUser.title, newUser.description)
  }
  @Delete(':id')
  deleteUser(@Param('id') id : string){
    this.starWarsService.DeleteUser(id)
    return {'message': 'eliminado correctamente'}
  }
  @Patch(':id')
  updateUser(@Param('id') id : string, @Body() updateFields: UpdateUserDto) {
    return this.starWarsService.updateUser(id, updateFields)

  }*/

}
