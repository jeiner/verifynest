import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn, OneToMany
} from "typeorm";
import { StarWarsEntity } from "./startwars-people.entity";

@Entity('planets')
export class PlanetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  rotation_period: string;

  @Column({ type: 'varchar', length: 50 })
  orbital_period: string;

  @Column({ type: 'varchar', length: 50 })
  diameter: string;

  @Column({ type: 'varchar', length: 255 })
  climate: string;

  @Column({ type: 'varchar', length: 255 })
  gravity: string;

  @Column({ type: 'varchar', length: 255 })
  terrain: string;

  @Column({ type: 'varchar', length: 50 })
  surface_water: string;

  @Column({ type: 'varchar', length: 50 })
  population: string;

  @Column('simple-array', {nullable: true})
  residents: string[];

  @Column('simple-array',{nullable: true})
  films: string[];

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  edited: Date;

  @Column({ type: 'varchar', length: 255 })
  url: string;


  // Relación con la entidad StarWarsEntity
  @OneToMany(() => StarWarsEntity, (character) => character.planet)
  residentsEntities: StarWarsEntity[];
}
