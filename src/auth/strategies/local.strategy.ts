import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  validate(user: string, password: string) {
    console.log('Inside LocalStrategy');
    const user_d = this.authService.validateUser({ user, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
