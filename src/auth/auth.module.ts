import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { TokenController } from './controllers/token/token.controller';
import { AuthService } from './services/auth/auth.service';

@Module({
  controllers: [AuthController, TokenController],
  providers: [AuthService]
})
export class AuthModule {}
