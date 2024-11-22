import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from "@nestjs/axios";


@Module({
  imports: [
    AuthModule,
    UsersModule,
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles en toda la aplicación
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
