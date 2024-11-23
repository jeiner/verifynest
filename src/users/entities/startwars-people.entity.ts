import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('starwares_people') // Nombre de la tabla en la base de datos
export class CharacterEntity {
  @PrimaryGeneratedColumn() // ID auto-generado como clave primaria
  id: number;

  @Column({ length: 100 }) // Nombre del personaje
  name: string;

  @Column({ type: 'varchar', length: 10 }) // Altura del personaje
  height: string;

  @Column({ type: 'varchar', length: 10 }) // Masa del personaje
  mass: string;

  @Column({ type: 'varchar', length: 20 }) // Color de cabello
  hair_color: string;

  @Column({ type: 'varchar', length: 20 }) // Color de piel
  skin_color: string;

  @Column({ type: 'varchar', length: 20 }) // Color de ojos
  eye_color: string;

  @Column({ type: 'varchar', length: 20 }) // Año de nacimiento
  birth_year: string;

  @Column({ type: 'varchar', length: 10 }) // Género
  gender: string;

  @Column() // Enlace al planeta de origen
  homeworld: string;

  @Column('text', { array: true, nullable: true }) // Lista de URLs de películas
  films: string[];

  @Column('text', { array: true, nullable: true }) // Lista de URLs de especies
  species: string[];

  @Column('text', { array: true, nullable: true }) // Lista de URLs de vehículos
  vehicles: string[];

  @Column('text', { array: true, nullable: true }) // Lista de URLs de naves espaciales
  starships: string[];

  @CreateDateColumn({ type: 'timestamp' }) // Fecha de creación del registro
  created: Date;

  @UpdateDateColumn({ type: 'timestamp' }) // Fecha de última edición del registro
  edited: Date;

  @Column() // URL del recurso en la API
  url: string;
}
