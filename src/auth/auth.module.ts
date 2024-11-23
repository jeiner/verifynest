import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { TokenController } from './controllers/token/token.controller';
import { AuthService } from './services/auth/auth.service';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
      }),
    }),
  ],
  controllers: [AuthController, TokenController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
