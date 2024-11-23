import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "../../services/auth/auth.service";
import { AuthPayloadDto } from "../../dto/auth.tdo";

import { LocalGuard } from "../../guards/local.guard";
import { JwtAuthGuard } from "../../guards/jwt.guard";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }


  @Post('login')
  login(@Body() authPayLoad: AuthPayloadDto){
    console.log(authPayLoad)
    const user =  this.authService.validateUser(authPayLoad)
    if (!user) throw new HttpException('Invalid Credentials', 401)
    return user
  }

  @UseGuards(JwtAuthGuard)
  @Get('status')
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');

    return 'hola';
  }

}
