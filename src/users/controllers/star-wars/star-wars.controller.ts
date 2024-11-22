import { Controller, Get, Post, Body, Delete, Param, Put, Patch, Query, HttpException } from "@nestjs/common";
import { StarWarsService } from "../../services/star-wars/star-wars.service";
import { CreateUserDto, UpdateUserDto } from "../../dto/user.dto";

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

  }

}
