import { Controller, Get, Post, Body, Delete, Param, Put, Patch } from "@nestjs/common";
import { StarWarsService } from "../../services/star-wars/star-wars.service";
import { CreateUserDto, UpdateUserDto } from "../../dto/user.dto";

@Controller('star-wars')
export class StarWarsController {

  constructor(private starWarsService: StarWarsService) {
  }

  @Get()
  listAllUsers(){
    return this.starWarsService.getAllUsers();
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
