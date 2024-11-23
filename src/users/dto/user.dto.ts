import { UserStatus } from "../entities/users";
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  @IsString()
  description: string;
}


export class UpdateUserDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([UserStatus.PENDING, UserStatus.IN_PROGRESS, UserStatus.DONE])
  estatus?: UserStatus;
}
