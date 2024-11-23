import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import * as dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  // Configura el puerto desde las variables de entorno
  const port = process.env.PORT || 3000;
  console.log('PORT:', process.env.PORT);
  await app.listen(port);
}

bootstrap();
