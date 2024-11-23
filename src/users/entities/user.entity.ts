import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity('users') // Nombre de la tabla en la base de datos
export class UserEntity {
  @PrimaryGeneratedColumn() // Columna de clave primaria auto-generada
  id: number;

  @Column({ length: 50 }) // Columna de texto con una longitud máxima de 50 caracteres
  name: string;

  @Column({ unique: true }) // Columna de texto única para el correo electrónico
  username: string;

  @Column() // Columna de texto para la contraseña (se puede encriptar en el servicio)
  password: string;

  @Column({ default: true }) // Columna booleana con un valor por defecto
  isActive: boolean;

  @CreateDateColumn() // Columna que almacena la fecha de creación
  createdAt: Date;

  @UpdateDateColumn() // Columna que almacena la última fecha de actualización
  updatedAt: Date;
}
