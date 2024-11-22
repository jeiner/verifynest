import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from "../../dto/auth.tdo";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

   fakeUsers: any[] = [
    {
      id: 1,
      user: 'jeiner',
      password: 'root123++',
    },
    {
      id: 1,
      user: 'manuel',
      password: 'root123++',
    }
  ]

  constructor(private jwtService: JwtService) {
  }

  validateUser({user, password} : AuthPayloadDto){
    const findUser = this.fakeUsers.find((userd) => userd.user === user);
    if (!findUser) return null;
    if (password === findUser.password) {
      const {password, ...user} = findUser
      return {
        access_token: this.jwtService.sign(user),
      };
    }

  }
}
