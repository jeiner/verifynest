import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {

  @Get()
  main(){
    return "server on ";
  }
}
