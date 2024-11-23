import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';
import { AppController } from "./app.controller";

// Carga las variables de entorno desde el archivo .env
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles en toda la aplicación
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos (PostgreSQL en este caso)
      host: process.env.DB_HOST, // Host de la base de datos
      port: parseInt(process.env.DB_PORT, 10), // Puerto
      username: process.env.DB_USERNAME, // Usuario
      password: process.env.DB_PASSWORD, // Contraseña
      database: process.env.DB_DATABASE, // Nombre de la base de datos
      ssl: {
        rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true', // false desactiva la validación
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Rutas de las entidades
      synchronize:  false, // Sincronización automática (¡usar solo en desarrollo!)
    }),
    AuthModule,
    UsersModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
